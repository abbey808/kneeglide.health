import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

const painTypes = [
  {
    title: "Knee ache after activity",
    description: "A dull, lingering discomfort that sets in after you finish the things you used to do easily, like walking the dog or gardening.",
    image: "/images/knee-ache.png",
  },
  {
    title: "Shooting pain standing up",
    description: "Those sharp jolts that make you hesitate and brace yourself before getting up from a chair or getting out of the car.",
    image: "/images/shooting-pain.png",
  },
  {
    title: "Sharp pain when moving",
    description: "A stabbing sensation that stops you right in your tracks, making you constantly aware of every step you take.",
    image: "/images/sharp-pain.png",
  },
];

export function PainTypesSection() {
  return (
    <section className="py-24 bg-card/50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-caveat text-5xl md:text-6xl text-primary mb-6">Sound familiar?</h2>
          <p className="text-xl text-muted-foreground font-light leading-relaxed">
            Pain isn't just physical — it's the frustration of sitting out. Whether it's an ache or a sharp jolt, many of these issues can be addressed with a gentle, minimally invasive treatment called GAE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painTypes.map((pt, i) => (
            <motion.div
              key={pt.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <Card
                data-testid={`card-pain-type-${i}`}
                className="bg-background border-border/50 shadow-sm hover:shadow-md transition-shadow h-full rounded-3xl overflow-hidden group"
              >
                <CardHeader className="pt-8 pb-4 flex flex-col items-center">
                  <div className="w-32 h-32 mb-4 group-hover:scale-105 transition-transform duration-500 ease-out">
                    <img
                      src={`${basePath}${pt.image}`}
                      alt={pt.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <CardTitle className="text-2xl font-semibold text-center text-foreground">{pt.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground leading-relaxed">
                    {pt.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
