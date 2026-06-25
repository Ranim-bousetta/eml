import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const partners = [
  { name: "UNESCO", type: "Culture & Education" },
  { name: "UNDP", type: "Development" },
  { name: "British Council", type: "Cultural Relations" },
  { name: "Goethe-Institut", type: "Language & Culture" },
  { name: "Open Society Foundations", type: "Human Rights" },
  { name: "Internews", type: "Media Development" },
];

const Partners = () => {
  const { t } = useTranslation();

  // Duplicate items to ensure a seamless infinite scrolling loop
  const marqueeItems = [...partners, ...partners, ...partners, ...partners];

  return (
    <section id="partners" className="py-20 bg-gradient-to-b from-transparent to-primary/5 overflow-hidden">
      <div className="container text-center mb-10">
        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-sm uppercase tracking-widest text-primary font-semibold mb-4"
        >
          {t("partners.title")}
        </motion.p>
        <div className="w-16 h-1 bg-secondary mx-auto rounded-full" />
      </div>

      <div className="relative w-full flex items-center justify-start overflow-hidden py-4 mask-horizontal">
        {/* Infinite Marquee Container */}
        <div className="animate-marquee-horizontal flex gap-8">
          {marqueeItems.map((p, idx) => (
            <div
              key={`${p.name}-${idx}`}
              className="flex flex-col items-center justify-center min-w-[200px] bg-cream border border-border/80 rounded-2xl px-6 py-5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 transform cursor-default select-none group"
            >
              <span className="font-heading text-xl font-extrabold text-foreground/70 group-hover:text-primary transition-colors tracking-tight">
                {p.name}
              </span>
              <span className="font-body text-[10px] text-muted-foreground uppercase tracking-widest mt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                {p.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
