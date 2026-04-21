import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const formEl = document.getElementById("qualification-form");
      const scrolledPastHero = window.scrollY > 600;
      let formInView = false;
      if (formEl) {
        const rect = formEl.getBoundingClientRect();
        formInView = rect.top < window.innerHeight && rect.bottom > 0;
      }
      setVisible(scrolledPastHero && !formInView);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const formEl = document.getElementById("qualification-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <Button
            onClick={scrollToForm}
            size="lg"
            className="rounded-full px-8 py-6 text-base md:text-lg bg-primary hover:bg-[#B30005] text-white font-semibold shadow-2xl shadow-primary/30 hover:scale-[1.03] transition-transform"
          >
            See if you qualify
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
