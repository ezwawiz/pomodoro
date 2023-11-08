import React, { useRef } from 'react'
import { RootState, useFrame } from '@react-three/fiber'
import {
  SoftShadows,
  Stage,
  Html,
  useTexture,
  Center,
  OrbitControls,
  Sky,
  Environment,
} from '@react-three/drei'
import { useTimerContext } from '@/context/timer-context'
import Image from 'next/image'
import * as THREE from 'three'

export default function Experience() {
  const { timerStarted, durationId } = useTimerContext()

  const modelColor = ['#ef4444', '#f59e0b', '#6366f1']
  const sceneBgColor = ['#f87171', '#fbbf24', '#818cf8']

  const modelRef = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    if (timerStarted) {
      // if (durationId.current === 0) animateWork(delta)
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

  const animateLongBreak = (delta: number) => {
    // let direction = -delta
    // if (modelRef.current.position.x == -2 || modelRef.current.position.x == 2) {
    //   modelRef.current.position.x += direction
    //   direction *= -1
    // }
  }

  return (
    <>
      <ambientLight intensity={1.6} />
      <directionalLight position={[0, 6, 0]} intensity={5} />
      <color attach='background' args={[sceneBgColor[durationId.current]]} />

      <mesh ref={modelRef} scale={0.5} position={[0, 0.19, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color={modelColor[durationId.current]} />
      </mesh>
    </>
  )
}
