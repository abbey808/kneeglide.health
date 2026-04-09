import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SvgFilters, PickleballIcon, RunningIcon, WalkIcon, YogaIcon, FetchIcon, BikeIcon, DanceIcon } from "./sketch-icons";

const activities = [
  { word: "pickleball", icon: PickleballIcon },
  { word: "running", icon: RunningIcon },
  { word: "long walks", icon: WalkIcon },
  { word: "yoga", icon: YogaIcon },
  { word: "games of fetch", icon: FetchIcon },
  { word: "biking", icon: BikeIcon },
  { word: "dancing", icon: DanceIcon },
];

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % activities.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const scrollToForm = () => {
    document.getElementById("qualification-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const CurrentIcon = activities[index].icon;

  return (
    <section className="relative flex flex-col justify-center overflow-hidden py-16 md:py-24">
      <SvgFilters />
      <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10 space-y-8 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Less knee pain, <br />
            <span className="text-primary">more </span>
            <span className="relative inline-block w-full h-[1.2em] overflow-hidden align-bottom">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute left-0 font-caveat text-secondary text-6xl md:text-8xl"
                >
                  {activities[index].word}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-lg">
            A warm, supportive path back to the activities you love. Discover if minimally invasive treatment is your next step to moving freely again.
          </p>
          <div>
            <Button 
              size="lg" 
              onClick={scrollToForm}
              className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            >
              See if you qualify
            </Button>
          </div>
        </div>

        <div className="relative h-[300px] lg:h-[400px] flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-secondary/10 rounded-[100%] blur-3xl" />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotate: 10 }}
              transition={{ duration: 0.5, ease: "backOut" }}
              className="w-64 h-64 md:w-96 md:h-96 text-foreground relative"
            >
              <CurrentIcon className="w-full h-full drop-shadow-sm" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
