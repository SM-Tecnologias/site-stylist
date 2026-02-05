import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Prelaje - Construção e pré-moldados"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-overlay)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-block bg-accent/20 border border-accent/30 text-accent font-semibold text-sm px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm"
          >
            Desde 1977 no mercado
          </motion.span>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Ajudando a{" "}
            <span className="text-gradient-accent">concretizar</span>{" "}
            seus sonhos
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mx-auto mb-10 font-body">
            Pré-moldados de concreto com qualidade, tradição e entrega rápida
            em todo o Sul Fluminense.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#servicos"
              className="bg-accent text-accent-foreground font-bold text-base px-8 py-4 rounded-lg hover:brightness-110 transition-all duration-200 shadow-accent"
            >
              Conheça Nossos Produtos
            </a>
            <a
              href="#sobre"
              className="border border-primary-foreground/30 text-primary-foreground font-medium text-base px-8 py-4 rounded-lg hover:bg-primary-foreground/10 transition-all duration-200 backdrop-blur-sm"
            >
              Quem Somos
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="text-primary-foreground/50" size={28} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
