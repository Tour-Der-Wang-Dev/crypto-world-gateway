
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarBackground from "@/components/StarBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const sampleDestinations = [
  {
    id: 1,
    name: "Crypto Island Resort",
    location: "Maldives",
    image: "/placeholder.svg",
    price: 0.08,
    currency: "BTC",
    rating: 4.9,
    cryptoAccepted: ["BTC", "ETH", "SOL"]
  },
  {
    id: 2,
    name: "Blockchain City Hotel",
    location: "Singapore",
    image: "/placeholder.svg",
    price: 0.05,
    currency: "BTC",
    rating: 4.7,
    cryptoAccepted: ["BTC", "ETH", "USDC"]
  },
  {
    id: 3,
    name: "Digital Nomad Villa",
    location: "Bali, Indonesia",
    image: "/placeholder.svg",
    price: 0.03,
    currency: "BTC",
    rating: 4.8,
    cryptoAccepted: ["BTC", "ETH", "ADA"]
  },
  {
    id: 4,
    name: "Web3 Retreat Center",
    location: "Costa Rica",
    image: "/placeholder.svg",
    price: 0.06,
    currency: "BTC",
    rating: 4.6,
    cryptoAccepted: ["BTC", "ETH", "DOT"]
  },
];

const Travel = () => {
  const [date, setDate] = useState<Date>();
  
  return (
    <div className="bg-space min-h-screen">
      <StarBackground />
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-gold">
            Travel Reservations
          </h1>
          <p className="text-gray-300">
            Book flights, hotels, and experiences using cryptocurrency. Travel the world with blockchain.
          </p>
        </div>
        
        {/* Travel Search Tabs */}
        <Tabs defaultValue="hotels" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 bg-infiworld-blue-dark/70 backdrop-blur-sm border border-infiworld-gold/20 rounded-lg mb-4">
            <TabsTrigger value="hotels" className="data-[state=active]:bg-infiworld-gold data-[state=active]:text-infiworld-space-dark">
              Hotels
            </TabsTrigger>
            <TabsTrigger value="flights" className="data-[state=active]:bg-infiworld-gold data-[state=active]:text-infiworld-space-dark">
              Flights
            </TabsTrigger>
            <TabsTrigger value="experiences" className="data-[state=active]:bg-infiworld-gold data-[state=active]:text-infiworld-space-dark">
              Experiences
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="hotels">
            <Card className="bg-infiworld-blue-dark/70 backdrop-blur-sm border-infiworld-gold/20">
              <CardHeader>
                <CardTitle className="text-white">Find Crypto-Friendly Hotels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="text-sm text-gray-300 mb-1 block">Destination</label>
                    <Input 
                      placeholder="City or hotel name"
                      className="bg-infiworld-space-dark border-infiworld-gold/30"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm text-gray-300 mb-1 block">Check-in</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal border-infiworld-gold/30 bg-infiworld-space-dark text-white",
                            !date && "text-gray-400"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-infiworld-blue-dark border-infiworld-gold/30">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <label className="text-sm text-gray-300 mb-1 block">Guests</label>
                    <Select>
                      <SelectTrigger className="bg-infiworld-space-dark border-infiworld-gold/30 text-white">
                        <SelectValue placeholder="Number of guests" />
                      </SelectTrigger>
                      <SelectContent className="bg-infiworld-blue-dark border-infiworld-gold/30">
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4+ Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm text-gray-300 mb-1 block">Crypto Payment</label>
                    <Select>
                      <SelectTrigger className="bg-infiworld-space-dark border-infiworld-gold/30 text-white">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent className="bg-infiworld-blue-dark border-infiworld-gold/30">
                        <SelectItem value="btc">Bitcoin (BTC)</SelectItem>
                        <SelectItem value="eth">Ethereum (ETH)</SelectItem>
                        <SelectItem value="sol">Solana (SOL)</SelectItem>
                        <SelectItem value="any">Any Crypto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-infiworld-gold text-infiworld-space-dark hover:bg-infiworld-gold-light">
                  Search Hotels
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="flights">
            <Card className="bg-infiworld-blue-dark/70 backdrop-blur-sm border-infiworld-gold/20">
              <CardHeader>
                <CardTitle className="text-white">Book Flights with Crypto</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center text-gray-300 py-4">
                  Flight booking with cryptocurrency coming soon!
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="experiences">
            <Card className="bg-infiworld-blue-dark/70 backdrop-blur-sm border-infiworld-gold/20">
              <CardHeader>
                <CardTitle className="text-white">Discover Crypto Experiences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center text-gray-300 py-4">
                  Crypto-friendly experiences and activities coming soon!
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Featured Destinations */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Featured Crypto-Friendly Destinations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleDestinations.map((destination) => (
              <Card key={destination.id} className="bg-infiworld-blue-dark/70 backdrop-blur-sm border-infiworld-gold/20 overflow-hidden transition-all duration-300 hover:shadow-gold hover:-translate-y-1">
                <div className="aspect-video bg-infiworld-blue-dark relative">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute top-2 right-2 flex space-x-1">
                    {destination.cryptoAccepted.map((crypto, idx) => (
                      <div 
                        key={idx} 
                        className="bg-infiworld-space-dark/80 backdrop-blur-sm px-2 py-0.5 rounded text-infiworld-gold text-xs border border-infiworld-gold/30"
                      >
                        {crypto}
                      </div>
                    ))}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <CardTitle className="text-lg text-white">{destination.name}</CardTitle>
                    <div className="flex items-center">
                      <span className="text-infiworld-gold">★</span>
                      <span className="text-gray-300 text-sm ml-1">{destination.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">{destination.location}</p>
                </CardHeader>
                <CardContent>
                  <div className="text-xl font-bold text-infiworld-gold">
                    {destination.price} {destination.currency} <span className="text-gray-400 text-sm">/night</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-infiworld-gold text-infiworld-space-dark hover:bg-infiworld-gold-light">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Travel;
