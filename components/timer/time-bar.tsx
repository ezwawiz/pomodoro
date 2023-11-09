import { useTimerContext } from '@/context/timer-context'
import React from 'react'

export default function TimeBar() {
  const { workCount, changeDuration } = useTimerContext()

  const changeTime = (id: number) => {
    changeDuration(id)
    workCount.current = 0
  }

  return (
    <div className='flex sm:gap-3 sm:mt-28 w-screen sm:w-3/4 text-lg text-white font-bold'>
      <button
        className='flex-grow py-[0.75rem] sm:rounded-lg bg-yellow-500 active:bg-yellow-600 shadow-xl'
        onClick={() => changeTime(1)}
      >
        Short Break
      </button>

      <button
        className='flex-grow py-2 sm:rounded-lg bg-red-500 active:bg-red-600 shadow-xl'
        onClick={() => changeTime(0)}
      >
        Work
      </button>

      <button
        className='flex-grow py-2 sm:rounded-lg bg-indigo-500 active:bg-indigo-600 shadow-xl '
        onClick={() => changeTime(2)}
      >
        Long Break
      </button>
    </div>
  )
}
