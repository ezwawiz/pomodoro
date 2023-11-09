import React from 'react'
import Timer from './timer'
import { Canvas } from '@react-three/fiber'
import Experience from './experience'
import TimeBar from './time-bar'
import ActionBar from './action-bar'

const CanvasBackground = () => {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        // zIndex: 500,
      }}
      camera={{
        fov: 40,
        near: 0.1,
        far: 200,
        position: [0, 0.5, -10],
      }}
      shadows
    >
      {/* <color attach='background' args={['blue']} /> */}
      <Experience />
    </Canvas>
  )
}

export default function Container() {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <CanvasBackground />
      <div className='w-full'>
        <div className='flex flex-col h-screen justify-between items-center w-full'>
          <TimeBar />
          <div className='flex flex-col w-full justify-center items-center sm:mb-16'>
            <Timer />
            <ActionBar />
          </div>
        </div>
      </div>
    </div>
  )
}
