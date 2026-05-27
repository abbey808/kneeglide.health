import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const activities = [
  { word: "pickleball", image: "/images/pickleball.png" },
  { word: "running", image: "/images/running.png" },
  { word: "long walks", image: "/images/walking.png" },
  { word: "yoga", image: "/images/yoga.png" },
  { word: "fetch", image: "/images/fetch.png" },
  { word: "biking", image: "/images/biking.png" },
  { word: "dancing", image: "/images/dancing.png" },
  { word: "hiking", image: "/images/hiking.png" },
  { word: "climbing", image: "/images/climbing.png" },
];

function ImageGrid() {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set([0, 3, 5, 7]));

  const rotateActive = useCallback(() => {
    setActiveIndices((prev) => {
      const next = new Set(prev);
      const allIndices = Array.from({ length: activities.length }, (_, i) => i);
      const currentActive = Array.from(prev);
      const currentInactive = allIndices.filter((i) => !prev.has(i));

      if (currentActive.length > 0 && currentInactive.length > 0) {
        const removeIdx = currentActive[Math.floor(Math.random() * currentActive.length)];
        const addIdx = currentInactive[Math.floor(Math.random() * currentInactive.length)];
        next.delete(removeIdx);
        next.add(addIdx);
      }

      return next;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(rotateActive, 1800);
    return () => clearInterval(timer);
  }, [rotateActive]);

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2 w-full h-full">
      {activities.map((activity, i) => {
        const isActive = activeIndices.has(i);
        return (
          <motion.div
            key={activity.word}
            className="relative overflow-hidden flex items-center justify-center rounded-2xl bg-[#FFB3B5]/10"
            animate={{
              filter: isActive ? "blur(0px)" : "blur(4px)",
              opacity: isActive ? 1 : 0.3,
              scale: isActive ? 1.05 : 0.95,
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
          >
            <img
              src={`${basePath}${activity.image}`}
              alt={activity.word}
              className="w-full h-full object-contain"
            />
          </motion.div>
        );
      })}
    </div>
  );
}

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

  return (
    <section className="relative flex flex-col justify-center overflow-hidden py-16 md:py-24">
      <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="z-10 space-y-8 max-w-2xl">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
            Less knee pain, <br />
            <span className="whitespace-nowrap">
              <span className="text-primary">more </span>
              <span className="relative inline-block w-[13ch] align-baseline">
                <span className="invisible">M</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute left-0 top-0 text-primary whitespace-nowrap"
                  >
                    {activities[index].word}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            <span className="block">Isn't it time to get back to the things you love?</span>
            <span className="block whitespace-nowrap">Knee <span className="text-primary underline decoration-primary/40 decoration-2 underline-offset-4">pain relief</span> in 72 hours. No surgery.</span>
          </p>
          <div>
            <Button 
              size="lg" 
              onClick={scrollToForm}
              data-testid="button-hero-cta"
              className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-[#B30005] text-white shadow-lg hover:shadow-xl transition-all font-semibold"
            >
              Get Relief
            </Button>
          </div>
        </div>

        <div className="relative h-[400px] lg:h-[500px] z-10">
          <ImageGrid />
        </div>
      </div>

      <div className="container px-4 mx-auto mt-12 md:mt-16">
        <div className="rounded-2xl bg-emerald-50 border border-emerald-200 px-6 md:px-10 py-8 md:py-10">
          <div className="flex flex-col md:flex-row md:items-center md:gap-8 gap-4">
            <div className="flex items-center gap-3 shrink-0">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-emerald-900 leading-tight">
                Healing that costs you $0
              </h2>
            </div>
            <p className="text-base md:text-lg text-emerald-900/80 leading-relaxed md:border-l md:border-emerald-200 md:pl-8">
              Most commercial insurance plans cover GAE in full. We verify your benefits before you commit, so there are no surprises.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-emerald-200 flex items-center gap-2 text-sm text-emerald-900/80">
            <div className="flex gap-0.5 text-primary">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9.3 17 14.1 18.5 21 12 17.3 5.5 21 7 14.1 2 9.3 9 9 12 2"/></svg>
              ))}
            </div>
            <span className="font-semibold text-emerald-900">4.9 / 5</span>
            <span>· Trusted by patients nationwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
