import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, OrbitControls, Stars, TorusKnot, Icosahedron, Dodecahedron, Octahedron } from '@react-three/drei';
import * as THREE from 'three';
import { useLocation } from 'react-router-dom';

const deptConfigs: Record<string, { color: string, secondaryColor: string }> = {
  'aids': { color: '#10b981', secondaryColor: '#34d399' },
  'civil': { color: '#f97316', secondaryColor: '#fb923c' },
  'computer': { color: '#3b82f6', secondaryColor: '#60a5fa' },
  'etc': { color: '#eab308', secondaryColor: '#facc15' },
  'mech': { color: '#ef4444', secondaryColor: '#f87171' },
  'fe': { color: '#ec4899', secondaryColor: '#f472b6' },
  'mba': { color: '#a855f7', secondaryColor: '#c084fc' },
  'mca': { color: '#6366f1', secondaryColor: '#818cf8' },
  'default': { color: '#10b981', secondaryColor: '#4f46e5' }
};

function TechElement({ position, color, speed = 1 }: { position: [number, number, number], color: string, speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5 * speed;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={color} wireframe transparent opacity={0.3} />
      </mesh>
    </Float>
  );
}

function DepartmentGeometry({ deptId, color }: { deptId: string, color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  const getGeometry = () => {
    switch (deptId) {
      case 'aids': return <TorusKnot args={[4, 1.2, 128, 32]} />;
      case 'computer': return <Icosahedron args={[5, 1]} />;
      case 'mech': return <Dodecahedron args={[5, 0]} />;
      case 'civil': return <boxGeometry args={[6, 6, 6]} />;
      case 'etc': return <Octahedron args={[5, 0]} />;
      case 'fe': return <Sphere args={[5, 32, 32]} />;
      case 'mba': return <TorusKnot args={[4, 0.8, 64, 16, 2, 3]} />;
      case 'mca': return <Icosahedron args={[5, 0]} />;
      default: return <Sphere args={[5, 32, 32]} />;
    }
  };

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        {getGeometry()}
        <MeshDistortMaterial
          color={color}
          speed={2}
          distort={0.4}
          radius={1}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function Particles({ count = 1000, color = "#10b981" }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 100;
      p[i * 3 + 1] = (Math.random() - 0.5) * 100;
      p[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color={color}
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function BackgroundStructure({ color }: { color: string }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      ref.current.rotation.z = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      <Dodecahedron args={[25, 0]}>
        <meshStandardMaterial color={color} wireframe transparent opacity={0.05} />
      </Dodecahedron>
      <Icosahedron args={[30, 1]}>
        <meshStandardMaterial color={color} wireframe transparent opacity={0.03} />
      </Icosahedron>
    </group>
  );
}

function FloatingGrid({ color }: { color: string }) {
  const ref = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.z = (state.clock.getElapsedTime() * 2) % 2;
    }
  });

  return (
    <gridHelper
      ref={ref}
      args={[100, 50, color, 0x111111]}
      position={[0, -12, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export default function ThreeScene() {
  const mouse = useRef({ x: 0, y: 0 });
  const location = useLocation();
  const deptId = location.pathname.startsWith('/department/')
    ? location.pathname.split('/').pop() || 'default'
    : 'default';

  const [accentColor, setAccentColor] = React.useState('#ef4444');

  useEffect(() => {
    const updateColor = () => {
      const color = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();
      if (color) setAccentColor(color);
    };

    updateColor();

    const observer = new MutationObserver(updateColor);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const config = useMemo(() => {
    const baseConfig = deptConfigs[deptId] || deptConfigs.default;
    if (deptId === 'default') {
      return { ...baseConfig, color: accentColor, secondaryColor: accentColor };
    }
    return baseConfig;
  }, [deptId, accentColor]);

  return (
    <div className="fixed inset-0 -z-10 bg-[#050505]">
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
        <SceneContent mouse={mouse} config={config} deptId={deptId} />
      </Canvas>
    </div>
  );
}

function SceneContent({ mouse, config, deptId }: {
  mouse: React.MutableRefObject<{ x: number, y: number }>,
  config: typeof deptConfigs.default,
  deptId: string
}) {
  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouse.current.x * 2, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, mouse.current.y * 2, 0.05);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <color attach="background" args={['#020202']} />
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={2} color={config.color} />
      <pointLight position={[-10, -10, -10]} intensity={1} color={config.secondaryColor} />
      <spotLight position={[0, 20, 0]} angle={0.3} penumbra={1} intensity={2} color={config.color} />
      
      {deptId === 'default' ? null : (
        <DepartmentGeometry deptId={deptId} color={config.color} />
      )}
      
      <BackgroundStructure color={config.color} />
      <Particles count={4000} color={config.color} />
      <Stars radius={100} depth={50} count={7000} factor={6} saturation={0} fade speed={1.5} />
      <FloatingGrid color={config.color} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

