import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, Phone, Ruler, Weight, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import productBlocoIntertravado from "@/assets/product-bloco-intertravado.jpg";
import productLajePremoldada from "@/assets/product-laje-premoldada.jpg";

const products = [
  {
    id: "bloco-intertravado",
    name: "Bloco Intertravado",
    description:
      "Ideal para pavimentação de calçadas, estacionamentos, pátios e vias urbanas. Alta resistência à compressão e durabilidade, com encaixe perfeito que dispensa o uso de argamassa.",
    image: productBlocoIntertravado,
    specs: [
      { icon: Ruler, label: "Dimensões", value: "20 x 10 x 8 cm" },
      { icon: Weight, label: "Resistência", value: "35 MPa" },
      { icon: Layers, label: "Rendimento", value: "50 peças/m²" },
    ],
    applications: [
      "Calçadas e passeios",
      "Estacionamentos",
      "Pátios industriais",
      "Vias de tráfego leve",
    ],
  },
  {
    id: "laje-premoldada",
    name: "Laje Pré-Moldada",
    description:
      "Solução econômica e prática para coberturas e entrepisos. Fabricadas com concreto de alta qualidade e armação de aço, garantindo resistência estrutural e rapidez na montagem.",
    image: productLajePremoldada,
    specs: [
      { icon: Ruler, label: "Comprimento", value: "Sob medida" },
      { icon: Weight, label: "Carga", value: "300 kgf/m²" },
      { icon: Layers, label: "Tipo", value: "Treliçada" },
    ],
    applications: [
      "Residências",
      "Comércios",
      "Galpões",
      "Edifícios de até 4 pavimentos",
    ],
  },
];

const ProductCard = ({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
        isReversed ? "lg:direction-rtl" : ""
      }`}
    >
      {/* Image */}
      <div className={`${isReversed ? "lg:order-2" : ""}`}>
        <div className="relative group rounded-2xl overflow-hidden shadow-card">
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
        </div>
      </div>

      {/* Info */}
      <div className={`${isReversed ? "lg:order-1" : ""}`}>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          {product.description}
        </p>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {product.specs.map((spec) => (
            <div
              key={spec.label}
              className="bg-muted/70 rounded-xl p-4 text-center"
            >
              <div className="inline-flex items-center justify-center text-accent mb-2">
                <spec.icon size={22} />
              </div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                {spec.label}
              </p>
              <p className="text-sm font-bold text-foreground mt-1">
                {spec.value}
              </p>
            </div>
          ))}
        </div>

        {/* Applications */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
            Aplicações
          </p>
          <div className="flex flex-wrap gap-2">
            {product.applications.map((app) => (
              <span
                key={app}
                className="bg-accent/10 text-accent text-sm font-medium px-3 py-1.5 rounded-full border border-accent/20"
              >
                {app}
              </span>
            ))}
          </div>
        </div>

        <a
          href="tel:+552424420727"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-sm px-6 py-3 rounded-lg hover:brightness-110 transition-all duration-200 shadow-accent"
        >
          <Phone size={18} />
          Solicitar Orçamento
        </a>
      </div>
    </motion.div>
  );
};

const Products = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-foreground/60 hover:text-accent text-sm font-medium mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              Voltar ao Início
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Nossos <span className="text-gradient-accent">Produtos</span>
            </h1>
            <p className="text-primary-foreground/60 max-w-xl mx-auto text-lg">
              Qualidade e resistência em cada peça. Conheça nossa linha completa
              de pré-moldados de concreto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-24">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Não encontrou o que precisa?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
            Temos uma linha completa de produtos. Entre em contato para
            conhecer todas as nossas soluções.
          </p>
          <a
            href="tel:+552424420727"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-base px-8 py-4 rounded-lg hover:brightness-110 transition-all duration-200 shadow-accent"
          >
            <Phone size={20} />
            Ligue: (24) 2442-0727
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
