import { useEffect, useState } from 'react';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
}

export function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate floating elements
    const newElements: FloatingElement[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 60 + 20,
      speed: Math.random() * 0.5 + 0.1,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 2 - 1,
    }));
    setElements(newElements);

    // Mouse move handler for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    // Animation loop
    const animate = () => {
      setElements(prev => prev.map(element => ({
        ...element,
        y: element.y - element.speed,
        rotation: element.rotation + element.rotationSpeed,
        // Reset position when element goes off screen
        ...(element.y < -element.size && {
          y: window.innerHeight + element.size,
          x: Math.random() * window.innerWidth,
        }),
      })));
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animationInterval = setInterval(animate, 50);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute opacity-10 dark:opacity-5"
          style={{
            left: element.x + mousePosition.x * 0.1,
            top: element.y + mousePosition.y * 0.1,
            width: element.size,
            height: element.size,
            transform: `rotate(${element.rotation}deg) rotateX(${mousePosition.x * 0.5}deg) rotateY(${mousePosition.y * 0.5}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg transform-gpu" 
               style={{
                 clipPath: Math.random() > 0.5 
                   ? 'polygon(50% 0%, 0% 100%, 100% 100%)' 
                   : 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
               }} 
          />
        </div>
      ))}
    </div>
  );
}