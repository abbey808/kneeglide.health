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
              <span className="relative inline-block w-[13ch] h-[1em] align-baseline">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute left-0 bottom-[-0.08em] font-display text-primary font-bold whitespace-nowrap leading-none"
                  >
                    {activities[index].word}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-lg">
            Isn't it time to get back to the things you love? Knee pain relief in 72 hours. No surgery.
          </p>
          <div>
            <Button 
              size="lg" 
              onClick={scrollToForm}
              data-testid="button-hero-cta"
              className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-[#B30005] text-white shadow-lg hover:shadow-xl transition-all font-semibold"
            >
              See if you qualify
            </Button>
          </div>
        </div>

        <div className="relative h-[400px] lg:h-[500px] z-10">
          <ImageGrid />
        </div>
      </div>
    </section>
  );
}
