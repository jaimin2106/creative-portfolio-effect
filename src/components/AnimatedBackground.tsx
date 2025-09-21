import { useEffect, useState } from 'react';
import LightRays from './LightRays';

interface Line {
  id: number;
  delay: number;
  duration: number;
  startY: number;
  endY: number;
  angle: number;
}

const AnimatedBackground = () => {
  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    const generateLines = () => {
      const newLines: Line[] = [];
      for (let i = 0; i < 6; i++) {
        newLines.push({
          id: i,
          delay: Math.random() * 8,
          duration: 12 + Math.random() * 8,
          startY: Math.random() * 100,
          endY: Math.random() * 100,
          angle: Math.random() * 45 - 22.5,
        });
      }
      setLines(newLines);
    };

    generateLines();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* WebGL Light Rays Background */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={0.8}
        lightSpread={1.2}
        rayLength={1.8}
        followMouse={true}
        mouseInfluence={0.15}
        noiseAmount={0.08}
        distortion={0.03}
        fadeDistance={1.2}
        saturation={0.9}
        className="opacity-40"
      />
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-muted/30 z-[2]" />
      
      {/* Subtle animated lines for depth */}
      {lines.map((line) => (
        <div
          key={line.id}
          className="absolute h-px bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent z-[3]"
          style={{
            width: '150px',
            top: `${line.startY}%`,
            left: '-150px',
            transform: `rotate(${line.angle}deg)`,
            animation: `float-line ${line.duration}s linear infinite`,
            animationDelay: `${line.delay}s`,
          }}
        />
      ))}
      
      {/* Geometric accent elements */}
      <div className="absolute top-1/3 left-1/5 w-24 h-24 border border-muted-foreground/8 rounded-full animate-pulse z-[3]" />
      <div className="absolute top-2/3 right-1/5 w-16 h-16 border border-muted-foreground/8 rotate-45 animate-pulse z-[3]" style={{ animationDelay: '1.5s' }} />
      
      {/* Final depth overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/60 z-[4]" />
    </div>
  );
};

export default AnimatedBackground;