import { useState, useEffect } from 'react';
import { locations } from '../data/locations';
import { MapPin, ExternalLink, Clock, Construction } from 'lucide-react';

const LocationsSection = () => {
  const [now, setNow] = useState(null);

  useEffect(() => {
    // Evitamos problemas de hidratación calculando el tiempo solo en el cliente
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const checkIsOpen = (schedule) => {
    if (!now) return false;

    try {
      const andorraTime = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Andorra',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(now);

      const [currentH, currentM] = andorraTime.split(':').map(Number);
      const nowInMinutes = currentH * 60 + currentM;

      return schedule.some(block => {
        const [openH, openM] = block.open.split(':').map(Number);
        const [closeH, closeM] = block.close.split(':').map(Number);
        const openInMinutes = openH * 60 + openM;
        const closeInMinutes = closeH * 60 + closeM;
        
        // Manejo de cierre después de medianoche (si fuera necesario, aunque aquí no lo es por ahora)
        if (closeInMinutes < openInMinutes) {
          return nowInMinutes >= openInMinutes || nowInMinutes < closeInMinutes;
        }
        
        return nowInMinutes >= openInMinutes && nowInMinutes < closeInMinutes;
      });
    } catch (e) {
      console.error("Error calculating Andorra time:", e);
      return false;
    }
  };

  return (
    <section id="locations" className="py-32 bg-bb-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-bb-accent font-bold uppercase tracking-widest text-sm mb-4 block">Presencia Local</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">ENCUENTRA TU <span className="text-bb-accent">BB</span></h2>
          <p className="text-bb-white/50 text-xl font-light max-w-2xl mx-auto">
            Estamos estratégicamente situados para que nunca estés lejos del sabor auténtico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((loc) => {
            const isBaseOpen = loc.status === 'open';
            const isSeasonal = loc.status === 'seasonal_closed';
            const isComingSoon = loc.status === 'coming_soon';
            
            // Lógica de motor de horarios (solo si el local está 'open')
            const isOpenNow = isBaseOpen && checkIsOpen(loc.schedule);
            const isClosedNow = isBaseOpen && !isOpenNow;

            return (
              <div 
                key={loc.id}
                className={`group relative rounded-3xl p-8 border transition-all duration-500 overflow-hidden ${
                  isOpenNow 
                    ? 'bg-bb-charcoal border-bb-white/10 hover:border-bb-accent/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
                    : 'bg-bb-charcoal/40 border-bb-white/5 grayscale'
                }`}
              >
                {/* Status Badges & Overlays */}
                {isSeasonal && (
                  <div className="absolute inset-0 bg-bb-black/40 backdrop-blur-[2px] z-10 flex items-center justify-center">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg transform -rotate-3">
                      Cerrado por fin de temporada
                    </span>
                  </div>
                )}

                {isComingSoon && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-bb-accent text-bb-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 animate-pulse">
                      <Construction size={12} /> Próximamente
                    </span>
                  </div>
                )}

                {/* Card Content */}
                <div className="relative z-0">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-2xl ${isOpenNow ? 'bg-bb-accent/10 text-bb-accent' : 'bg-bb-white/5 text-bb-white/20'}`}>
                      <MapPin size={24} />
                    </div>
                    
                    {now && isBaseOpen && (
                      <div className="text-right">
                        {isOpenNow ? (
                          <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest flex items-center gap-1.5 justify-end">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
                            Abierto ahora
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold text-bb-white/30 uppercase tracking-widest flex items-center gap-1.5 justify-end">
                            <span className="w-1.5 h-1.5 bg-bb-white/20 rounded-full"></span>
                            Cerrado ahora
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <h3 className={`text-2xl font-bold mb-2 ${!isOpenNow && 'text-bb-white/40'}`}>
                    {loc.name}
                  </h3>
                  <p className="text-bb-white/40 text-sm mb-8 leading-relaxed">
                    {loc.address}<br />
                    {loc.postalCode}, {loc.parish}
                  </p>

                  {/* Action Button */}
                  {isBaseOpen ? (
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.mapsQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl border font-bold transition-all duration-300 group/btn ${
                        isOpenNow 
                          ? 'bg-bb-white/5 border-bb-white/10 text-bb-white hover:bg-bb-accent hover:text-bb-black hover:border-bb-accent' 
                          : 'bg-bb-white/5 border-bb-white/5 text-bb-white/40 hover:border-bb-white/20'
                      }`}
                    >
                      CÓMO LLEGAR
                      <ExternalLink size={16} className="opacity-50 group-hover/btn:opacity-100" />
                    </a>
                  ) : (
                    <button 
                      disabled
                      className="w-full py-4 rounded-xl bg-bb-white/5 border border-bb-white/5 text-bb-white/20 font-bold cursor-not-allowed"
                    >
                      LOCAL NO DISPONIBLE
                    </button>
                  )}
                </div>

                {/* Industrial Background Detail */}
                <div className="absolute -bottom-10 -right-10 font-display text-8xl text-bb-white/[0.02] -z-10 group-hover:text-bb-accent/[0.03] transition-colors duration-500">
                  {loc.id.slice(0, 3).toUpperCase()}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
