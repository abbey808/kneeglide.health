import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CheckCircle2, ShieldCheck, Lock, ArrowRight, ArrowLeft } from "lucide-react";

const painSymptoms = [
  { id: "painStairs", label: "Pain going up/down stairs" },
  { id: "painSitting", label: "Pain after sitting for long periods" },
  { id: "painSwelling", label: "Swelling or stiffness" },
  { id: "painGrinding", label: "Grinding or popping sensation" },
  { id: "painNight", label: "Pain that wakes you at night" },
  { id: "painDull", label: "Dull or consistent aching pain" },
];

const whichKneeOptions = [
  { id: "left", label: "Left" },
  { id: "right", label: "Right" },
  { id: "both", label: "Both" },
];

const insuranceOptions = [
  { id: "medicare", label: "Medicare" },
  { id: "commercial", label: "Commercial Insurance (like BlueCross, Aetna, UnitedHealth, etc.)" },
  { id: "both", label: "Both Medicare & Commercial" },
  { id: "unsure-uninsured", label: "I'm not sure / uninsured" },
];

const formSchema = z.object({
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  zipCode: z.string().min(5, "Please enter a valid zip code").max(10),
  gender: z.string().min(1, "Please select an option"),
  ageRange: z.string().min(1, "Please select an age range"),
  seenDoctor: z.string().min(1, "Please select an option"),
  whichKnee: z.enum(["left", "right", "both"], { errorMap: () => ({ message: "Please select an option" }) }),
  insuranceType: z.enum(["medicare", "commercial", "both", "unsure-uninsured"], { errorMap: () => ({ message: "Please select an option" }) }),
  painSymptoms: z.array(z.string()).min(1, "Please select at least one symptom"),
  consentPrivacy: z.literal(true, { errorMap: () => ({ message: "You must agree to continue" }) }),
  consentTcpa: z.literal(true, { errorMap: () => ({ message: "You must agree to be contacted to continue" }) }),
});

type FormValues = z.infer<typeof formSchema>;

const TOTAL_STEPS = 6;

const stepLabels: Record<number, string> = {
  1: "Which Knee",
  2: "Your Symptoms",
  3: "Your History",
  4: "Insurance",
  5: "About You",
  6: "Check Local Availability",
};

