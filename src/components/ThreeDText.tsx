'use client'

import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function JellyfishText() {
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      
      if (hovered) {
        groupRef.current.scale.setScalar(1.1)
      } else {
        groupRef.current.scale.setScalar(1)
      }
    }
  })

  return (
    <group 
      ref={groupRef} 
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Create 3D text-like blocks for each letter */}
      {['J', 'E', 'L', 'L', 'Y', 'F', 'I', 'S', 'H'].map((letter, index) => (
        <mesh key={index} position={[(index - 4) * 0.8, 0, 0]}>
          <boxGeometry args={[0.6, 0.8, 0.3]} />
          <meshStandardMaterial
            color="#00d4ff"
            emissive="#0099cc"
            emissiveIntensity={0.4}
            metalness={0.8}
            roughness={0.2}
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
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0099ff" />
      <spotLight
        position={[0, 5, 5]}
        angle={0.3}
        penumbra={1}
        intensity={0.8}
        color="#00ccff"
      />
      <JellyfishText />
    </>
  )
}

export default function ThreeDText() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="text-6xl md:text-8xl font-bold text-cyan-400 tracking-wider float-animation">
        JELLYFISH
      </div>
    )
  }

  return (
    <div className="w-full h-32 md:h-48">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  )
}
