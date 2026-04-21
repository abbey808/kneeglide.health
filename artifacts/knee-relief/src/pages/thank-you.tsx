import React, { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/Screenshot_2026-04-16_at_11.33.35_AM_1776353630113.png";

export default function ThankYou() {
  useEffect(() => {
    document.title = "Thank You — KneeGlide Health";
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <header className="w-full bg-background/80 backdrop-blur-sm border-b border-border/30 px-6 md:px-8 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <img src={logo} alt="KneeGlide Health" className="h-10 md:h-12 w-auto cursor-pointer" />
          </Link>
          <Link href="/privacy">
            <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">Privacy</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-8"
          >
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </motion.div>

          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Thank you!
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
            Your information has been received. A representative from KneeGlide Health will be in touch within 24 hours.
          </p>

          <Link href="/">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 bg-primary hover:bg-[#B30005] text-white font-semibold"
            >
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </main>

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
