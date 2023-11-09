import { useTimerContext } from '@/context/timer-context'
import React from 'react'
import { FaForwardStep } from 'react-icons/fa6'

export default function ActionBar() {
  const { timerStarted, setTimerStarted, nextDuration, reset } =
    useTimerContext()

  return (
    <div className='flex gap-6 w-screen sm:w-11/12'>
      <button
        className='flex-grow sm:text-2xl bg-rose-500 text-white font-bold px-14 py-6 sm:px-24 sm:py-10 sm:rounded-xl active:translate-y-1.5 active:scale-95'
        onClick={() => setTimerStarted((prev) => !prev)}
      >
        {timerStarted ? 'PAUSE' : 'START'}
      </button>
      {/* <StartButton /> */}
      {/* <NextButton next={nextDuration} /> */}
      <button className='flex-grow mx-2' onClick={nextDuration}>
        <FaForwardStep size={32} />
      </button>
      {/* <ResetButton reset={reset} /> */}
      <button
        className=' flex-grow bg-gray-300 text-black px-12 py-4'
        onClick={reset}
      >
        RESET
      </button>
    </div>
  )
}
