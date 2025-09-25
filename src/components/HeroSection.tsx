import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const features = [
    { icon: '📂', name: 'Catalog' },
    { icon: '🎨', name: 'Layers' },
    { icon: '⭕', name: 'Circoles' },
    { icon: '💬', name: 'Quotient' },
    { icon: '⏰', name: 'Hours' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden bg-black">
      {/* Animated geometric lines background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Diagonal lines */}
        <div className="absolute top-10 left-10 w-32 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-0.5 bg-gradient-to-r from-transparent via-white/15 to-transparent -rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-28 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-135 animate-pulse delay-2000"></div>
        
        {/* Scattered stars/sparkles */}
        <div className="absolute top-20 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-1500"></div>
        <div className="absolute top-1/2 right-10 w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-10 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-300"></div>
        
        {/* Large sparkle in bottom right */}
        <div className="absolute bottom-10 right-10">
          <div className="relative w-6 h-6">
            <div className="absolute inset-0 bg-white rotate-45 transform origin-center animate-pulse" style={{
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
            }}></div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
            <span className="text-sm text-white/80 font-medium">Build Your Online Identity Today</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Launch a Personal Site<br />
            That Wins Opportunities
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Whether you're a designer, developer, or creator, PersonaForge helps 
          you stand out with a site that feels professional, and you.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <Button className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-medium text-lg hover:bg-white hover:text-black transition-all duration-300">
            Start Building
          </Button>
          <Button className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-medium text-lg hover:bg-white/20 transition-all duration-300">
            See Examples
          </Button>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 text-sm text-white/40"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <span className="text-lg opacity-60 grayscale">{feature.icon}</span>
              <span className="font-medium">{feature.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Curved glow at bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-4xl">
        <div className="w-full h-48 bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-t-full blur-xl"></div>
        <div className="absolute inset-0 w-full h-48 bg-gradient-to-t from-white/5 to-transparent rounded-t-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;