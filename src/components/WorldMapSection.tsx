
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

// This is a placeholder component - in a real implementation, we'd use Mapbox GL JS
const WorldMapSection = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsMapLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-gold">
            Global Crypto Payment Locations
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover businesses and services that accept cryptocurrency payments around the world.
            Filter by currency type, business category, and more.
          </p>
        </div>
        
        <div 
          ref={mapRef} 
          className="h-[500px] rounded-lg border-gradient-gold relative overflow-hidden shadow-gold"
        >
          {!isMapLoaded ? (
            <div className="absolute inset-0 flex items-center justify-center bg-infiworld-space-dark">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-infiworld-gold"></div>
            </div>
          ) : (
            <div className="absolute inset-0 bg-infiworld-blue-dark">
              {/* World Map Placeholder */}
              <div className="w-full h-full relative bg-[url('/placeholder.svg')] bg-center bg-cover opacity-50">
                {/* Sample Markers */}
                <div className="absolute top-1/4 left-1/4 animate-pulse">
                  <MapPin size={24} className="text-infiworld-gold" />
                </div>
                <div className="absolute top-1/3 left-1/2 animate-pulse">
                  <MapPin size={24} className="text-infiworld-gold" />
                </div>
                <div className="absolute top-2/3 left-1/3 animate-pulse">
                  <MapPin size={24} className="text-infiworld-gold" />
                </div>
                <div className="absolute top-1/2 left-3/4 animate-pulse">
                  <MapPin size={24} className="text-infiworld-gold" />
                </div>
              </div>
            </div>
          )}
          
          {/* Map Controls - In real implementation these would filter and control the map */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 justify-center">
            <Button variant="secondary" size="sm" className="bg-infiworld-blue-dark/70 backdrop-blur-sm">
              Bitcoin
            </Button>
            <Button variant="secondary" size="sm" className="bg-infiworld-blue-dark/70 backdrop-blur-sm">
              Ethereum
            </Button>
            <Button variant="secondary" size="sm" className="bg-infiworld-blue-dark/70 backdrop-blur-sm">
              Restaurants
            </Button>
            <Button variant="secondary" size="sm" className="bg-infiworld-blue-dark/70 backdrop-blur-sm">
              Hotels
            </Button>
            <Button variant="secondary" size="sm" className="bg-infiworld-blue-dark/70 backdrop-blur-sm">
              Retail
            </Button>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Button className="bg-infiworld-gold text-infiworld-space-dark hover:bg-infiworld-gold-light">
            <MapPin className="mr-2 h-4 w-4" /> Explore Full Map
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorldMapSection;
