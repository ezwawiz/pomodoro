import { useTimerContext } from '@/context/timer-context'
import React, { useCallback, useEffect } from 'react'

export default function Timer() {
  const { seconds, setSeconds, timerStarted, nextDuration, reset } =
    useTimerContext()

  const timeUp = useCallback(() => {
    reset()
    nextDuration()
  }, [reset, nextDuration])

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(remainingSeconds).padStart(2, '0')

    return `${formattedMinutes}:${formattedSeconds}`
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (timerStarted) {
        setSeconds((prev) => --prev)
        if (seconds == 0) {
          timeUp()
        }
      }
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [setSeconds, seconds, timerStarted, timeUp])

  return (
    <h1 className='text-center text-5xl sm:text-7xl font-extrabold'>
      {formatTime(seconds)}
    </h1>
  )
}
