'use client'

import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Float } from '@react-three/drei'
import * as THREE from 'three'

interface JellyfishProps {
  position: [number, number, number]
  slideDirection?: 'left' | 'right'
  speed?: number
  mousePosition?: { x: number; y: number }
  isMouseDown?: boolean
  scale?: number
}

function JellyfishGeometry({ 
  position, 
  slideDirection = 'right', 
  speed = 1, 
  mousePosition = { x: 0, y: 0 }, 
  isMouseDown = false,
  scale = 1
}: JellyfishProps) {
  const meshRef = useRef<THREE.Group>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const [slideOffset, setSlideOffset] = useState(0)

  useFrame((state) => {
    if (meshRef.current) {
      // Enhanced floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5
      
      // Sliding animation with mouse down control
      let slideSpeed = slideDirection === 'right' ? 0.5 : -0.5
      if (isMouseDown) {
        slideSpeed = 3.0 // Even faster movement when mouse is down
      }
      
      setSlideOffset((prev) => {
        const newOffset = prev + slideSpeed * 0.01
        return newOffset > 4 ? -4 : newOffset < -4 ? 4 : newOffset
      })
      
      meshRef.current.position.x = position[0] + slideOffset
      
      // Enhanced mouse interaction
      const mouseInfluence = 0.15
      meshRef.current.position.x += mousePosition.x * mouseInfluence
      meshRef.current.position.y += mousePosition.y * mouseInfluence
      
      // Complex rotation
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.3) * 0.1
      
      // Pulsing glow effect
      if (glowRef.current) {
        glowRef.current.material = new THREE.MeshStandardMaterial({
          color: '#66ffff',
          emissive: '#00ffff',
          emissiveIntensity: 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.3,
          transparent: true,
          opacity: 0.4
        })
      }
      
      // Enhanced tentacle wave animation
      meshRef.current.children.forEach((child, index) => {
        if (child instanceof THREE.Mesh && index > 1) {
          child.rotation.x = Math.sin(state.clock.elapsedTime * speed + index * 0.5) * 0.3
          child.rotation.z = Math.cos(state.clock.elapsedTime * speed + index * 0.3) * 0.1
        }
      })
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef} position={position} scale={[scale, scale, scale]}>
        {/* Main jellyfish body with enhanced geometry */}
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[0.8, 64, 32]} />
          <meshStandardMaterial 
            color="#00d4ff" 
            emissive="#0099cc" 
            emissiveIntensity={0.4}
            transparent 
            opacity={0.8}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
        
        {/* Enhanced inner glow */}
        <mesh ref={glowRef} scale={[0.7, 0.7, 0.7]}>
          <sphereGeometry args={[0.8, 32, 16]} />
          <meshStandardMaterial 
            color="#66ffff" 
            emissive="#00ffff" 
            emissiveIntensity={0.5}
            transparent 
            opacity={0.4}
          />
        </mesh>
        
        {/* Additional glow layers */}
        <mesh scale={[0.9, 0.9, 0.9]}>
          <sphereGeometry args={[0.85, 32, 16]} />
          <meshStandardMaterial 
            color="#00aaff" 
            emissive="#0066cc" 
            emissiveIntensity={0.2}
            transparent 
            opacity={0.3}
          />
        </mesh>
        
        {/* Enhanced tentacles with more detail */}
        {Array.from({ length: 12 }, (_, i) => (
          <group key={i} position={[
            Math.cos((i / 12) * Math.PI * 2) * 0.6,
            -0.8,
            Math.sin((i / 12) * Math.PI * 2) * 0.6
          ]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.02, 0.08, 2, 8]} />
              <meshStandardMaterial 
                color="#00aaff" 
                emissive="#0066cc" 
                emissiveIntensity={0.3}
                transparent 
                opacity={0.7}
              />
            </mesh>
            <mesh position={[0, -1, 0]}>
              <cylinderGeometry args={[0.01, 0.04, 1.5, 6]} />
              <meshStandardMaterial 
                color="#0088cc" 
                emissive="#004466" 
                emissiveIntensity={0.2}
                transparent 
                opacity={0.6}
              />
            </mesh>
          </group>
        ))}
      </group>
    </Float>
  )
}

function Scene({ mousePosition, isMouseDown }: { mousePosition: { x: number; y: number }; isMouseDown: boolean }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        maxPolarAngle={Math.PI * 0.8}
        minPolarAngle={Math.PI * 0.2}
        enableRotate={false}
      />
      
      {/* Enhanced jellyfish with different sizes and behaviors */}
      <JellyfishGeometry position={[0, 0, 0]} slideDirection="right" speed={1} mousePosition={mousePosition} isMouseDown={isMouseDown} scale={1.2} />
      <JellyfishGeometry position={[-3, 1, -2]} slideDirection="left" speed={0.8} mousePosition={mousePosition} isMouseDown={isMouseDown} scale={0.8} />
      <JellyfishGeometry position={[3, -0.5, -1]} slideDirection="right" speed={1.2} mousePosition={mousePosition} isMouseDown={isMouseDown} scale={1} />
      <JellyfishGeometry position={[-1.5, -1, 1]} slideDirection="left" speed={0.9} mousePosition={mousePosition} isMouseDown={isMouseDown} scale={0.6} />
      <JellyfishGeometry position={[2, 2, -3]} slideDirection="right" speed={1.1} mousePosition={mousePosition} isMouseDown={isMouseDown} scale={0.7} />
      
      {/* Enhanced lighting setup */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#0099ff" />
      <pointLight position={[0, 5, -5]} intensity={1} color="#00ccff" />
      <spotLight
        position={[0, 5, 5]}
        angle={0.4}
        penumbra={1}
        intensity={1.2}
        color="#00ccff"
        castShadow
      />
    </>
  )
}

export default function EnhancedJellyfish() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseDown, setIsMouseDown] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      setMousePosition({ x, y })
    }

    const handleMouseDown = () => {
      setIsMouseDown(true)
    }

    const handleMouseUp = () => {
      setIsMouseDown(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  if (!mounted) {
    return (
      <div className="w-full h-full bg-gradient-to-b from-blue-950 to-black flex items-center justify-center">
        <div className="text-cyan-400 text-xl">Loading Enhanced 3D Scene...</div>
      </div>
    )
  }

  return (
    <div className="w-full h-full">
      <Canvas shadows>
        <Scene mousePosition={mousePosition} isMouseDown={isMouseDown} />
      </Canvas>
    </div>
  )
}
