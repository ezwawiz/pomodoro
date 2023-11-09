import React, { useRef } from 'react'
import { RootState, useFrame } from '@react-three/fiber'
import {
  MeshReflectorMaterial,
  SoftShadows,
  Stage,
  Html,
  useTexture,
  Center,
  OrbitControls,
  Sky,
  Environment,
  Backdrop,
  BakeShadows,
  Decal,
} from '@react-three/drei'
import { useTimerContext } from '@/context/timer-context'
import Image from 'next/image'
import * as THREE from 'three'

export default function Experience() {
  const { timerStarted, durationId } = useTimerContext()

  const modelColor = ['#ef4444', '#f59e0b', '#6366f1']
  const sceneBgColor = ['#f87171', '#fbbf24', '#818cf8']

  const texture = useTexture('/faces/smile.png')

  const modelRef = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    if (timerStarted) {
      if (durationId.current === 0) animateWork(delta)
      if (durationId.current === 1) animateShortBreak(state)
      if (durationId.current === 2) animateLongBreak(delta)
    }
  })

  const animateShortBreak = (state: RootState) => {
    const scaleSpeed = 0.43

    // Calculate the scale factor based on time
    const scaleFactor =
      0.15 * Math.sin(state.clock.elapsedTime * scaleSpeed) + 0.5

    // Set the new scale for the sphere
    modelRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor)
  }

  const animateWork = (delta: number) => {
    modelRef.current.rotation.y += delta
  }

  const animateLongBreak = (delta: number) => {
    modelRef.current.position.y += Math.cos(delta) * -0.05
  }

  return (
    <>
      <OrbitControls makeDefault />
      <BakeShadows />
      <SoftShadows />
      <ambientLight />
      <directionalLight position={[0, 6, -4]} intensity={1.2} castShadow />
      <rectAreaLight
        args={['white', 3]}
        intensity={5}
        width={9}
        height={9}
        position={[0, 9, 1]}
        castShadow
      />

      {/* <color attach='background' args={[sceneBgColor[durationId.current]]} /> */}

      <mesh ref={modelRef} scale={0.5} position={[0, 0.4, -4]} castShadow>
        <sphereGeometry />
        <meshStandardMaterial color={modelColor[durationId.current]} />
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[0, 0, -0.9]} // Position of the decal
          rotation={[0, 0, 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[0.6, 0.6, 0.6]} // Scale of the decal
        >
          <meshBasicMaterial
            map={texture}
            polygonOffset
            polygonOffsetFactor={-1}
            transparent
          />
        </Decal>
      </mesh>
      <Backdrop
        scale={[15, 5, 5]}
        position={[0, -0.5, -2]}
        rotation-y={Math.PI}
        floor={1}
        receiveShadow
      >
        <meshPhysicalMaterial
          roughness={1}
          color={sceneBgColor[durationId.current]}
        />
      </Backdrop>
    </>
  )
}
