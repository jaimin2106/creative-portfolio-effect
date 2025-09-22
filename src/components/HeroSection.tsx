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
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            <span className="text-sm text-gray-300">Build Your Online Identity Today</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">
            Launch a Personal Site
          </span>
          <br />
          <span className="text-gray-400">
            That Wins Opportunities
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Whether you're a designer, developer, or creator, PersonaForge helps 
          you stand out with a site that feels professional, and you.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button className="px-8 py-3 bg-white text-black hover:bg-gray-100 rounded-full font-medium">
            Start Building
          </Button>
          <Button variant="outline" className="px-8 py-3 border-gray-600 text-gray-300 hover:bg-gray-800 rounded-full font-medium">
            See Examples  
          </Button>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 text-sm text-gray-500"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="flex items-center space-x-2"
            >
              <span className="text-lg opacity-50">{feature.icon}</span>
              <span>{feature.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Half Moon at bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <div className="w-96 h-48 bg-gradient-to-t from-white/20 to-transparent rounded-t-full blur-xl"></div>
        <div className="absolute inset-0 w-96 h-48 bg-gradient-to-t from-white/10 to-transparent rounded-t-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;