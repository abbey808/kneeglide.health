import React from "react";
import { Link } from "wouter";
import { HeroSection } from "@/components/hero-section";
import { PainTypesSection } from "@/components/pain-types-section";
import { MechanismSection } from "@/components/mechanism-section";
import { QualificationFormSection } from "@/components/qualification-form-section";
import logo from "@assets/Screenshot_2026-04-16_at_11.33.35_AM_1776353630113.png";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full bg-[#1F2937] text-white text-center text-sm md:text-base font-medium px-4 py-2.5">
        Freedom from knee pain is available TODAY. Get in touch with our team.
      </div>
      <header className="w-full z-20 bg-background/80 backdrop-blur-sm border-b border-border/30 px-6 md:px-8 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <img src={logo} alt="KneeGlide Health" className="h-[50px] md:h-[60px] w-auto" />
          <Link href="/privacy">
            <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">Privacy</span>
          </Link>
        </div>
      </header>
      <HeroSection />
      <PainTypesSection />
      <MechanismSection />
      <QualificationFormSection />
      <footer className="py-10 border-t border-border/20">
        <div className="container mx-auto px-4 flex flex-col items-center gap-3">
          <img src={logo} alt="KneeGlide Health" className="h-8 w-auto" />
          <p className="text-muted-foreground/60 text-sm">© {new Date().getFullYear()} KneeGlide Health. All rights reserved.</p>
          <Link href="/privacy">
            <span className="text-muted-foreground/60 hover:text-primary transition-colors cursor-pointer text-sm underline">Privacy & Data Use</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
