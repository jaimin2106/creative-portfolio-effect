import { useEffect, useState } from 'react';
import LightRays from './LightRays';

interface Line {
  id: number;
  delay: number;
  duration: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  angle: number;
  length: number;
}

const AnimatedBackground = () => {
  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    const generateLines = () => {
      const newLines: Line[] = [];
      for (let i = 0; i < 20; i++) {
        const angle = Math.random() * 180 - 90; // Random angle between -90 and 90 degrees
        const length = 100 + Math.random() * 200; // Length between 100-300px
        const startX = Math.random() * 120 - 10; // Start from -10% to 110%
        const startY = Math.random() * 120 - 10; // Start from -10% to 110%
        
        newLines.push({
          id: i,
          delay: Math.random() * 4,
          duration: 8 + Math.random() * 4,
          startX,
          startY,
          endX: startX + Math.cos(angle * Math.PI / 180) * (length / 5),
          endY: startY + Math.sin(angle * Math.PI / 180) * (length / 5),
          angle,
          length,
        });
      }
      setLines(newLines);
    };

    generateLines();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden bg-black">
      {/* WebGL Light Rays Effect */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
      />
      
      {/* Subtle diagonal lines for additional depth */}
      {lines.map((line) => (
        <div
          key={line.id}
          className="absolute opacity-10"
          style={{
            width: `${line.length}px`,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(0,255,255,0.2), transparent)',
            left: `${line.startX}%`,
            top: `${line.startY}%`,
            transform: `rotate(${line.angle}deg)`,
            transformOrigin: 'left center',
            animation: `diagonal-float ${line.duration}s ease-in-out infinite`,
            animationDelay: `${line.delay}s`,
          }}
        />
      ))}
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black z-10 pointer-events-none" />
    </div>
  );
};

export default AnimatedBackground;