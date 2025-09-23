import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
            <div className="w-3 h-3 bg-black rounded-sm"></div>
          </div>
          <span className="text-xl font-semibold text-white">Selflane</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
            Home
          </Link>
          <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors text-sm">
            Portfolio
          </Link>
          <a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm">
            Features
          </a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors text-sm">
            Pricing
          </a>
        </div>

        {/* CTA Button */}
        <Button 
          className="bg-white text-black hover:bg-gray-100 px-6 py-2 rounded-full text-sm font-medium"
        >
          Start Building
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;