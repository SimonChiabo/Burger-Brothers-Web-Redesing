import { useTranslation } from '../i18n/LanguageContext';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-bb-black border-t border-bb-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Brand Logo */}
        <div className="mb-8">
          <p className="font-display text-3xl md:text-4xl font-bold tracking-tighter">
            BURGER<span className="text-bb-accent">BROTHERS</span>
          </p>
          <p className="text-bb-white/20 font-display text-xs tracking-[0.3em] mt-2 uppercase">
            Andorra since 2013
          </p>
        </div>

        {/* Brand Mission Description (Hidden in small, but good for SEO) */}
        <p className="max-w-lg mx-auto text-bb-white/40 text-sm font-light leading-relaxed mb-10">
          {t('footer.desc')}
        </p>

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
          <p className="text-bb-white/30 text-[10px] md:text-xs mb-4 uppercase tracking-wider">
            {t('footer.copyright').replace('2024', currentYear)}
          </p>
          <div className="flex justify-center gap-6 text-[10px] text-bb-white/20 uppercase tracking-widest">
            <a href="#" className="hover:text-bb-white transition-colors">{t('footer.links.terms')}</a>
            <a href="#" className="hover:text-bb-white transition-colors">{t('footer.links.privacy')}</a>
            <a href="#" className="hover:text-bb-white transition-colors">{t('footer.links.cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
