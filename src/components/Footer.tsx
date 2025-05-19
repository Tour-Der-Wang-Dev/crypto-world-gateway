
import { Infinity, Twitter, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-infiworld-blue-dark/50 border-t border-infiworld-gold/20 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Infinity className="h-8 w-8 text-infiworld-gold" />
              <span className="ml-2 text-xl font-bold text-gradient-gold">InfiWorld</span>
            </div>
            <p className="text-gray-400 text-sm">
              The ultimate platform integrating cryptocurrency payments into marketplace, freelance services and travel reservations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-infiworld-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-infiworld-gold transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-infiworld-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-200 font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/map" className="text-gray-400 hover:text-infiworld-gold text-sm">Crypto Map</Link></li>
              <li><Link to="/marketplace" className="text-gray-400 hover:text-infiworld-gold text-sm">Marketplace</Link></li>
              <li><Link to="/freelance" className="text-gray-400 hover:text-infiworld-gold text-sm">Freelance</Link></li>
              <li><Link to="/travel" className="text-gray-400 hover:text-infiworld-gold text-sm">Travel</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-200 font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-infiworld-gold text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-infiworld-gold text-sm">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-infiworld-gold text-sm">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-infiworld-gold text-sm">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-200 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-infiworld-gold text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-infiworld-gold text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-infiworld-gold text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-infiworld-gold text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-infiworld-gold/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} InfiWorld. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
