import { motion } from 'framer-motion';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import MagicBento from '@/components/MagicBento';

const Index = () => {
  const portfolioCards = [
    {
      color: '#060010',
      title: 'Technical Skills',
      description: 'JavaScript, TypeScript, React, Node.js, Python, SQL, Git',
      label: 'Skills'
    },
    {
      color: '#060010', 
      title: 'About Me',
      description: 'Passionate developer with 3+ years building web applications and solving complex problems',
      label: 'Introduction'
    },
    {
      color: '#060010',
      title: 'Featured Projects',
      description: 'E-commerce platform, Task management app, Weather dashboard, Portfolio website',
      label: 'Projects'
    },
    {
      color: '#060010',
      title: 'Experience',
      description: 'Frontend Developer Intern at TechCorp, Freelance Web Developer for 5+ clients',
      label: 'Work History'
    },
    {
      color: '#060010',
      title: 'Tools & Technology',
      description: 'VS Code, Docker, AWS, Figma, Postman, MongoDB, PostgreSQL',
      label: 'Tech Stack'
    },
    {
      color: '#060010',
      title: 'Achievements',
      description: 'Dean\'s List, Hackathon Winner, Open Source Contributor, 10+ Projects Completed',
      label: 'Highlights'
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Animated background with geometric lines */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home">
          <HeroSection />
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="min-h-screen py-32 px-6">
          <div className="container mx-auto max-w-none">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-playfair">
                My Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Explore my journey as a developer through skills, projects, and achievements
              </p>
            </motion.div>

            {/* Bento Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center w-full"
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
                  cards={portfolioCards}
                />
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-20"
            >
              <p className="text-gray-300 mb-8 text-lg">
                Want to work together or learn more about my projects?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-black hover:bg-gray-100 rounded-full font-medium transition-colors text-lg">
                  Contact Me
                </button>
                <button className="px-8 py-4 border border-gray-600 text-gray-300 hover:bg-gray-800 rounded-full font-medium transition-colors text-lg">
                  Download Resume
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
