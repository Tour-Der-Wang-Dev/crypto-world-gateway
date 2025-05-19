
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Subscription Successful!",
      description: "You've been added to our newsletter.",
    });
    setEmail('');
  };
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="rounded-xl border-gradient-gold p-8 shadow-gold bg-infiworld-blue-dark/50 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gradient-gold">
              Stay Updated with InfiWorld
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest news on cryptocurrency adoption, 
              platform updates, and exclusive offers.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-infiworld-space-dark border-infiworld-gold/30 text-white placeholder:text-gray-400 focus:border-infiworld-gold"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                type="submit"
                className="bg-infiworld-gold text-infiworld-space-dark hover:bg-infiworld-gold-light whitespace-nowrap"
              >
                Subscribe Now
              </Button>
            </div>
          </form>
          
          <p className="text-gray-400 text-xs mt-4 text-center">
            By subscribing, you agree to receive marketing emails from InfiWorld. 
            You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