export function QualificationFormSection() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(1);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      phone: "",
      email: "",
      zipCode: "",
      gender: "",
      ageRange: "",
      seenDoctor: "",
      whichKnee: undefined as unknown as "left",
      insuranceType: undefined as unknown as "medicare",
      painSymptoms: [],
      consentPrivacy: undefined as unknown as true,
      consentTcpa: undefined as unknown as true,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    setLocation("/thank-you");
  };

  const whichKneeValue = form.watch("whichKnee");
  const painSymptomsValue = form.watch("painSymptoms");
  const seenDoctorValue = form.watch("seenDoctor");
  const insuranceTypeValue = form.watch("insuranceType");
  const ageRangeValue = form.watch("ageRange");
  const genderValue = form.watch("gender");

  const goNext = async () => {
    let fieldsToValidate: (keyof FormValues)[] = [];
    if (step === 1) fieldsToValidate = ["whichKnee"];
    else if (step === 2) fieldsToValidate = ["painSymptoms"];
    else if (step === 3) fieldsToValidate = ["seenDoctor"];
    else if (step === 4) fieldsToValidate = ["insuranceType"];
    else if (step === 5) fieldsToValidate = ["ageRange", "gender"];

    const valid = await form.trigger(fieldsToValidate);
    if (valid) setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  };

  const goBack = () => setStep((s) => Math.max(1, s - 1));

  const progressPct = (step / TOTAL_STEPS) * 100;

  return (
    <section id="qualification-form" className="py-24 relative">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-bold mb-4 md:whitespace-nowrap">
            Find out if <span className="text-primary underline decoration-primary/30 decoration-4 underline-offset-4">GAE</span> is right for you
          </h2>
          <p className="text-xl text-muted-foreground">
            Takes 2 minutes. No commitment required.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-border/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-[#FFB3B5]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="mb-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm text-foreground/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="font-medium">HIPAA-Compliant</span>
              </div>
              <span className="hidden sm:inline text-emerald-200">|</span>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-600" />
                <span className="font-medium">Secure & Private</span>
              </div>
              <span className="hidden sm:inline text-emerald-200">|</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="font-medium">No spam, ever</span>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <FormField
                        control={form.control}
                        name="whichKnee"
                        render={({ field }) => (
                          <FormItem className="space-y-4 bg-muted/30 p-6 rounded-xl border border-border/20">
                            <div className="mb-2">
                              <FormLabel className="text-lg font-medium text-foreground block mb-1">
                                Which knee is bothering you?
                              </FormLabel>
                              <p className="text-sm text-muted-foreground">Select one</p>
                            </div>
                            <FormControl>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {whichKneeOptions.map((option) => {
                                  const isSelected = field.value === option.id;
                                  return (
                                    <button
                                      key={option.id}
                                      type="button"
                                      onClick={() => field.onChange(option.id)}
                                      className={`p-4 rounded-xl border-2 text-left text-sm font-medium transition-all ${
                                        isSelected
                                          ? "bg-primary/10 border-primary text-primary"
                                          : "bg-white border-border/40 text-muted-foreground hover:border-primary/40 hover:bg-primary/5"
                                      }`}
                                    >
                                      {option.label}
                                    </button>
                                  );
                                })}
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <FormField
                        control={form.control}
                        name="painSymptoms"
                        render={({ field }) => (
                          <FormItem className="space-y-4 bg-muted/30 p-6 rounded-xl border border-border/20">
                            <div className="mb-2">
                              <FormLabel className="text-lg font-medium text-foreground block mb-1">
                                Which symptoms apply to you?
                              </FormLabel>
                              <p className="text-sm text-muted-foreground">Select all that apply</p>
                            </div>
                            <FormControl>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {painSymptoms.map((symptom) => {
                                  const isSelected = field.value?.includes(symptom.id);
                                  return (
                                    <button
                                      key={symptom.id}
                                      type="button"
                                      onClick={() => {
                                        const current = field.value || [];
                                        if (isSelected) {
                                          field.onChange(current.filter((id: string) => id !== symptom.id));
                                        } else {
                                          field.onChange([...current, symptom.id]);
                                        }
                                      }}
                                      className={`p-4 rounded-xl border-2 text-left text-sm font-medium transition-all ${
                                        isSelected
                                          ? "bg-primary/10 border-primary text-primary"
                                          : "bg-white border-border/40 text-muted-foreground hover:border-primary/40 hover:bg-primary/5"
                                      }`}
                                    >
                                      {symptom.label}
                                    </button>
                                  );
                                })}
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <FormField
                        control={form.control}
                        name="seenDoctor"
                        render={({ field }) => (
                          <FormItem className="space-y-4 bg-muted/30 p-6 rounded-xl border border-border/20">
                            <FormLabel className="text-lg text-foreground font-medium block mb-2">
                              Have you seen a doctor, physical therapist, discussed surgery, or had injections for your knee pain?
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                className="flex space-x-6"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="yes" />
                                  </FormControl>
                                  <FormLabel className="font-normal text-base cursor-pointer">Yes</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="no" />
                                  </FormControl>
                                  <FormLabel className="font-normal text-base cursor-pointer">No</FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <FormField
                        control={form.control}
                        name="insuranceType"
                        render={({ field }) => (
                          <FormItem className="space-y-4 bg-muted/30 p-6 rounded-xl border border-border/20">
                            <div className="mb-2">
                              <FormLabel className="text-lg font-medium text-foreground block mb-1">
                                Do you have health insurance?
                              </FormLabel>
                              <p className="text-sm text-muted-foreground">Select one</p>
                            </div>
                            <FormControl>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {insuranceOptions.map((option) => {
                                  const isSelected = field.value === option.id;
                                  return (
                                    <button
                                      key={option.id}
                                      type="button"
                                      onClick={() => field.onChange(option.id)}
                                      className={`p-4 rounded-xl border-2 text-left text-sm font-medium transition-all ${
                                        isSelected
                                          ? "bg-primary/10 border-primary text-primary"
                                          : "bg-white border-border/40 text-muted-foreground hover:border-primary/40 hover:bg-primary/5"
                                      }`}
                                    >
                                      {option.label}
                                    </button>
                                  );
                                })}
                              </div>
                            </FormControl>
                            {field.value && (
                              <p className="text-sm text-muted-foreground pt-2">
                                GAE is covered by Medicare and a growing number of commercial plans. Cash-pay options are also available.
                              </p>
                            )}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  )}

                  {step === 5 && (
                    <motion.div
                      key="step5"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                      <FormField
                        control={form.control}
                        name="ageRange"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base text-foreground/80 font-medium">Age Range</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className="rounded-xl h-12 border-border/50">
                                  <SelectValue placeholder="Select..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="under-40">Under 40</SelectItem>
                                <SelectItem value="40-49">40-49</SelectItem>
                                <SelectItem value="50-59">50-59</SelectItem>
                                <SelectItem value="60-69">60-69</SelectItem>
                                <SelectItem value="70-79">70-79</SelectItem>
                                <SelectItem value="80-plus">80+</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base text-foreground/80 font-medium">Gender</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className="rounded-xl h-12 border-border/50">
                                  <SelectValue placeholder="Select..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                                <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  )}

                  {step === 6 && (
                    <motion.div
                      key="step6"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                    >
                      <p className="text-sm text-muted-foreground">
                        Last step. Enter your contact details so we can check provider availability in your area.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <FormField
                          control={form.control}
                          name="zipCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base text-foreground/80 font-medium">Zip Code</FormLabel>
                              <FormControl>
                                <Input placeholder="12345" type="text" inputMode="numeric" className="rounded-xl h-12 border-border/50 focus:border-primary focus:ring-primary" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base text-foreground/80 font-medium">Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="you@example.com" type="email" className="rounded-xl h-12 border-border/50 focus:border-primary focus:ring-primary" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-base text-foreground/80 font-medium">Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="(555) 123-4567" type="tel" className="rounded-xl h-12 border-border/50 focus:border-primary focus:ring-primary" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="space-y-4 pt-2">
                        <FormField
                          control={form.control}
                          name="consentPrivacy"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 bg-muted/30 p-4 rounded-xl border border-border/20">
                              <FormControl>
                                <Checkbox
                                  checked={field.value === true}
                                  onCheckedChange={(checked) => field.onChange(checked === true ? true : undefined)}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm text-muted-foreground">
                                  I acknowledge that only a qualified local provider may contact me about treatment options. We do not spam or sell your data to serial marketers.{" "}
                                  <Link href="/privacy">
                                    <span className="text-primary underline cursor-pointer hover:text-[#B30005]">Read our Privacy & Data Use policy</span>
                                  </Link>
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="consentTcpa"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 bg-muted/30 p-4 rounded-xl border border-border/20">
                              <FormControl>
                                <Checkbox
                                  checked={field.value === true}
                                  onCheckedChange={(checked) => field.onChange(checked === true ? true : undefined)}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm text-muted-foreground">
                                  I agree to be contacted by KneeGlide Health and its affiliated providers by phone, text, and email about knee pain treatment options. Consent is not a condition of treatment. Reply STOP to opt out. See our{" "}
                                  <Link href="/privacy">
                                    <span className="text-primary underline cursor-pointer hover:text-[#B30005]">full communications consent terms</span>
                                  </Link>
                                  {" "}for details.
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  {step > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      onClick={goBack}
                      className="rounded-full px-6 py-6 border-border/50 text-foreground/70 hover:bg-muted gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </Button>
                  )}

                  {step < TOTAL_STEPS && (
                    <Button
                      type="button"
                      size="lg"
                      onClick={goNext}
                      disabled={
                        (step === 1 && !whichKneeValue) ||
                        (step === 2 && (!painSymptomsValue || painSymptomsValue.length === 0)) ||
                        (step === 4 && !insuranceTypeValue)
                      }
                      className="flex-1 text-lg rounded-full py-6 bg-primary hover:bg-[#B30005] text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed gap-2"
                    >
                      Next
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  )}

                  {step === TOTAL_STEPS && (
                    <Button
                      type="submit"
                      size="lg"
                      className="flex-1 text-lg rounded-full py-6 bg-primary hover:bg-[#B30005] text-white font-semibold hover:scale-[1.02] transition-transform"
                    >
                      Find Relief
                    </Button>
                  )}
                </div>

                {step === TOTAL_STEPS && (
                  <div className="rounded-lg bg-primary/5 border border-primary/20 px-4 py-3 text-center text-sm text-foreground/80">
                    A representative from KneeGlide Health will be in touch within 24 hours.
                  </div>
                )}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
