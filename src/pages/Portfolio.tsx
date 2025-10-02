import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'web', 'mobile', 'design', 'ecommerce'];

  const projects = [
    {
      id: 1,
      title: 'Luxury Fashion E-commerce',
      category: 'ecommerce',
      description: 'Complete digital transformation for high-end fashion retailer with custom CMS and AI-powered recommendations',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      tags: ['Next.js', 'Stripe', 'AI/ML'],
    },
    {
      id: 2,
      title: 'FinTech Mobile Platform',
      category: 'mobile',
      description: 'Secure banking application with biometric authentication and real-time transaction monitoring',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      tags: ['React Native', 'Security', 'APIs'],
    },
    {
      id: 3,
      title: 'Brand Identity System',
      category: 'design',
      description: 'Comprehensive design system and brand guidelines for global tech startup',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      tags: ['Figma', 'Branding', 'UI/UX'],
    },
    {
      id: 4,
      title: 'Enterprise SaaS Dashboard',
      category: 'web',
      description: 'Sophisticated analytics platform with real-time data visualization and custom reporting',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['React', 'D3.js', 'Analytics'],
    },
    {
      id: 5,
      title: 'Healthcare Mobile App',
      category: 'mobile',
      description: 'Patient management system with telemedicine capabilities and HIPAA compliance',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      tags: ['Flutter', 'Healthcare', 'Security'],
    },
    {
      id: 6,
      title: 'Real Estate Platform',
      category: 'web',
      description: 'Immersive property search experience with virtual tours and AI-powered matching',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      tags: ['Next.js', '3D', 'AI'],
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <Layout>
      <main className="min-h-screen py-40 px-6 relative overflow-hidden bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-white/8 via-white/4 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-tl from-white/6 via-white/3 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/10 to-black"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <div className="mb-8">
              <span className="inline-block px-8 py-4 rounded-full border border-white/20 text-white/80 text-sm font-medium tracking-widest uppercase backdrop-blur-sm bg-white/5">
                Featured Work
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-12 font-playfair leading-tight tracking-tight">
              Our
              <span className="block mt-2 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Showcasing excellence across industries with transformative digital solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center gap-4 mb-16 flex-wrap"
          >
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 ${
                  filter === cat
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'border-2 border-white/20 text-white hover:border-white/40 bg-transparent hover:bg-white/5'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-3 font-playfair group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-4 py-2 rounded-full text-sm font-medium border border-white/20 text-white/70 bg-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Portfolio;
