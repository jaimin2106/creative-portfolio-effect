import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Palette, Rocket, Shield, Zap, Globe } from 'lucide-react';

const PremiumServices = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const services = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "End-to-end web applications with modern technologies and scalable architecture",
      features: ["React & Next.js", "Node.js & Python", "Database Design", "API Development"],
      gradient: "from-purple-600 via-blue-600 to-cyan-600"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that convert visitors into customers",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      gradient: "from-pink-600 via-purple-600 to-indigo-600"
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Lightning-fast websites that rank higher and perform better",
      features: ["Core Web Vitals", "SEO Optimization", "Load Time < 2s", "Mobile First"],
      gradient: "from-orange-600 via-red-600 to-pink-600"
    },
    {
      icon: Shield,
      title: "Security & Reliability",
      description: "Enterprise-grade security and 99.9% uptime for your applications",
      features: ["Authentication", "Data Protection", "SSL Certificates", "Backup Systems"],
      gradient: "from-green-600 via-teal-600 to-blue-600"
    },
    {
      icon: Zap,
      title: "Automation & AI",
      description: "Smart solutions that automate workflows and enhance user experience",
      features: ["Workflow Automation", "AI Integration", "Data Processing", "Smart Analytics"],
      gradient: "from-yellow-600 via-orange-600 to-red-600"
    },
    {
      icon: Globe,
      title: "Consulting & Strategy",
      description: "Technical guidance and strategic planning for your digital transformation",
      features: ["Tech Stack Selection", "Architecture Planning", "Code Reviews", "Team Training"],
      gradient: "from-indigo-600 via-purple-600 to-pink-600"
    }
  ];

  return (
    <motion.div 
      ref={containerRef}
      style={{ opacity }}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Premium Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            style={{ y }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-purple-500/30 bg-purple-950/20 backdrop-blur-sm mb-8"
          >
            <Zap className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Premium Services</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-playfair">
            Crafting Digital
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transform your vision into reality with cutting-edge solutions that drive growth, 
            enhance user experience, and deliver measurable results.
          </p>
        </motion.div>

        {/* Premium Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Premium Card */}
                <div className="relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl overflow-hidden h-full transition-all duration-500 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10">
                  {/* Premium Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Premium Icon Container */}
                  <div className="relative z-10 mb-6">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-100 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Premium Features List */}
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Premium Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Premium CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300"
            >
              Start Your Project
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border border-purple-500/50 text-purple-300 font-semibold rounded-full backdrop-blur-sm hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
            >
              View Case Studies
            </motion.button>
          </div>
          
          <p className="text-gray-400 mt-6 text-sm">
            Ready to elevate your digital presence? Let's discuss your vision.
          </p>
        </motion.div>
      </div>

      {/* Premium Decorative Elements */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
    </motion.div>
  );
};

export default PremiumServices;