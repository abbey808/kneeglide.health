import { motion } from "framer-motion";
import { ClipboardCheck, Clock, Activity } from "lucide-react";

const steps = [
  {
    step: "Step 01",
    label: "Candidacy",
    icon: ClipboardCheck,
    title: "A 5-minute online check.",
    description:
      "Tell us about your knee history, prior treatments, and imaging. Our interventional radiology team reviews your case and confirms whether you're a strong candidate for GAE, usually within 48 hours.",
  },
  {
    step: "Step 02",
    label: "The procedure",
    icon: Clock,
    title: "A 45-minute outpatient visit.",
    description:
      "Through a pinhole-sized catheter at the wrist or groin, your physician guides microscopic beads to the abnormal blood vessels feeding inflammation in your knee. Local anesthesia and light sedation only. No incision, no general anesthesia.",
  },
  {
    step: "Step 03",
    label: "Recovery",
    icon: Activity,
    title: "Walking the same day.",
    description:
      "Most candidates resume light activity within 24 to 48 hours and full activity in about a week. Pain relief typically begins within 2 to 4 weeks and continues to improve over the following months.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container px-4 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-primary font-bold tracking-[0.2em] text-sm mb-6 uppercase">
            How it works
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground font-bold leading-[1.05]">
            From check-in to walking out, in three steps.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col relative"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={2} />
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="block w-6 h-px bg-primary" />
                  <span className="text-primary font-bold text-sm">
                    {s.step} <span className="opacity-70">·</span> {s.label}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
