import React from "react";
import { HeroSection } from "@/components/hero-section";
import { PainTypesSection } from "@/components/pain-types-section";
import { QualificationFormSection } from "@/components/qualification-form-section";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <header className="absolute top-0 right-0 z-20 p-6 md:p-8">
        <div className="text-right">
          <div className="font-caveat text-3xl md:text-4xl text-primary leading-none">Freedom</div>
          <div className="text-sm md:text-base text-muted-foreground font-light tracking-wide">from knee pain</div>
        </div>
      </header>
      <HeroSection />
      <PainTypesSection />
      <QualificationFormSection />
      <footer className="py-8 text-center text-muted-foreground/60 text-sm font-light">
        <p>© {new Date().getFullYear()} Knee Relief Connect. Dedicated to your mobility.</p>
      </footer>
    </div>
  );
}
