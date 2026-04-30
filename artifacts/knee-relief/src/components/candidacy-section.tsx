import { motion } from "framer-motion";
import { XCircle, Activity, ShieldX } from "lucide-react";

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-primary font-bold tracking-[0.2em] text-sm mb-6 uppercase">
            Is GAE right for you?
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground font-bold mb-8 leading-[1.05]">
            A real way to avoid knee surgery.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            GAE is designed for adults with chronic knee pain from osteoarthritis who haven't found lasting relief from injections, physical therapy, or medication, and aren't ready (or aren't candidates) for total knee replacement.
          </p>
        </motion.div>

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
