
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarBackground from "@/components/StarBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Search, Filter, Tag } from "lucide-react";

const sampleProducts = [
  {
    id: 1,
    name: "Blockchain Security Suite",
    price: 0.05,
    currency: "BTC",
    image: "/placeholder.svg",
    category: "Software",
    seller: "CryptoTech"
  },
  {
    id: 2,
    name: "Limited Edition NFT Artwork",
    price: 1.2,
    currency: "ETH",
    image: "/placeholder.svg",
    category: "Digital Art",
    seller: "NFTCreator"
  },
  {
    id: 3,
    name: "Crypto Hardware Wallet",
    price: 0.01,
    currency: "BTC",
    image: "/placeholder.svg",
    category: "Hardware",
    seller: "SecureWallet"
  },
  {
    id: 4,
    name: "Blockchain Development Course",
    price: 0.5,
    currency: "ETH",
    image: "/placeholder.svg",
    category: "Education",
    seller: "CryptoAcademy"
  },
  {
    id: 5,
    name: "Custom Mining Rig",
    price: 0.25,
    currency: "BTC",
    image: "/placeholder.svg",
    category: "Hardware",
    seller: "MiningExperts"
  },
  {
    id: 6,
    name: "DeFi Strategy Guide",
    price: 0.03,
    currency: "ETH",
    image: "/placeholder.svg",
    category: "Education",
    seller: "DeFiGuru"
  },
];

const Marketplace = () => {
  return (
    <div className="bg-space min-h-screen">
      <StarBackground />
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-gold">
            Crypto Marketplace
          </h1>
          <p className="text-gray-300">
            Buy and sell products with cryptocurrency. Connect with vendors worldwide.
          </p>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="bg-infiworld-blue-dark/70 backdrop-blur-sm p-4 rounded-lg mb-8 border border-infiworld-gold/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                className="pl-10 bg-infiworld-space-dark border-infiworld-gold/30"
                placeholder="Search products..."
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                className="pl-10 bg-infiworld-space-dark border-infiworld-gold/30"
                placeholder="Filter by category..."
              />
            </div>
            
            <Button className="bg-infiworld-gold text-infiworld-space-dark hover:bg-infiworld-gold-light">
              <Tag size={18} className="mr-2" /> Browse Categories
            </Button>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProducts.map((product) => (
            <Card key={product.id} className="bg-infiworld-blue-dark/70 backdrop-blur-sm border-infiworld-gold/20 overflow-hidden transition-all duration-300 hover:shadow-gold hover:-translate-y-1">
              <div className="aspect-square bg-infiworld-blue-dark relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute top-2 right-2 bg-infiworld-blue-dark/80 backdrop-blur-sm px-2 py-1 rounded text-infiworld-gold text-sm border border-infiworld-gold/30">
                  {product.category}
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">{product.name}</CardTitle>
                <p className="text-sm text-gray-400">Seller: {product.seller}</p>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold text-infiworld-gold">
                  {product.price} {product.currency}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-infiworld-gold text-infiworld-space-dark hover:bg-infiworld-gold-light">
                  <ShoppingCart size={18} className="mr-2" /> Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
