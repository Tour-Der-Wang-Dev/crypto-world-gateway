
import { Globe, ShoppingBag, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-infiworld-blue-dark/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-gold">
            Our Core Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            InfiWorld combines three essential services into one powerful platform, all powered by cryptocurrency.
          </p>
        </div>
        
        {/* Marketplace Section */}
        <div className="flex flex-col lg:flex-row items-center mb-20 gap-8">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Crypto Marketplace</h3>
            <p className="text-gray-300 mb-6">
              Our marketplace connects buyers and sellers from around the world, enabling transactions with a wide range of cryptocurrencies. Find unique products or sell your goods to a global audience.
            </p>
            <ul className="space-y-3 mb-6">
              {['Secure escrow payments', 'Verified merchants', 'Global shipping integration', 'Decentralized dispute resolution'].map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <span className="mr-2 text-infiworld-gold">✓</span> {feature}
                </li>
              ))}
            </ul>
            <Button className="bg-infiworld-gold text-infiworld-space-dark hover:bg-infiworld-gold-light">
              <ShoppingBag className="mr-2 h-4 w-4" /> Explore Marketplace
            </Button>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="rounded-lg border-gradient-gold p-4 shadow-gold">
              <div className="aspect-video bg-infiworld-blue-dark rounded flex items-center justify-center">
                <ShoppingBag className="h-20 w-20 text-infiworld-gold opacity-50" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Freelance Section */}
        <div className="flex flex-col lg:flex-row items-center mb-20 gap-8">
          <div className="w-full lg:w-1/2">
            <div className="rounded-lg border-gradient-gold p-4 shadow-gold">
              <div className="aspect-video bg-infiworld-blue-dark rounded flex items-center justify-center">
                <Globe className="h-20 w-20 text-infiworld-gold opacity-50" />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Freelance Services</h3>
            <p className="text-gray-300 mb-6">
              Find skilled professionals or offer your expertise in our freelance marketplace, with all payments handled securely through cryptocurrency transactions.
            </p>
            <ul className="space-y-3 mb-6">
              {['Milestone-based payments', 'Talent verification system', 'Cross-border work made simple', 'Instant payment releases'].map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <span className="mr-2 text-infiworld-gold">✓</span> {feature}
                </li>
              ))}
            </ul>
            <Button className="bg-infiworld-gold text-infiworld-space-dark hover:bg-infiworld-gold-light">
              <Globe className="mr-2 h-4 w-4" /> Browse Freelancers
            </Button>
          </div>
        </div>
        
        {/* Travel Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Travel Reservations</h3>
            <p className="text-gray-300 mb-6">
              Book flights, hotels, and experiences using your cryptocurrency wallet. Enjoy seamless travel planning with blockchain-powered security and convenience.
            </p>
            <ul className="space-y-3 mb-6">
              {['No currency exchange fees', 'Instant booking confirmations', 'Crypto-friendly accommodations', 'Loyalty rewards in crypto'].map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <span className="mr-2 text-infiworld-gold">✓</span> {feature}
                </li>
              ))}
            </ul>
            <Button className="bg-infiworld-gold text-infiworld-space-dark hover:bg-infiworld-gold-light">
              <CreditCard className="mr-2 h-4 w-4" /> Plan Your Trip
            </Button>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="rounded-lg border-gradient-gold p-4 shadow-gold">
              <div className="aspect-video bg-infiworld-blue-dark rounded flex items-center justify-center">
                <CreditCard className="h-20 w-20 text-infiworld-gold opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
