import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import CardSwap, { Card } from '@/components/CardSwap';
import PremiumServices from '@/components/PremiumServices';

const Index = () => {

  return (
    <Layout>
      {/* Main content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="relative">
          <HeroSection />
          
          {/* Floating Stats Cards */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <div style={{ height: '600px', position: 'relative' }}>
              <CardSwap
                cardDistance={60}
                verticalDistance={80}
                delay={3500}
                pauseOnHover={true}
                width={350}
                height={280}
              >
                <Card className="p-6 hover:border-purple-400/50 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
                    <div className="text-lg font-semibold text-white mb-1">Projects Completed</div>
                    <div className="text-sm text-gray-400">Full-stack applications delivered</div>
                  </div>
                </Card>
                <Card className="p-6 hover:border-purple-400/50 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">50K+</div>
                    <div className="text-lg font-semibold text-white mb-1">Lines of Code</div>
                    <div className="text-sm text-gray-400">Written across multiple languages</div>
                  </div>
                </Card>
                <Card className="p-6 hover:border-purple-400/50 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">3+</div>
                    <div className="text-lg font-semibold text-white mb-1">Years Experience</div>
                    <div className="text-sm text-gray-400">Building modern web solutions</div>
                  </div>
                </Card>
                <Card className="p-6 hover:border-purple-400/50 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
                    <div className="text-lg font-semibold text-white mb-1">Client Satisfaction</div>
                    <div className="text-sm text-gray-400">Positive feedback & reviews</div>
                  </div>
                </Card>
                <Card className="p-6 hover:border-purple-400/50 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">12</div>
                    <div className="text-lg font-semibold text-white mb-1">Technologies</div>
                    <div className="text-sm text-gray-400">Frontend & backend mastered</div>
                  </div>
                </Card>
                <Card className="p-6 hover:border-purple-400/50 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
                    <div className="text-lg font-semibold text-white mb-1">GitHub Commits</div>
                    <div className="text-sm text-gray-400">Active open source contributor</div>
                  </div>
                </Card>
              </CardSwap>
            </div>
          </div>
        </section>


        {/* Premium Services Section */}
        <section id="services" className="relative">
          <PremiumServices />
        </section>
      </main>
    </Layout>
  );
};

export default Index;
