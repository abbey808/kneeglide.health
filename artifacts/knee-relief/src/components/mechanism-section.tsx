import { motion } from "framer-motion";

const stats = [
  {
    value: "86%",
    description: "of patients saw significant pain reduction at 6 months",
    superscript: "1",
  },
  {
    value: "2 yrs+",
    description: "average duration of sustained pain relief after a single procedure",
  },
];

export function MechanismSection() {
  return (
    <section className="py-24 bg-[#1F2937] relative overflow-hidden border-t border-white/5">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-bold tracking-[0.2em] text-sm mb-6 uppercase">
              GAE vs. Knee Replacement
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-white font-bold mb-8 leading-[1.05]">
              A better path than surgery.
            </h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              Knee replacement removes and rebuilds your joint. GAE doesn't touch the structure, it cuts off the abnormal blood vessels feeding your pain, from the inside. No implants. No recovery months. Your knee, restored.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10"
          >
            {stats.map((stat) => (
              <div key={stat.value} className="flex flex-col">
                <div className="font-display text-5xl md:text-6xl font-bold text-primary leading-none whitespace-nowrap mb-4">
                  {stat.value}
                  {stat.superscript && (
                    <sup className="text-xl md:text-2xl font-bold ml-1 align-super">
                      {stat.superscript}
                    </sup>
                  )}
                </div>
                <p className="text-white/80 leading-relaxed text-base">
                  {stat.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/50 text-xs mt-16 leading-relaxed"
        >
          <sup className="mr-1">1</sup>Cusumano L, et al. Genicular Artery Embolization for Knee Osteoarthritis: 2-Year Outcomes. J Vasc Interv Radiol. 2024;35:1768-1775.
        </motion.p>
      </div>
    </section>
  );
}
