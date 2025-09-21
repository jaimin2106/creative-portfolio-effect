import { useEffect, useState } from 'react';

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
    // Generate random lines for the animated background
    const generateLines = () => {
      const newLines: Line[] = [];
      for (let i = 0; i < 8; i++) {
        newLines.push({
          id: i,
          delay: Math.random() * 10,
          duration: 15 + Math.random() * 10,
          startY: Math.random() * 100,
          endY: Math.random() * 100,
          angle: Math.random() * 60 - 30, // -30 to 30 degrees
        });
      }
      setLines(newLines);
    };

    generateLines();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      
      {/* Animated lines */}
      {lines.map((line) => (
        <div
          key={line.id}
          className="absolute h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent"
          style={{
            width: '200px',
            top: `${line.startY}%`,
            left: '-200px',
            transform: `rotate(${line.angle}deg)`,
            animation: `float-line ${line.duration}s linear infinite`,
            animationDelay: `${line.delay}s`,
          }}
        />
      ))}
      
      {/* Additional geometric elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-muted-foreground/10 rounded-full animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-muted-foreground/10 rotate-45 animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Subtle radial gradient for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/50" />
    </div>
  );
};

export default AnimatedBackground;