import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useTranslation();

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.locations'), href: '#locations' },
    { name: t('nav.menu'), href: '#menu' },
  ];

  const languages = [
    { code: 'es', label: 'ES' },
    { code: 'ca', label: 'CA' },
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-bb-accent font-display text-2xl md:text-3xl font-bold tracking-tighter cursor-pointer">
              BURGER<span className="text-bb-white">BROTHERS</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-bb-white/80 hover:text-bb-accent px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Language & CTA */}
            <div className="flex items-center gap-6 border-l border-bb-charcoal pl-6">
              {/* Minimalist Language Selector */}
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-bb-white/30">
                {languages.map((lang, idx) => (
                  <React.Fragment key={lang.code}>
                    <button
                      onClick={() => setLanguage(lang.code)}
                      className={`hover:text-bb-accent transition-all duration-300 ${
                        language === lang.code ? 'text-bb-accent' : 'text-bb-white/40'
                      }`}
                    >
                      {lang.label}
                    </button>
                    {idx < languages.length - 1 && <span className="pointer-events-none">|</span>}
                  </React.Fragment>
                ))}
              </div>

              <a href="#locations" className="btn-primary uppercase">
                {t('nav.order')}
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-bb-white hover:text-bb-accent transition-colors p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-bb-black border-b border-bb-charcoal transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible h-auto pb-8' : 'opacity-0 invisible h-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-bb-white/80 hover:text-bb-accent px-3 py-4 text-lg font-medium border-b border-bb-charcoal/50"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 flex flex-col gap-6">
            <div className="flex flex-col gap-3 px-3">
              <span className="text-bb-white/20 text-[10px] font-bold uppercase tracking-[0.2em]">Idioma</span>
              <div className="flex gap-4 text-sm font-bold tracking-widest">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={`${language === lang.code ? 'text-bb-accent' : 'text-bb-white/40'}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
            <a
              href="#locations"
              onClick={() => setIsOpen(false)}
              className="btn-primary text-center py-4 text-base uppercase"
            >
              {t('nav.order')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
