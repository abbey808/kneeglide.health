import { motion } from "framer-motion";
import { XCircle, Activity, ShieldX, BookOpen } from "lucide-react";

const cards = [
  {
    icon: XCircle,
    title: "Have you run out of treatment options?",
    description:
      "Cortisone shots, gel injections, NSAIDs, PT, and the pain still wins. GAE targets what those don't: the inflammation itself.",
  },
  {
    icon: Activity,
    title: "You want to stay active, not slow down.",
    description:
      "If running, hiking, or weekend miles are non-negotiable, GAE preserves your knee's structure and biomechanics. No implant, no rebuild.",
  },
  {
    icon: ShieldX,
    title: "You're not ready for knee replacement surgery.",
    description:
      "Whether you're too young, ineligible due to BMI or comorbidities, or simply unwilling, GAE offers a real alternative that delays or avoids TKR.",
  },
];

export function CandidacySection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 mb-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <p className="text-primary font-bold tracking-[0.2em] text-sm mb-6 uppercase">
              Is GAE right for you?
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-foreground font-bold mb-8 leading-[1.05]">
              A real way to <span className="underline decoration-primary decoration-4 underline-offset-4">avoid</span> knee surgery.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              GAE is designed for adults with chronic knee pain from osteoarthritis who haven't found lasting relief from injections, physical therapy, or medication, and aren't ready (or aren't candidates) for total knee replacement.
            </p>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-6 lg:sticky lg:top-8"
            aria-label="Glossary"
          >
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-4 h-4 text-primary" strokeWidth={2.5} />
              <span className="text-primary font-bold tracking-[0.15em] text-xs uppercase">
                What is GAE?
              </span>
            </div>
            <p className="font-display text-xl font-bold text-foreground leading-tight mb-1">
              GAE
            </p>
            <p className="text-xs text-muted-foreground italic mb-3">
              /jee-ay-ee/ · noun
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              <span className="font-semibold text-foreground">Genicular Artery Embolization.</span>{" "}
              A minimally invasive outpatient procedure that calms knee pain by gently closing off the abnormal blood vessels feeding inflammation, without surgery, incisions, or implants.
            </p>
            <div className="pt-3 border-t border-primary/15 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground/70">Also called:</span> knee artery embolization
            </div>
          </motion.aside>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white border border-border/40 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4 leading-tight">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
