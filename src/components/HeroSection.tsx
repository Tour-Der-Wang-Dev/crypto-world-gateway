
import { Button } from '@/components/ui/button';
import { Infinity } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="animate-rotate-slow">
          <Infinity className="h-[500px] w-[500px] text-infiworld-gold" strokeWidth={0.5} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full p-4 bg-infiworld-space-dark shadow-gold border border-infiworld-gold/30 animate-float">
              <Infinity className="h-12 w-12 text-infiworld-gold animate-pulse-gold" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient-gold">The Future of</span>
            <br />
            <span className="text-white">Crypto Payments</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            InfiWorld connects cryptocurrency with real-world services in one seamless ecosystem. 
            From marketplace to travel, experience the limitless possibilities of blockchain.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-infiworld-gold text-infiworld-space-dark hover:bg-infiworld-gold-light"
            >
              Connect Wallet
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-infiworld-gold text-infiworld-gold hover:bg-infiworld-gold/10"
              asChild
            >
              <Link to="/map">Explore Platform</Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Crypto Currencies', value: '50+' },
            { label: 'Global Locations', value: '10,000+' },
            { label: 'Merchants', value: '2,500+' },
            { label: 'Daily Transactions', value: '$1.2M' },
          ].map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-2xl md:text-4xl font-bold text-infiworld-gold mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
