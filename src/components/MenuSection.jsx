import { useState } from 'react';
import { menuDB, categories, ingredientsDB } from '../data/menu';
import { Star } from 'lucide-react';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? menuDB 
    : menuDB.filter(item => item.category === activeCategory);

  /**
   * Mapea los IDs de composición a nombres reales de ingredientes
   * @param {Array} composition - Array de IDs de ingredientes
   * @returns {string} - Lista de ingredientes separada por comas
   */
  const getIngredients = (composition) => {
    if (!composition || composition.length === 0) return null;
    return composition
      .map(id => ingredientsDB[id]?.name)
      .filter(Boolean) // Elimina nulos si algún ID no existe
      .join(", ");
  };

  return (
    <section id="menu" className="py-32 bg-bb-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-bb-accent font-bold uppercase tracking-widest text-sm mb-4 block">Sabor Auténtico</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">NUESTRA <span className="text-bb-accent">CARTA</span></h2>
          <p className="text-bb-white/50 text-lg font-light max-w-2xl mx-auto">
            Selecciona una categoría y descubre por qué somos el referente de la hamburguesa artesanal en Andorra.
          </p>
        </div>

        {/* Categories Filter - Horizontal Scrollable */}
        <div className="flex overflow-x-auto pb-8 mb-12 no-scrollbar gap-4 justify-start md:justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`whitespace-nowrap px-8 py-3 rounded-full text-sm font-bold border transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-bb-accent border-bb-accent text-bb-black shadow-[0_0_20px_rgba(244,180,26,0.3)]'
                  : 'bg-bb-charcoal/50 border-bb-white/10 text-bb-white hover:border-bb-accent/50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group bg-bb-charcoal/30 border border-bb-white/5 rounded-2xl p-6 flex flex-col sm:flex-row items-start justify-between hover:bg-bb-charcoal/50 transition-all duration-300"
            >
              <div className="flex-1 pr-4">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-bb-white group-hover:text-bb-accent transition-colors">
                    {item.name}
                  </h3>
                  {item.isPopular && (
                    <span className="flex items-center gap-1 bg-bb-accent/10 text-bb-accent text-[9px] font-black uppercase px-2 py-0.5 rounded border border-bb-accent/20">
                      <Star size={8} fill="currentColor" /> Popular
                    </span>
                  )}
                </div>
                {/* Composición de Ingredientes */}
                <p className="text-bb-white/40 text-xs md:text-sm font-light leading-relaxed">
                  {getIngredients(item.composition)}
                </p>
              </div>
              <div className="text-right flex flex-col justify-center items-end mt-4 sm:mt-0 min-w-[90px]">
                <span className="text-2xl font-display font-bold text-bb-white group-hover:text-bb-accent transition-colors">
                  {item.basePrice.toFixed(2)}€
                </span>
                <div className="w-8 h-0.5 bg-bb-accent/30 mt-1 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-bb-white/30 text-lg italic">Próximamente más productos en esta categoría...</p>
          </div>
        )}
      </div>

      {/* Decorative Branding */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none opacity-[0.01]">
        <span className="text-[15rem] font-display font-black leading-none rotate-90 inline-block">CRAFT</span>
      </div>
    </section>
  );
};

export default MenuSection;
