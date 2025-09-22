import { useEffect, useState } from 'react';

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
      {/* Diagonal light lines */}
      {lines.map((line) => (
        <div
          key={line.id}
          className="absolute opacity-20"
          style={{
            width: `${line.length}px`,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
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
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
      
      {/* Radial gradient for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-900/20 via-transparent to-black/80" />
    </div>
  );
};

export default AnimatedBackground;