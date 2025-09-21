import AnimatedBackground from '@/components/AnimatedBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Animated background with geometric lines */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
      </main>
    </div>
  );
};

export default Index;
