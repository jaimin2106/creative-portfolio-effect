import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Progress } from '@/components/ui/progress';

const About = () => {
  const skills = [
    { name: 'Frontend Development', level: 95 },
    { name: 'Backend Architecture', level: 90 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'Mobile Development', level: 85 },
    { name: 'Cloud Infrastructure', level: 92 },
    { name: 'AI/ML Integration', level: 87 },
  ];

  const timeline = [
    { year: '2024', title: 'Global Expansion', description: 'Opened offices in 5 new countries, serving 100+ enterprise clients' },
    { year: '2023', title: 'Innovation Award', description: 'Recognized for excellence in digital transformation' },
    { year: '2022', title: 'Series B Funding', description: 'Raised $50M to scale operations and R&D' },
    { year: '2021', title: 'Product Launch', description: 'Released flagship SaaS platform used by thousands' },
    { year: '2020', title: 'Company Founded', description: 'Started with a vision to revolutionize digital experiences' },
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We pursue perfection in every pixel, every line of code, and every client interaction.'
    },
    {
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technologies and creative solutions.'
    },
    {
      title: 'Integrity',
      description: 'Building lasting relationships through transparency, honesty, and ethical practices.'
    },
    {
      title: 'Collaboration',
      description: 'Your success is our success. We work as partners, not just vendors.'
    },
  ];

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
            className="text-center mb-32"
          >
            <div className="mb-8">
              <span className="inline-block px-8 py-4 rounded-full border border-white/20 text-white/80 text-sm font-medium tracking-widest uppercase backdrop-blur-sm bg-white/5">
                Our Story
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-12 font-playfair leading-tight tracking-tight">
              About
              <span className="block mt-2 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                Our Company
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Crafting digital excellence since 2020, transforming visions into reality
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-32"
          >
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-12 md:p-16">
              <h2 className="text-5xl font-bold text-white mb-8 font-playfair">Our Mission</h2>
              <p className="text-2xl text-gray-300 leading-relaxed mb-8">
                We exist to transform ambitious ideas into extraordinary digital experiences. Through meticulous craftsmanship, 
                innovative thinking, and unwavering dedication, we help businesses achieve their full potential in the digital realm.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                Our team of world-class designers, developers, and strategists work collaboratively to deliver solutions 
                that don't just meet expectations—they exceed them. Every project is an opportunity to push boundaries 
                and set new standards for excellence.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-32"
          >
            <h2 className="text-5xl font-bold text-white mb-16 text-center font-playfair">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    <span className="text-2xl font-bold text-white">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-3" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-32"
          >
            <h2 className="text-5xl font-bold text-white mb-16 text-center font-playfair">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/40 to-white/20"></div>
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="relative pl-24"
                  >
                    <div className="absolute left-0 w-16 h-16 rounded-full bg-white/10 border-2 border-white/30 backdrop-blur-md flex items-center justify-center">
                      <span className="text-white font-bold">{item.year.slice(2)}</span>
                    </div>
                    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-lg">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-5xl font-bold text-white mb-16 text-center font-playfair">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02]"
                >
                  <h3 className="text-3xl font-bold text-white mb-4 font-playfair">{value.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </Layout>
  );
};

export default About;
