import React from "react";
import { HeroSection } from "@/components/hero-section";
import { PainTypesSection } from "@/components/pain-types-section";
import { QualificationFormSection } from "@/components/qualification-form-section";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <header className="w-full z-20 bg-background/80 backdrop-blur-sm border-b border-border/20 px-6 md:px-8 py-3">
        <div className="container mx-auto">
          <div className="text-left">
            <div className="font-caveat text-4xl md:text-5xl text-primary leading-none">Freedom</div>
            <div className="text-sm md:text-base text-muted-foreground font-light tracking-wide">from knee pain</div>
          </div>
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
