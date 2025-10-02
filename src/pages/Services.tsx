import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import MagicBento from '@/components/MagicBento';
import Layout from '@/components/Layout';

const Services = () => {
  const serviceCards = [
    {
      color: '#060010',
      title: 'Bespoke Web Architecture',
      description: 'Meticulously crafted full-stack applications using elite technologies. From conceptual design to enterprise deployment with uncompromising quality.',
      label: 'Starting at $15,000'
    },
    {
      color: '#060010',
      title: 'Luxury Mobile Experiences',
      description: 'Premium native iOS & Android applications built with React Native. Advanced features, seamless API integration, and white-glove App Store deployment.',
      label: 'Starting at $25,000'
    },
    {
      color: '#060010',
      title: 'Visionary UI/UX Design',
      description: 'Award-winning design systems that captivate and convert. Complete Figma design suites, interactive prototypes, and comprehensive brand identity.',
      label: 'Starting at $8,500'
    },
    {
      color: '#060010',
      title: 'Enterprise E-commerce',
      description: 'Sophisticated online commerce platforms with advanced functionality. Custom payment systems, intelligent inventory management, and conversion optimization.',
      label: 'Starting at $20,000'
    },
    {
      color: '#060010',
      title: 'Strategic Digital Consulting',
      description: 'C-level technical advisory, enterprise architecture planning, comprehensive code audits, and executive team training from industry experts.',
      label: 'Starting at $500/hour'
    },
    {
      color: '#060010',
      title: 'Platinum Support & Maintenance',
      description: 'Comprehensive 24/7 monitoring, proactive security management, performance optimization, and dedicated support for mission-critical applications.',
      label: 'Starting at $2,500/month'
    }
  ];

  return (
    <Layout>
      <main className="min-h-screen py-40 px-6 relative overflow-hidden bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-white/8 via-white/4 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-tl from-white/6 via-white/3 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-white/4 via-white/2 to-transparent rounded-full animate-pulse delay-2000"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/10 to-black"></div>
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>

        <div className="container mx-auto max-w-none relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-32"
          >
            <div className="mb-8">
              <span className="inline-block px-8 py-4 rounded-full border border-white/20 text-white/80 text-sm font-medium tracking-widest uppercase backdrop-blur-sm bg-white/5">
                Luxury Services Portfolio
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-12 font-playfair leading-tight tracking-tight">
              Exquisite
              <span className="block mt-2 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                Digital Services
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
              Meticulously crafted solutions that transcend expectations and redefine digital excellence
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center w-full mb-20"
          >
            <div className="w-full max-w-7xl">
              <MagicBento 
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={400}
                particleCount={15}
                glowColor="132, 0, 255"
                cards={serviceCards}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-center mt-32"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 font-playfair leading-tight">
                Ready to Create
                <span className="block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                  Something Extraordinary?
                </span>
              </h2>
              <p className="text-gray-300 mb-12 text-2xl max-w-3xl mx-auto leading-relaxed font-light">
                Transform your vision into a digital masterpiece with our unparalleled expertise and dedication to excellence
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <Link to="/contact">
                  <Button className="px-12 py-6 bg-white text-black hover:bg-gray-100 rounded-full font-semibold text-xl transition-all duration-500 shadow-2xl hover:shadow-white/30 hover:scale-105 transform">
                    Begin Your Project
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="px-12 py-6 border-2 border-white/40 text-white hover:border-white hover:bg-white/10 rounded-full font-semibold text-xl transition-all duration-500 backdrop-blur-md bg-white/5 hover:bg-white/15 hover:scale-105 transform">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </Layout>
  );
};

export default Services;
