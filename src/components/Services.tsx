import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Home, Tractor } from "lucide-react";
import servicePavimentacao from "@/assets/service-pavimentacao.jpg";
import serviceResidencial from "@/assets/service-residencial.jpg";
import serviceRural from "@/assets/service-rural.jpg";

const services = [
  {
    icon: Building2,
    title: "Pavimentação de Cidades",
    description:
      "Blocos intertravados, grelhas, meio-fio e pisos para infraestrutura urbana com resistência e durabilidade.",
    image: servicePavimentacao,
  },
  {
    icon: Home,
    title: "Residencial",
    description:
      "Lajes pré-moldadas, sifões, caixas de gordura e tubos para construções residenciais seguras e eficientes.",
    image: serviceResidencial,
  },
  {
    icon: Tractor,
    title: "Fazendas e Área Rural",
    description:
      "Drenos, manilhas e estruturas de concreto para irrigação, drenagem e infraestrutura no campo.",
    image: serviceRural,
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors duration-500" />
        <div className="absolute top-4 left-4 bg-accent text-accent-foreground p-3 rounded-lg shadow-accent">
          <service.icon size={24} />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-card-foreground mb-2">
          {service.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            O que fazemos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Produtos para atender aos mais diversos segmentos da construção
            civil com a qualidade que só décadas de experiência proporcionam.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
