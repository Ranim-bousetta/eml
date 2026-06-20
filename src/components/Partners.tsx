import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const partners = ["UNESCO", "UNDP", "British Council", "Goethe-Institut", "Open Society Foundations", "Internews"];

const Partners = () => {
  const { t } = useTranslation();

  return (
    <section id="partners" className="py-16">
      <div className="container text-center">
        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading text-sm uppercase tracking-widest text-muted-foreground mb-8"
        >
          {t("partners.title")}
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {partners.map((p, idx) => (
            <motion.span
              key={p}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="font-heading text-lg md:text-xl text-foreground/40 hover:text-primary transition-colors cursor-default"
            >
              {p}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
