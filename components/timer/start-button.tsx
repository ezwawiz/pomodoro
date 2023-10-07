import { useTimerContext } from '@/context/timer-context'
import React from 'react'

export default function StartButton() {
    const { timerStarted, setTimerStarted } = useTimerContext()

    return (
        <button
            className='bg-rose-500 text-white font-bold px-16 py-6 rounded-xl'
            onClick={() => setTimerStarted(prev => !prev)}
        >
            {timerStarted ? "PAUSE" : "START"}
        </button>
    )
}
