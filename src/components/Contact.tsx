import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(24) 2442-0727",
    extra: "(24) 99944-4412",
    href: "tel:+552424420727",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "eduardoprelaje@gmail.com",
    href: "mailto:eduardoprelaje@gmail.com",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Av. Ver. Chequer Elías, 2813",
    extra: "Vila Helena, Barra do Piraí - RJ",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contato" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 mb-4">
            Fale Conosco
          </h2>
          <p className="text-primary-foreground/60 max-w-xl mx-auto text-lg">
            Trabalhando sempre por você. Entre em contato para orçamentos e
            informações sobre nossos produtos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-8 text-center backdrop-blur-sm hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center bg-accent text-accent-foreground p-4 rounded-xl mb-5 shadow-accent">
                <item.icon size={28} />
              </div>
              <h4 className="text-primary-foreground font-bold text-lg mb-2">
                {item.label}
              </h4>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-primary-foreground/70 text-sm">
                  {item.value}
                </p>
              )}
              {item.extra && (
                <p className="text-primary-foreground/50 text-sm mt-1">
                  {item.extra}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
