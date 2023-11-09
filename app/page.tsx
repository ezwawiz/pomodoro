'use client'

import Container from '@/components/timer/container'
// import { useTimerContext } from '@/context/timer-context'

export default function Home() {
  // const { seconds } = useTimerContext()

  return (
    <main className='relative h-screen w-screen'>
      <Container />
    </main>
  )
}
