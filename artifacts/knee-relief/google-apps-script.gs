/**
 * KneeGlide Health — Lead capture endpoint
 * ------------------------------------------------------------
 * Receives "Get Relief" qualification form submissions, appends
 * each one as a row in the connected Google Sheet, and emails a
 * notification to the team.
 *
 * SETUP (one time):
 *  1. Open your Google Sheet:
 *     https://docs.google.com/spreadsheets/d/1DFcfG_zlI14sPeW0bWqKEeOPitmZ1MngiB1CmbwLWWk/edit
 *  2. Extensions > Apps Script.
 *  3. Delete any starter code, paste this whole file, and Save.
 *  4. Click Deploy > New deployment.
 *       - Type: Web app
 *       - Description: KneeGlide lead capture
 *       - Execute as: Me
 *       - Who has access: Anyone
 *  5. Authorize when prompted (allow Sheets + Gmail access).
 *  6. Copy the Web app URL that ends in /exec and send it back.
 *     That URL is what the website posts form submissions to.
 *
 * To change who gets notified, edit NOTIFY_EMAIL below.
 */

var SPREADSHEET_ID = "1DFcfG_zlI14sPeW0bWqKEeOPitmZ1MngiB1CmbwLWWk";
var SHEET_NAME = "Leads";
var NOTIFY_EMAIL = "abbey@qsbsrollover.com";

var HEADERS = [
  "Submitted At",
  "Phone",
  "Email",
  "Zip Code",
  "Which Knee",
  "Pain Symptoms",
  "Seen Doctor / PT / Injections",
  "Insurance Type",
  "Age Range",
  "Gender",
  "Privacy Consent",
  "Contact Consent (TCPA)",
  "First Name",
  "Last Name",
];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = getSheet_();

    var row = [
      data.submittedAt || new Date().toISOString(),
      data.phone || "",
      data.email || "",
      data.zipCode || "",
      data.whichKnee || "",
      data.painSymptoms || "",
      data.seenDoctor || "",
      data.insuranceType || "",
      data.ageRange || "",
      data.gender || "",
      data.consentPrivacy ? "Yes" : "No",
      data.consentTcpa ? "Yes" : "No",
      data.firstName || "",
      data.lastName || "",
    ];

    sheet.appendRow(row);
    sendNotification_(data);

    return json_({ result: "success" });
  } catch (err) {
    return json_({ result: "error", message: String(err) });
  }
}

function doGet() {
  return json_({ result: "ok", message: "KneeGlide lead endpoint is live." });
}

/**
 * Run this once from the editor (select "testSetup" in the toolbar dropdown and
 * click Run). It forces Google to ask for permissions, including sending email,
 * then writes a test row and emails NOTIFY_EMAIL so you can confirm both work.
 * Delete the test row from the sheet afterward if you like.
 */
function testSetup() {
  var sample = {
    submittedAt: new Date().toISOString(),
    firstName: "Test",
    lastName: "Lead",
    phone: "(555) 123-4567",
    email: "test@example.com",
    zipCode: "12345",
    whichKnee: "Both",
    painSymptoms: "Pain going up/down stairs, Swelling or stiffness",
    seenDoctor: "Yes",
    insuranceType: "Medicare",
    ageRange: "60-69",
    gender: "Female",
    consentPrivacy: true,
    consentTcpa: true,
  };
  var sheet = getSheet_();
  sheet.appendRow([
    sample.submittedAt,
    sample.phone,
    sample.email,
    sample.zipCode,
    sample.whichKnee,
    sample.painSymptoms,
    sample.seenDoctor,
    sample.insuranceType,
    sample.ageRange,
    sample.gender,
    "Yes",
    "Yes",
    sample.firstName,
    sample.lastName,
  ]);
  sendNotification_(sample);
}

function getSheet_() {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function sendNotification_(data) {
  var subject = "New KneeGlide lead" + (data.zipCode ? " — " + data.zipCode : "");
  var lines = [
    "A new lead just completed the Get Relief form.",
    "",
    "Name: " + ((data.firstName || "") + " " + (data.lastName || "")).trim(),
    "Phone: " + (data.phone || ""),
    "Email: " + (data.email || ""),
    "Zip Code: " + (data.zipCode || ""),
    "Which Knee: " + (data.whichKnee || ""),
    "Pain Symptoms: " + (data.painSymptoms || ""),
    "Seen Doctor / PT / Injections: " + (data.seenDoctor || ""),
    "Insurance Type: " + (data.insuranceType || ""),
    "Age Range: " + (data.ageRange || ""),
    "Gender: " + (data.gender || ""),
    "",
    "Submitted At: " + (data.submittedAt || new Date().toISOString()),
  ];

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: subject,
    body: lines.join("\n"),
  });
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
