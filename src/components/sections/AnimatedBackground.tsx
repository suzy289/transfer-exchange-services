'use client';

import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  className?: string;
}

// Positions fixes pour éviter l'erreur d'hydratation (Math.random() génère des valeurs différentes côté serveur/client)
const bubblePositions = [
  { top: '10%', left: '15%' },
  { top: '25%', left: '75%' },
  { top: '45%', left: '5%' },
  { top: '60%', left: '85%' },
  { top: '75%', left: '25%' },
  { top: '85%', left: '55%' },
  { top: '15%', left: '45%' },
  { top: '55%', left: '35%' },
];

export default function AnimatedBackground({ className = '' }: AnimatedBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Formes géométriques animées */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-red-600/25 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-red-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Petites bulles flottantes */}
      {bubblePositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-24 h-24 bg-red-500/20 rounded-full blur-2xl"
          style={{
            top: pos.top,
            left: pos.left,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Grille de points subtile */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(circle, currentColor 1.5px, transparent 1.5px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}

