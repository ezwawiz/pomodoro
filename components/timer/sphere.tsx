import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTimerContext } from '@/context/timer-context'

export default function Sphere() {

    const { timerStarted } = useTimerContext()
    const sphereRef = useRef<THREE.Mesh>(null!)

    useFrame((state, delta) => {

        if (timerStarted) {
            sphereRef.current.rotation.y += delta


        }


    })

    return (
        <mesh ref={sphereRef} scale={3}>
            <boxGeometry />
            <meshMatcapMaterial color="hotpink" />

        </mesh>
    )
}
