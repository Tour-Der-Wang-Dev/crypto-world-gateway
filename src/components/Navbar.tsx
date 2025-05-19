
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, ShoppingCart, Briefcase, Plane, Map, Infinity } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const navItems = [
    { name: 'Map', path: '/map', icon: <Map className="w-4 h-4 mr-1" /> },
    { name: 'Marketplace', path: '/marketplace', icon: <ShoppingCart className="w-4 h-4 mr-1" /> },
    { name: 'Freelance', path: '/freelance', icon: <Briefcase className="w-4 h-4 mr-1" /> },
    { name: 'Travel', path: '/travel', icon: <Plane className="w-4 h-4 mr-1" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-infiworld-space-dark/90 backdrop-blur-md border-b border-infiworld-gold/20 shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <Infinity className="h-8 w-8 text-infiworld-gold" />
            <span className="ml-2 text-xl font-bold text-gradient-gold">InfiWorld</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-infiworld-gold transition-colors"
            >
              <div className="flex items-center">
                {item.icon}
                {item.name}
              </div>
            </Link>
          ))}
          <Button variant="outline" className="ml-4 border-infiworld-gold text-infiworld-gold hover:bg-infiworld-gold hover:text-infiworld-space-dark">
            <Globe className="w-4 h-4 mr-1" /> Connect Wallet
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu} 
            className="text-infiworld-gold hover:bg-infiworld-blue-dark"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobile && isOpen && (
        <div className="md:hidden bg-infiworld-space-dark/95 backdrop-blur-md border-b border-infiworld-gold/20">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-infiworld-gold hover:bg-infiworld-blue/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center">
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </div>
              </Link>
            ))}
            <div className="pt-2">
              <Button 
                variant="outline" 
                className="w-full border-infiworld-gold text-infiworld-gold hover:bg-infiworld-gold hover:text-infiworld-space-dark"
              >
                <Globe className="w-4 h-4 mr-1" /> Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
