import { useTimerContext } from '@/context/timer-context'
import React from 'react'

export default function TimeBar() {
  const { workCount, changeDuration } = useTimerContext()

  const changeTime = (id: number) => {
    changeDuration(id)
    workCount.current = 0
  }

  return (
    <div className='flex sm:gap-2 sm:mt-28 w-full'>
      <button
        className='flex-grow py-2 sm:rounded-lg bg-yellow-500 active:bg-yellow-500 shadow-xl text-white font-bold'
        onClick={() => changeTime(1)}
      >
        Short Break
      </button>

      <button
        className='flex-grow py-2 sm:rounded-lg bg-red-500 active:bg-red-600 shadow-xl text-white font-bold'
        onClick={() => changeTime(0)}
      >
        Work
      </button>

      <button
        className='flex-grow py-2 sm:rounded-lg bg-indigo-500 active:bg-indigo-600 shadow-xl text-white font-bold'
        onClick={() => changeTime(2)}
      >
        Long Break
      </button>
    </div>
  )
}
