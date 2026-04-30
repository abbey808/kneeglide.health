import { motion } from "framer-motion";

const stats = [
  {
    value: "86%",
    description: "≥50% pain reduction at 6 months in a foundational study",
    superscript: "1",
  },
  {
    value: "~45 min",
    description: "Average procedure time, performed outpatient under local anesthesia",
  },
  {
    value: "2 yrs+",
    description: "Patients continue to see pain-free relief for years",
  },
  {
    value: "2021",
    description: "FDA Breakthrough Device makes GAE easy and effective",
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
              The Mechanism
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-white font-bold mb-8 leading-[1.05]">
              Treat the cause,<br />not the symptom.
            </h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              In an osteoarthritic knee, the joint lining grows abnormal blood vessels that drive chronic inflammation and pain. GAE delivers microscopic embolic beads through a catheter to selectively close these vessels, starving the inflammation and quieting the pain, while leaving the rest of the knee untouched.
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
      </div>
    </section>
  );
}
