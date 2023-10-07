import { useTimerContext } from '@/context/timer-context';
import React, { useEffect } from 'react'
import toast from 'react-hot-toast';

type TimerProps = {
    reset: () => void,
    next: () => void
}

export default function Timer({
    reset,
    next
}: TimerProps) {

    const {
        seconds,
        setSeconds,
        timerStarted,
    } = useTimerContext()

    const timeUp = () => {
        toast.success('All done!')
        reset()
        next()
    }

    function formatTime(seconds: number) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');

        return `${formattedMinutes}:${formattedSeconds}`;
    }

    useEffect(() => {
        const timer = setInterval(() => {
            if (timerStarted) {
                setSeconds(prev => --prev)
                if (seconds == 0) {
                    timeUp()
                }
            }
        }, 1000)

        return () => { clearInterval(timer) }
    }, [setSeconds, seconds, timerStarted, timeUp])

    return (
        <h1 className={`text-8xl sm:text-4xl font-extrabold`}>{formatTime(seconds)}</h1>
    )
}
