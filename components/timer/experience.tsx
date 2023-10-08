import React, { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { SoftShadows, OrbitControls, BakeShadows } from "@react-three/drei"
import { useTimerContext } from "@/context/timer-context"

export default function Experience() {
  const { timerStarted } = useTimerContext()
  const sphereRef = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    if (timerStarted) {
      sphereRef.current.rotation.y += delta
      // sphereRef.current.rotation.x += delta
    }
  })

  return (
    <>
      <BakeShadows />
      <SoftShadows />

      <OrbitControls />

      <ambientLight />
      <directionalLight position={[0, 4, 0]} castShadow />

      <mesh ref={sphereRef} position={[0, 0.5, 0]} scale={2} castShadow>
        <boxGeometry />
        <meshStandardMaterial color="#0ea5e9" />
      </mesh>

      <mesh
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={15}
        receiveShadow
      >
        <planeGeometry />
        <meshStandardMaterial transparent opacity={0.2} color="greenyellow" />
      </mesh>
    </>
  )
}
