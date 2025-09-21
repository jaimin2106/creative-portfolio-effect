import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Small badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
          <span className="text-sm text-muted-foreground">Available for new opportunities</span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-gradient-hero">Build Exceptional</span>
            <br />
            <span className="text-foreground">Digital Experiences</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Full-stack developer with expertise in modern web technologies, creating scalable solutions that drive business growth and user engagement.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg animate-glow"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-background/50 backdrop-blur-sm border-border hover:bg-secondary px-8 py-6 text-lg"
          >
            Download Resume
          </Button>
        </motion.div>

        {/* Tech stack preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 pt-8"
        >
          {['React', 'TypeScript', 'Node.js', 'Python', 'AWS'].map((tech, index) => (
            <div
              key={tech}
              className="px-4 py-2 rounded-full bg-secondary/30 backdrop-blur-sm border border-border text-sm text-muted-foreground"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;