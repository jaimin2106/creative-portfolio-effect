import React from 'react';
import Navigation from './Navigation';
import AnimatedBackground from './AnimatedBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-black">
      <AnimatedBackground />
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
