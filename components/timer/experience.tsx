import React, { useRef } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { OrbitControls } from "@react-three/drei"
import { useTimerContext } from "@/context/timer-context"

export default function Experience() {
  const model = useLoader(GLTFLoader, "./models/donut.glb")
  console.log(model)

  const { timerStarted } = useTimerContext()
  const sphereRef = useRef<THREE.Mesh>(null!)
  const donut = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    if (timerStarted) {
      // donut.current.rotation.x += delta
      // donut.current.rotation.y += delta
      donut.current.rotation.z += delta * 3
      // sphereRef.current.rotation.x += delta
    }
  })

  return (
    <>
      <OrbitControls />

      <ambientLight />
      <directionalLight position={[0, 5, 3]} castShadow />

      {/* <mesh ref={sphereRef} position={[0, 0.5, 0]} scale={2} castShadow>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh> */}

      {/* <mesh
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={15}
        receiveShadow
      >
        <planeGeometry />
        <meshStandardMaterial transparent opacity={0.2} color="greenyellow" />
      </mesh> */}

      <primitive
        ref={donut}
        scale={1}
        position={[0, 0, 0]}
        rotation={[1, 0, 0]}
        object={model.scene}
      />
    </>
  )
}
