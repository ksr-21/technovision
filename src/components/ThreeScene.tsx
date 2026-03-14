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
      p[i * 3] = (Math.random() - 0.5) * 50;
      p[i * 3 + 1] = (Math.random() - 0.5) * 50;
      p[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
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
      <pointsMaterial size={0.05} color={color} transparent opacity={0.4} />
    </points>
  );
}

function FloatingGrid({ color }: { color: string }) {
  return (
    <gridHelper args={[100, 50, color, 0x111111]} position={[0, -10, 0]} rotation={[Math.PI / 6, 0, 0]} />
  );
}

export default function ThreeScene() {
  const mouse = useRef({ x: 0, y: 0 });
  const location = useLocation();
  const deptId = location.pathname.startsWith('/department/')
    ? location.pathname.split('/').pop() || 'default'
    : 'default';

  const config = deptConfigs[deptId] || deptConfigs.default;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      <color attach="background" args={['#050505']} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color={config.color} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color={config.secondaryColor} />
      
      {deptId === 'default' ? (
        <>
          <TechElement position={[-10, 5, -5]} color="#4f46e5" speed={0.5} />
          <TechElement position={[10, -5, -2]} color="#10b981" speed={0.8} />
          <TechElement position={[0, 8, -10]} color="#f59e0b" speed={0.3} />
        </>
      ) : (
        <DepartmentGeometry deptId={deptId} color={config.color} />
      )}
      
      <Particles count={2000} color={config.color} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <FloatingGrid color={config.color} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

