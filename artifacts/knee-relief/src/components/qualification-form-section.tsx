import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Heart } from "lucide-react";

const formSchema = z.object({
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  gender: z.string().min(1, "Please select an option"),
  ageRange: z.string().min(1, "Please select an age range"),
  seenDoctor: z.string().min(1, "Please select an option"),
  painStairs: z.number().array().length(1),
  painSitting: z.number().array().length(1),
  painSwelling: z.number().array().length(1),
  painGrinding: z.number().array().length(1),
  painNight: z.number().array().length(1),
  consentPrivacy: z.literal(true, { errorMap: () => ({ message: "You must agree to continue" }) }),
});

type FormValues = z.infer<typeof formSchema>;

export function QualificationFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      email: "",
      gender: "",
      ageRange: "",
      seenDoctor: "",
      painStairs: [0],
      painSitting: [0],
      painSwelling: [0],
      painGrinding: [0],
      painNight: [0],
      consentPrivacy: undefined as unknown as true,
    },
  });

  const onSubmit = (data: FormValues) => {
    // Local state only per requirements
    console.log("Form submitted:", data);
    setIsSubmitted(true);
  };

  return (
    <section id="qualification-form" className="py-24 relative">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-caveat text-5xl md:text-6xl text-secondary mb-4">Are you ready to <span className="underline decoration-secondary/50 decoration-2 underline-offset-4">play</span> again?</h2>
          <p className="text-xl text-muted-foreground font-light">
            Knee pain reduction in less than 90 minutes is available.
          </p>
        </div>

        <div className="bg-card rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-border/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative z-10"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">See if you qualify:</h3>
                  <div className="h-1 w-16 bg-primary rounded-full" />
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base text-foreground/80">Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 123-4567" type="tel" className="rounded-xl h-12 bg-background/50" {...field} />
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
                            <FormLabel className="text-base text-foreground/80">Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="you@example.com" type="email" className="rounded-xl h-12 bg-background/50" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base text-foreground/80">Gender</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="rounded-xl h-12 bg-background/50">
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
                      <FormField
                        control={form.control}
                        name="ageRange"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base text-foreground/80">Age Range</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="rounded-xl h-12 bg-background/50">
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
                    </div>

                    <FormField
                      control={form.control}
                      name="seenDoctor"
                      render={({ field }) => (
                        <FormItem className="space-y-4 bg-background/30 p-6 rounded-2xl border border-border/30">
                          <FormLabel className="text-lg text-foreground block mb-2">
                            Have you seen a doctor, physical therapist, discussed surgery, or had injections for your knee pain?
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
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

                    <div className="space-y-8 bg-background/30 p-6 rounded-2xl border border-border/30">
                      <div className="mb-6">
                        <h4 className="text-lg font-medium text-foreground mb-1">Pain Symptoms</h4>
                        <p className="text-sm text-muted-foreground">Slide to indicate severity (0 = None, 10 = Severe)</p>
                      </div>

                      {[
                        { name: "painStairs", label: "Pain going up/down stairs" },
                        { name: "painSitting", label: "Pain after sitting for long periods" },
                        { name: "painSwelling", label: "Swelling or stiffness" },
                        { name: "painGrinding", label: "Grinding or popping sensation" },
                        { name: "painNight", label: "Pain that wakes you at night" },
                      ].map((item) => (
                        <FormField
                          key={item.name}
                          control={form.control}
                          name={item.name as any}
                          render={({ field }) => (
                            <FormItem>
                              <div className="flex justify-between mb-3">
                                <FormLabel className="text-base text-foreground/90">{item.label}</FormLabel>
                                <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full min-w-8 text-center">
                                  {field.value}
                                </span>
                              </div>
                              <FormControl>
                                <Slider
                                  min={0}
                                  max={10}
                                  step={1}
                                  value={field.value}
                                  onValueChange={field.onChange}
                                  className="w-full"
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>

                    <div className="pt-6 space-y-4">
                      <FormField
                        control={form.control}
                        name="consentPrivacy"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 bg-background/30 p-4 rounded-2xl border border-border/30">
                            <FormControl>
                              <Checkbox
                                checked={field.value === true}
                                onCheckedChange={(checked) => field.onChange(checked === true ? true : undefined)}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm text-muted-foreground font-light">
                                I acknowledge that only a qualified local provider may contact me about treatment options. My information will not be shared broadly.{" "}
                                <Link href="/privacy">
                                  <span className="text-primary underline cursor-pointer hover:text-primary/80">Read our Privacy & Data Use policy</span>
                                </Link>
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                      <Button type="submit" size="lg" className="w-full text-lg rounded-full py-8 bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-[1.02] transition-transform">
                        Submit
                      </Button>
                    </div>
                  </form>
                </Form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 relative z-10"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <Heart className="w-10 h-10 fill-primary/20" />
                </div>
                <h3 className="font-caveat text-5xl text-primary mb-4">Thank you!</h3>
                <p className="text-xl text-muted-foreground font-light max-w-md mx-auto mb-8">
                  We've received your information. A caring member of our team will reach out to you shortly to discuss your options.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setIsSubmitted(false)}
                  className="rounded-full"
                >
                  Return to form
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
