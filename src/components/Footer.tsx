import logoPrelaje from "@/assets/logo-prelaje.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src={logoPrelaje}
              alt="Prelaje Logo"
              className="h-10 object-contain"
            />
          </div>

          <p className="text-primary-foreground/50 text-sm text-center">
            Desde 1977, ajudando você a concretizar seus sonhos.
          </p>

          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} Prelaje Indústria e Comércio Ltda.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
