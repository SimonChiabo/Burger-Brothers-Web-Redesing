import { locations } from '../data/locations';
import { useTranslation } from '../i18n/LanguageContext';

const IdentitySection = () => {
  const { t } = useTranslation();
  const activeLocationsCount = locations.filter(loc => loc.status !== 'coming_soon').length;

  return (
    <section id="about" className="py-32 bg-bb-charcoal relative overflow-hidden">
      {/* Background Texture Placeholder */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image / Visual Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-bb-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop" 
                alt="Burger Brothers Craftsmanship" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-bb-accent/10 rounded-2xl -z-10 blur-2xl"></div>
            <div className="absolute top-1/2 -left-10 -translate-y-1/2 hidden xl:block">
              <span className="font-display text-9xl text-bb-white/[0.03] rotate-90 inline-block tracking-tighter">
                EST. 2013
              </span>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <div className="mb-8">
              <span className="text-bb-accent font-bold uppercase tracking-widest text-sm mb-4 block">{t('about.badge')}</span>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8 uppercase">
                {t('about.title')} <br /> 
                <span className="text-bb-accent">{t('about.titleAccent')}</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-bb-white/70 text-lg md:text-xl font-light leading-relaxed">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-bb-white/10 pt-12">
              <div>
                <p className="text-3xl font-bold text-bb-accent mb-1 uppercase">+10 {t('about.stat_years').split(' ')[0]}</p>
                <p className="text-bb-white/40 text-sm uppercase tracking-wider">{t('about.stat_years')}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-bb-accent mb-1 uppercase">{activeLocationsCount} {t('nav.locations')}</p>
                <p className="text-bb-white/40 text-sm uppercase tracking-wider">{t('about.stat_locs')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentitySection;
