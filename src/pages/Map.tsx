
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, MapPin, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarBackground from "@/components/StarBackground";

// Sample map locations
const sampleLocations = [
  { 
    id: 1, 
    name: "Crypto Cafe", 
    type: "Restaurant", 
    location: "New York, USA", 
    acceptedCurrencies: ["Bitcoin", "Ethereum"],
    rating: 4.8
  },
  { 
    id: 2, 
    name: "Digital Goods Store", 
    type: "Retail", 
    location: "London, UK", 
    acceptedCurrencies: ["Bitcoin", "Litecoin", "Solana"],
    rating: 4.5
  },
  { 
    id: 3, 
    name: "Blockchain Hotel", 
    type: "Accommodation", 
    location: "Tokyo, Japan", 
    acceptedCurrencies: ["Bitcoin", "Ethereum", "Cardano"],
    rating: 4.7
  },
  { 
    id: 4, 
    name: "Crypto Tech Hub", 
    type: "Services", 
    location: "Singapore", 
    acceptedCurrencies: ["Bitcoin", "Ethereum", "USDT"],
    rating: 4.6
  },
  { 
    id: 5, 
    name: "NFT Gallery", 
    type: "Arts", 
    location: "Paris, France", 
    acceptedCurrencies: ["Ethereum", "Solana"],
    rating: 4.9
  },
];

const Map = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationType, setLocationType] = useState("all");
  
  const filteredLocations = sampleLocations.filter(location => {
    const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         location.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = locationType === "all" || location.type.toLowerCase() === locationType.toLowerCase();
    
    return matchesSearch && matchesType;
  });

  return (
    <div className="bg-space min-h-screen">
      <StarBackground />
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-gold">
            Crypto Payment Locations
          </h1>
          <p className="text-gray-300">
            Explore businesses and services that accept cryptocurrency payments worldwide.
          </p>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="bg-infiworld-blue-dark/70 backdrop-blur-sm p-4 rounded-lg mb-8 border border-infiworld-gold/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                className="pl-10 bg-infiworld-space-dark border-infiworld-gold/30"
                placeholder="Search locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Select value={locationType} onValueChange={setLocationType}>
              <SelectTrigger className="bg-infiworld-space-dark border-infiworld-gold/30">
                <Filter size={18} className="mr-2 text-gray-400" />
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent className="bg-infiworld-blue-dark border-infiworld-gold/30">
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="restaurant">Restaurants</SelectItem>
                <SelectItem value="retail">Retail Stores</SelectItem>
                <SelectItem value="accommodation">Accommodations</SelectItem>
                <SelectItem value="services">Services</SelectItem>
                <SelectItem value="arts">Arts & Entertainment</SelectItem>
              </SelectContent>
            </Select>
            
            <Button className="bg-infiworld-gold text-infiworld-space-dark hover:bg-infiworld-gold-light">
              <Layers size={18} className="mr-2" /> Apply Filters
            </Button>
          </div>
        </div>
        
        {/* Map and Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <div className="h-[600px] rounded-lg border-gradient-gold overflow-hidden relative shadow-gold">
              <div className="w-full h-full bg-infiworld-blue-dark">
                {/* In a real implementation, this would be a Mapbox map */}
                <div className="w-full h-full bg-[url('/placeholder.svg')] bg-center bg-cover opacity-50 flex items-center justify-center">
                  <div className="text-center p-8 backdrop-blur-sm rounded-lg">
                    <p className="text-infiworld-gold font-semibold mb-2">Interactive Map</p>
                    <p className="text-gray-300 text-sm">
                      This would be an interactive map showing crypto payment locations worldwide.
                      In a real implementation, this would use Mapbox GL JS.
                    </p>
                  </div>
                </div>
                
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
              </div>
            </div>
          </div>
          
          {/* Locations List */}
          <div className="lg:col-span-1">
            <div className="bg-infiworld-blue-dark/70 backdrop-blur-sm rounded-lg border border-infiworld-gold/20 h-[600px] overflow-y-auto shadow-gold">
              <h3 className="p-4 border-b border-infiworld-gold/20 text-white font-semibold">
                {filteredLocations.length} Locations Found
              </h3>
              
              <div className="divide-y divide-infiworld-gold/10">
                {filteredLocations.map((location) => (
                  <div key={location.id} className="p-4 hover:bg-infiworld-blue/20 transition-colors">
                    <div className="flex justify-between">
                      <h4 className="font-semibold text-white">{location.name}</h4>
                      <div className="flex items-center">
                        <span className="text-infiworld-gold">★</span>
                        <span className="text-gray-300 text-sm ml-1">{location.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{location.type} • {location.location}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {location.acceptedCurrencies.map((currency, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-infiworld-blue-dark text-xs rounded-full border border-infiworld-gold/30 text-infiworld-gold"
                        >
                          {currency}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                
                {filteredLocations.length === 0 && (
                  <div className="p-8 text-center">
                    <p className="text-gray-400">No locations found matching your filters.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Map;
