import { useTranslation } from '../i18n/LanguageContext';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with High-Contrast Overlay for WCAG AAA */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"
        aria-hidden="true"
      >
        {/* Triple overlay for maximum legibility */}
        <div className="absolute inset-0 bg-bb-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bb-black via-transparent to-bb-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-block px-4 py-1.5 mb-6 border border-bb-accent/30 bg-bb-accent/5 rounded-full backdrop-blur-sm">
          <span className="text-bb-accent font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
            {t('hero.badge')}
          </span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold leading-[0.9] mb-8 tracking-tighter uppercase">
          {t('hero.title')} <br /> 
          <span className="text-bb-accent drop-shadow-[0_0_15px_rgba(244,180,26,0.3)]">{t('hero.titleAccent')}</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-2xl text-bb-white/80 mb-12 font-light leading-relaxed">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="#menu" 
            className="btn-primary py-4 px-12 text-lg shadow-[0_0_20px_rgba(244,180,26,0.2)] hover:shadow-[0_0_30px_rgba(244,180,26,0.4)] uppercase"
          >
            {t('hero.cta_menu')}
          </a>
          <a 
            href="#locations" 
            className="group relative overflow-hidden px-12 py-4 rounded-full text-lg font-bold border border-bb-white/20 transition-all duration-300 uppercase"
          >
            <span className="relative z-10 text-bb-white group-hover:text-bb-black transition-colors duration-300">
              {t('hero.cta_locations')}
            </span>
            <div className="absolute inset-0 bg-bb-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest text-bb-white/50">Scroll</span>
        <div className="w-px h-8 bg-bb-accent/50"></div>
      </div>
    </section>
  );
};

export default HeroSection;
