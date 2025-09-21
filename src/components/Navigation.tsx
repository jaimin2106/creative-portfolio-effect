import { Button } from '@/components/ui/button';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-primary">
          Portfolio
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
            Skills
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <Button 
          variant="outline" 
          className="bg-background/80 backdrop-blur-sm border-border hover:bg-secondary animate-glow"
        >
          Let's Work Together
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;