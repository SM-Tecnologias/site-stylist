import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Truck, Clock, Award } from "lucide-react";

const highlights = [
  { icon: Clock, label: "Desde 1977", description: "Quase 50 anos de mercado" },
  { icon: Truck, label: "Frota Própria", description: "Entrega rápida na região" },
  { icon: ShieldCheck, label: "Qualidade", description: "Materiais certificados" },
  { icon: Award, label: "Tradição", description: "Referência no Sul Fluminense" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Sobre nós
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 leading-tight">
              Desde 1977 construindo{" "}
              <span className="text-gradient-accent">confiança</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Contamos com frota de veículos próprios para entregar com rapidez
              em toda a região do Sul Fluminense.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nosso pátio conta com materiais prontos e preparados com qualidade
              para assegurar uma obra com estrutura que transmita a segurança e
              tranquilidade que sua Empresa e sua Família merecem!
            </p>

            <a
              href="#contato"
              className="inline-block bg-accent text-accent-foreground font-bold text-base px-8 py-4 rounded-lg hover:brightness-110 transition-all duration-200 shadow-accent"
            >
              Entre em Contato
            </a>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-card text-center group hover:shadow-card-hover transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center bg-accent/10 text-accent p-3 rounded-lg mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <item.icon size={28} />
                </div>
                <h4 className="font-bold text-foreground text-lg mb-1">
                  {item.label}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
