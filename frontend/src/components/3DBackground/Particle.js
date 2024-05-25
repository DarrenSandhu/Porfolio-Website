// src/components/3DBackground/Particle.js
import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count }) {
  const pointsRef = useRef();
  const positionsRef = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions.set([
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      ], i * 3);
    }
    return positions;
  }, [count]);

  useEffect(() => {
    if (positionsRef.current) {
      positionsRef.current.needsUpdate = true;
    }
  }, [particles]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={positionsRef}
          attachObject={['attributes', 'position']}
          array={particles}
          count={particles.length / 3}
          itemSize={3}
          onUpdate={(self) => { self.needsUpdate = true }}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        color="white"
        size={0.05}
        sizeAttenuation
        transparent
        opacity={0.75}
      />
    </points>
  );
}

export default function ParticleBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight />
      <Particles count={5000} />
    </Canvas>
  );
}
