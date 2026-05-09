const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-bb-black border-t border-bb-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Brand Logo */}
        <div className="mb-8">
          <p className="font-display text-3xl md:text-4xl font-bold tracking-tighter">
            BURGER<span className="text-bb-accent">BROTHERS</span>
          </p>
          <p className="text-bb-wood-light font-display text-xs tracking-[0.3em] mt-2 uppercase">
            Andorra since 2013
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-10">
          {['Instagram', 'Facebook', 'TripAdvisor'].map((social) => (
            <a
              key={social}
              href="#"
              className="text-bb-white/50 hover:text-bb-accent transition-colors text-sm font-medium uppercase tracking-widest"
            >
              {social}
            </a>
          ))}
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 border-t border-bb-charcoal/50">
          <p className="text-bb-white/30 text-xs mb-4">
            © {currentYear} Burger Brothers Andorra. Todos los derechos reservados.
          </p>
          <div className="flex justify-center gap-6 text-[10px] text-bb-white/20 uppercase tracking-widest">
            <a href="#" className="hover:text-bb-white transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-bb-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-bb-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
