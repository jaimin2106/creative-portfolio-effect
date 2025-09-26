import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ShinyText from './ShinyText';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Ultra Premium Background */}
      <div className="absolute inset-0 bg-black">
        {/* Sophisticated gradient mesh */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-white/8 via-white/4 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-white/6 via-white/3 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 via-white/2 to-transparent rounded-full animate-pulse delay-2000"></div>
        
        {/* Premium grid overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
        
        {/* Elegant light rays */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse delay-500"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/15 to-transparent animate-pulse delay-1500"></div>
        </div>
      </div>

      <div className="container mx-auto text-center relative z-10 max-w-6xl">
        {/* Ultra Premium Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="mb-6">
            <span className="inline-block px-6 py-3 rounded-full border border-white/20 text-white/80 text-sm font-medium tracking-wider uppercase backdrop-blur-sm bg-white/5 mb-8">
              Premium Digital Excellence
            </span>
          </div>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-8 font-playfair leading-[0.9] tracking-tight">
            Luxury
            <span className="block mt-2">
              <ShinyText text="Digital Craft" className="text-7xl md:text-8xl lg:text-9xl font-bold font-playfair" />
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
            Where visionary design meets flawless execution. Creating digital masterpieces that redefine excellence.
          </p>
        </motion.div>

        {/* Ultra Premium CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-8 justify-center mb-20"
        >
          <Button className="px-12 py-6 bg-white text-black hover:bg-gray-100 rounded-full font-semibold text-xl transition-all duration-500 shadow-2xl hover:shadow-white/30 hover:scale-105 transform border-2 border-transparent hover:border-white/20">
            Begin Your Journey
          </Button>
          <Button className="px-12 py-6 border-2 border-white/40 text-white hover:border-white hover:bg-white/10 rounded-full font-semibold text-xl transition-all duration-500 backdrop-blur-md bg-white/5 hover:bg-white/15 hover:scale-105 transform">
            Explore Excellence
          </Button>
        </motion.div>

        {/* Premium Excellence Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto"
        >
          {[
            { 
              title: "Bespoke Development", 
              desc: "Handcrafted solutions architected with precision and built with the finest technologies",
              icon: "⚡"
            },
            { 
              title: "Luxury Design", 
              desc: "Sophisticated interfaces that embody elegance while delivering exceptional user experiences",
              icon: "✨"
            },
            { 
              title: "Strategic Mastery", 
              desc: "Visionary consulting that transforms ambitious ideas into market-defining digital products",
              icon: "🎯"
            }
          ].map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
              className="group p-8 rounded-3xl border border-white/15 hover:border-white/40 transition-all duration-500 backdrop-blur-md bg-gradient-to-br from-white/8 to-white/4 hover:from-white/12 hover:to-white/8 hover:scale-105 transform"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transform transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors font-playfair">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-lg leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;