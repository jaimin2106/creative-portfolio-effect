import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import MagicBento from './MagicBento';

const PremiumServices = () => {
  const serviceCards = [
    {
      color: '#060010',
      title: 'Custom Web Development',
      description: 'Full-stack web applications built with React, Node.js, and modern technologies. From concept to deployment.',
      label: 'From $2,999'
    },
    {
      color: '#060010',
      title: 'Mobile App Development',
      description: 'Native iOS & Android apps with React Native. Push notifications, API integration, and App Store deployment.',
      label: 'From $4,999'
    },
    {
      color: '#060010',
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered design that converts. Figma design, prototyping, and complete design systems.',
      label: 'From $1,999'
    },
    {
      color: '#060010',
      title: 'E-commerce Solutions',
      description: 'Complete online store setup with Shopify/WooCommerce. Payment integration and inventory management.',
      label: 'From $3,999'
    },
    {
      color: '#060010',
      title: 'Consulting & Strategy',
      description: 'Technical guidance, architecture planning, code reviews, and team training from an expert developer.',
      label: 'From $199/hr'
    },
    {
      color: '#060010',
      title: 'Maintenance & Support',
      description: '24/7 monitoring, security updates, performance optimization, and ongoing support for your projects.',
      label: 'From $499/mo'
    }
  ];

  return (
    <section id="services" className="min-h-screen py-32 px-6 relative overflow-hidden bg-gradient-to-br from-black via-purple-950/20 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-600/5 to-transparent rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-none relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-playfair">
            Premium Services
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Elevate your digital presence with expertly crafted solutions that drive results
          </p>
        </motion.div>

        {/* Animated Services Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-4 bg-purple-600 text-white hover:bg-purple-700 rounded-full font-medium text-lg transition-all duration-300">
              Schedule Consultation
            </Button>
            <Button className="px-8 py-4 border border-white/20 text-white hover:bg-white hover:text-black rounded-full font-medium text-lg transition-all duration-300">
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumServices;