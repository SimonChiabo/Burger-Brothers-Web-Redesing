import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Nosotros', href: '#about' },
    { name: 'Ubicaciones', href: '#locations' },
    { name: 'Nuestra Carta', href: '#menu' },
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
                  key={link.name}
                  href={link.href}
                  className="text-bb-white/80 hover:text-bb-accent px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Language & CTA */}
            <div className="flex items-center gap-6 border-l border-bb-charcoal pl-6">
              <div className="relative group">
                <button className="flex items-center gap-1 text-bb-white/80 text-sm hover:text-bb-accent transition-colors">
                  ESP <ChevronDown size={14} />
                </button>
                <div className="absolute right-0 mt-2 w-24 bg-bb-charcoal rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 text-sm border border-bb-white/10">
                  <a href="#" className="block py-1.5 px-2 hover:bg-bb-black rounded hover:text-bb-accent">CAT</a>
                  <a href="#" className="block py-1.5 px-2 hover:bg-bb-black rounded hover:text-bb-accent">ENG</a>
                </div>
              </div>
              <a href="#locations" className="btn-primary">
                ENCUÉNTRANOS
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
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-bb-white/80 hover:text-bb-accent px-3 py-4 text-lg font-medium border-b border-bb-charcoal/50"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 flex flex-col gap-4">
            <div className="flex justify-between items-center px-3 text-bb-white/60 text-sm uppercase tracking-widest">
              <span>Idioma</span>
              <div className="flex gap-4">
                <span className="text-bb-accent">ESP</span>
                <span className="hover:text-bb-accent cursor-pointer">CAT</span>
                <span className="hover:text-bb-accent cursor-pointer">ENG</span>
              </div>
            </div>
            <a
              href="#locations"
              onClick={() => setIsOpen(false)}
              className="btn-primary text-center py-4 text-base"
            >
              ENCUÉNTRANOS
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
