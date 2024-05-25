// src/MotionParticleBackground.js
import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './Particle';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } },
  hover: { scale: 1.1 }
};

export default function MotionParticleBackground() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={variants}
      style={{ position: 'absolute', width: '100%', height: '100%' }}
    >
      <ParticleBackground />
    </motion.div>
  );
}

