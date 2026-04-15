import React from "react";
import { Link } from "wouter";
import { HeroSection } from "@/components/hero-section";
import { PainTypesSection } from "@/components/pain-types-section";
import { QualificationFormSection } from "@/components/qualification-form-section";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <header className="w-full z-20 bg-background/80 backdrop-blur-sm border-b border-border/30 px-6 md:px-8 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm font-display">K</span>
            </div>
            <div className="text-left">
              <div className="font-display text-2xl md:text-3xl text-foreground font-bold leading-none tracking-tight">
                <span className="text-primary">Knee</span>Glide
              </div>
              <div className="text-[10px] md:text-xs text-muted-foreground font-medium tracking-[0.2em] uppercase">Health</div>
            </div>
          </div>
          <Link href="/privacy">
            <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">Privacy</span>
          </Link>
        </div>
      </header>
      <HeroSection />
      <PainTypesSection />
      <QualificationFormSection />
      <footer className="py-10 border-t border-border/20">
        <div className="container mx-auto px-4 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xs font-display">K</span>
            </div>
            <span className="font-display text-lg font-bold text-foreground tracking-tight">
              <span className="text-primary">Knee</span>Glide Health
            </span>
          </div>
          <p className="text-muted-foreground/60 text-sm">© {new Date().getFullYear()} KneeGlide Health. All rights reserved.</p>
          <Link href="/privacy">
            <span className="text-muted-foreground/60 hover:text-primary transition-colors cursor-pointer text-sm underline">Privacy & Data Use</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
