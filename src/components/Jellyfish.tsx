'use client'

import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

interface JellyfishProps {
  position: [number, number, number]
  slideDirection?: 'left' | 'right'
  speed?: number
}

function JellyfishGeometry({ position, slideDirection = 'right', speed = 1 }: JellyfishProps) {
  const meshRef = useRef<THREE.Group>(null)
  const [slideOffset, setSlideOffset] = useState(0)

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3
      
      // Sliding animation
      const slideSpeed = slideDirection === 'right' ? 0.5 : -0.5
      setSlideOffset((prev) => {
        const newOffset = prev + slideSpeed * 0.01
        return newOffset > 3 ? -3 : newOffset < -3 ? 3 : newOffset
      })
      
      meshRef.current.position.x = position[0] + slideOffset
      
      // Gentle rotation
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      
      // Tentacle wave animation
      meshRef.current.children.forEach((child, index) => {
        if (child instanceof THREE.Mesh && index > 0) {
          child.rotation.x = Math.sin(state.clock.elapsedTime * speed + index) * 0.2
        }
      })
    }
  })

  return (
    <group ref={meshRef} position={position}>
      {/* Main jellyfish body */}
      <mesh>
        <sphereGeometry args={[0.8, 32, 16]} />
        <meshStandardMaterial 
          color="#00d4ff" 
          emissive="#0099cc" 
          emissiveIntensity={0.3}
          transparent 
          opacity={0.7}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      
      {/* Inner glow */}
      <mesh scale={[0.6, 0.6, 0.6]}>
        <sphereGeometry args={[0.8, 32, 16]} />
        <meshStandardMaterial 
          color="#66ffff" 
          emissive="#00ffff" 
          emissiveIntensity={0.5}
          transparent 
          opacity={0.4}
        />
      </mesh>
      
      {/* Tentacles */}
      {Array.from({ length: 8 }, (_, i) => (
        <mesh key={i} position={[
          Math.cos((i / 8) * Math.PI * 2) * 0.6,
          -0.8,
          Math.sin((i / 8) * Math.PI * 2) * 0.6
        ]}>
          <cylinderGeometry args={[0.02, 0.08, 1.5, 8]} />
          <meshStandardMaterial 
            color="#00aaff" 
            emissive="#0066cc" 
            emissiveIntensity={0.2}
            transparent 
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  )
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        maxPolarAngle={Math.PI * 0.8}
        minPolarAngle={Math.PI * 0.2}
      />
      
      {/* Multiple jellyfish with different positions and behaviors */}
      <JellyfishGeometry position={[0, 0, 0]} slideDirection="right" speed={1} />
      <JellyfishGeometry position={[-2, 1, -2]} slideDirection="left" speed={0.8} />
      <JellyfishGeometry position={[2, -0.5, -1]} slideDirection="right" speed={1.2} />
      
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0099ff" />
      <spotLight
        position={[0, 5, 5]}
        angle={0.3}
        penumbra={1}
        intensity={0.8}
        color="#00ccff"
      />
    </>
  )
}

export default function JellyfishScene() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-full bg-gradient-to-b from-blue-950 to-black flex items-center justify-center">
        <div className="text-cyan-400 text-xl">Loading 3D Scene...</div>
      </div>
    )
  }

  return (
    <div className="w-full h-full">
      <Canvas shadows>
        <Scene />
      </Canvas>
    </div>
  )
}
