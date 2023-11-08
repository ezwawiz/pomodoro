'use client'

import Container from '@/components/timer/container'
import Experience from '@/components/timer/experience'
import ResetButton from '@/components/timer/reset-button'
import StartButton from '@/components/timer/start-button'
import TimeButton from '@/components/timer/time-button'
import Timer from '@/components/timer/timer'
import { useTimerContext } from '@/context/timer-context'
import { Canvas } from '@react-three/fiber'
import Image from 'next/image'

export default function Home() {
  const { seconds } = useTimerContext()

  return (
    <main className='relative h-screen w-screen'>
      <Container />
    </main>
  )
}
