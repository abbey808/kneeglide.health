import React from "react";
import { HeroSection } from "@/components/hero-section";
import { PainTypesSection } from "@/components/pain-types-section";
import { QualificationFormSection } from "@/components/qualification-form-section";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <PainTypesSection />
      <QualificationFormSection />
      <footer className="py-8 text-center text-muted-foreground/60 text-sm font-light">
        <p>© {new Date().getFullYear()} Knee Relief Connect. Dedicated to your mobility.</p>
      </footer>
    </div>
  );
}
