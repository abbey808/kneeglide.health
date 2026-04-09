import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const activities = [
  { word: "pickleball", image: "/images/pickleball.png" },
  { word: "running", image: "/images/running.png" },
  { word: "long walks", image: "/images/walking.png" },
  { word: "yoga", image: "/images/yoga.png" },
  { word: "games of fetch", image: "/images/fetch.png" },
  { word: "biking", image: "/images/biking.png" },
  { word: "dancing", image: "/images/dancing.png" },
];

function ImageGrid() {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  const [activeIndices, setActiveIndices] = useState<Set<number>>(new Set([0, 3, 5]));

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

  const gridPositions = [
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ];

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-3 w-full h-full p-2">
      {activities.map((activity, i) => {
        const isActive = activeIndices.has(i);
        return (
          <motion.div
            key={activity.word}
            className={`${gridPositions[i]} relative rounded-2xl overflow-hidden flex items-center justify-center`}
            animate={{
              filter: isActive ? "blur(0px)" : "blur(4px)",
              opacity: isActive ? 1 : 0.35,
              scale: isActive ? 1.02 : 0.95,
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
          >
            <img
              src={`${basePath}${activity.image}`}
              alt={activity.word}
              className="w-full h-full object-contain p-1"
            />
            <motion.div
              className="absolute bottom-1 left-0 right-0 text-center"
              animate={{
                opacity: isActive ? 1 : 0,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <span className="font-caveat text-sm md:text-base text-muted-foreground/70">
                {activity.word}
              </span>
            </motion.div>
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
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Less knee pain, <br />
            <span className="whitespace-nowrap">
              <span className="text-primary">more </span>
              <span className="relative inline-block w-[13ch] h-[1.4em] overflow-hidden align-bottom">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={index}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute left-0 top-[0.05em] font-caveat text-secondary text-6xl md:text-8xl whitespace-nowrap"
                  >
                    {activities[index].word}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-lg">
            Isn't it time to get back to the things you love? From knee pain to all of your favorite activities in 72 hours. No surgery.
          </p>
          <div>
            <Button 
              size="lg" 
              onClick={scrollToForm}
              data-testid="button-hero-cta"
              className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            >
              See if you qualify
            </Button>
          </div>
        </div>

        <div className="relative h-[400px] lg:h-[500px] z-10">
          <div className="absolute inset-0 bg-secondary/5 rounded-3xl" />
          <ImageGrid />
        </div>
      </div>
    </section>
  );
}
