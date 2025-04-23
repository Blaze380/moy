import React, { useEffect, useState } from 'react';

interface AnimatedNumberProps {
  value: string;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, duration = 2000 }) => {
  // Extrai o número e o sufixo (como "K+", "MZN", "+", etc.)
  const numericPart = value.match(/\d+/)?.[0] || '0';
  const suffix = value.replace(numericPart, '');

  const target = parseInt(numericPart, 10);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (target === 0) return;

    const increment = target / (duration / 16); // 60fps
    let start = 0;

    const animate = () => {
      start += increment;
      const rounded = Math.round(start);

      if (rounded < target) {
        setCurrent(rounded);
        requestAnimationFrame(animate);
      } else {
        setCurrent(target);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      // Cleanup if needed
    };
  }, [target, duration]);

  return (
    <span>
      {current.toLocaleString()}
      {suffix}
    </span>
  );
};

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-4xl font-bold mb-2">
      <AnimatedNumber value={value} />
    </div>
    <div className="text-gray-400">{label}</div>
  </div>
);

export default function Stats() {
  const stats = [
    { value: "+600mil MZN", label: "Investidos em impacto social e digital" },
    { value: "+100", label: "Projetos criativos entregues" },
    { value: "+10", label: "Setores atendidos em Moçambique e além" },
    { value: "+5", label: "Anos de experiência acumulada" }
  ];

  //TODO is hidden
  return (
    <section className="container mx-auto px-6 py-20 hidden border-2 border-red-900">
      <div className="flex justify-around">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </section>
  );
}