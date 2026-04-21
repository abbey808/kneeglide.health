import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import logo from "@assets/Screenshot_2026-04-16_at_11.33.35_AM_1776353630113.png";

export default function Privacy() {
  return (
    <div className="w-full min-h-screen bg-background">
      <header className="w-full z-20 bg-background/80 backdrop-blur-sm border-b border-border/30 px-6 md:px-8 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <img src={logo} alt="KneeGlide Health" className="h-10 md:h-12 w-auto cursor-pointer" />
          </Link>
          <Link href="/">
            <Button variant="ghost" className="rounded-full gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
        </div>
      </header>

      <main className="container px-4 mx-auto max-w-3xl py-16 md:py-24">
        <h1 className="font-display text-5xl md:text-6xl text-foreground font-bold mb-8">
          Privacy & <span className="text-primary">Data Use</span>
        </h1>

        <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">What This Site Does</h2>
            <p>
              This website serves as a referral layer connecting individuals experiencing knee pain with local healthcare providers who offer minimally invasive treatments such as Genicular Artery Embolization (GAE). We are not a medical provider, we help you find one near you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">Your Information Will Not Be Sold</h2>
            <p>
              We do not sell your personal information to third parties. Your data is treated with care and used solely for the purpose of connecting you with appropriate local providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">How Your Information May Be Shared</h2>
            <p>
              Information you submit through our qualification form may be shared anonymously with healthcare providers in your local area who perform non-invasive knee treatments such as GAE. This sharing is limited to providers who may be able to help you. Your information is never distributed broadly or shared with unrelated parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">Provider Contact</h2>
            <p>
              By submitting the qualification form on this site, you grant permission for a local provider to contact you regarding your knee pain and potential treatment options. Only providers in your area who specialize in relevant treatments will receive your information and may reach out to you directly.
            </p>
          </section>

          <section id="tcpa-consent">
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">Communications Consent (TCPA)</h2>
            <p>
              By checking the communications consent box on the qualification form, you provide your express written consent to be contacted by KneeGlide Health and its affiliated healthcare providers at the phone number and email address you provided, including by autodialed calls, prerecorded or artificial voice messages, and SMS/text messages, regarding knee pain treatment options and related services.
            </p>
            <p className="mt-4">
              Message and data rates may apply. Message frequency varies. Your consent to receive these communications is not a condition of any purchase, service, or treatment. You may opt out of SMS messages at any time by replying STOP to any text message, and you may opt out of phone calls by asking the caller to remove you from their list. Standard carrier message and data rates may apply to any messages sent to or received from KneeGlide Health.
            </p>
            <p className="mt-4">
              For help with text messages, reply HELP. For more information about how your contact information is used, see the other sections of this Privacy & Data Use page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">Your Consent</h2>
            <p>
              Submitting the form on this website constitutes your consent to the data practices described on this page. You acknowledge that a qualified local provider, and only a local provider, may contact you about treatment options. Your information will not be shared broadly or used for unrelated purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">Questions?</h2>
            <p>
              If you have any questions about how your information is used, please reach out to us through the contact information provided on this site.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link href="/">
            <Button className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-[#B30005] text-white">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </main>

      <footer className="py-8 text-center text-muted-foreground/60 text-sm border-t border-border/20">
        <p>© {new Date().getFullYear()} KneeGlide Health. All rights reserved.</p>
      </footer>
    </div>
  );
}
