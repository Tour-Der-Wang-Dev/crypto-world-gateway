
import { ShoppingCart, Briefcase, Plane, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <ShoppingCart className="h-12 w-12 text-infiworld-gold" />,
    title: 'Crypto Marketplace',
    description: 'Buy and sell products with cryptocurrency. Our marketplace connects crypto-friendly vendors with customers worldwide.',
  },
  {
    icon: <Briefcase className="h-12 w-12 text-infiworld-gold" />,
    title: 'Freelance Services',
    description: 'Hire freelancers or offer your services with secure cryptocurrency payments. Perfect for remote work across borders.',
  },
  {
    icon: <Plane className="h-12 w-12 text-infiworld-gold" />,
    title: 'Travel Reservations',
    description: 'Book flights, hotels, and experiences using your favorite cryptocurrencies. Travel the world with blockchain technology.',
  },
  {
    icon: <Shield className="h-12 w-12 text-infiworld-gold" />,
    title: 'Secure Transactions',
    description: 'All payments are secured through blockchain technology with escrow protection and transparent verification process.',
  },
];

const FeatureSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-gold">
            The Ultimate Crypto Ecosystem
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            InfiWorld integrates cryptocurrency into everyday services, connecting the blockchain world with real-life applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-infiworld-blue-dark/50 border-infiworld-gold/20 backdrop-blur-sm transition-all duration-300 hover:shadow-gold hover:-translate-y-1"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-center">{feature.icon}</div>
                <CardTitle className="text-center text-xl mt-4 text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-400">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
