import { motion } from 'framer-motion';
import MagicBento from '@/components/MagicBento';
import Navigation from '@/components/Navigation';
import AnimatedBackground from '@/components/AnimatedBackground';

const Portfolio = () => {
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
    <div className="min-h-screen relative bg-black">
      {/* Animated background with geometric lines */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair">
              My Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore my journey as a developer through skills, projects, and achievements
            </p>
          </motion.div>

          {/* Bento Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <MagicBento 
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
              cards={portfolioCards}
            />
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-gray-300 mb-8">
              Want to work together or learn more about my projects?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-black hover:bg-gray-100 rounded-full font-medium transition-colors">
                Contact Me
              </button>
              <button className="px-8 py-3 border border-gray-600 text-gray-300 hover:bg-gray-800 rounded-full font-medium transition-colors">
                Download Resume
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;