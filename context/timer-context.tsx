'use client'

import React, { useState, createContext, useContext, useRef } from 'react'

type TimerContextProviderProps = {
  children: React.ReactNode
}

type TimerContextType = {
  WORK: number
  SHORTBREAK: number
  LONGBREAK: number

  durationId: React.MutableRefObject<number>
  workCount: React.MutableRefObject<number>

  seconds: number
  setSeconds: React.Dispatch<React.SetStateAction<number>>
  timerStarted: boolean
  setTimerStarted: React.Dispatch<React.SetStateAction<boolean>>

  reset: () => void
  changeDuration: (id: number) => void
  nextDuration: () => void
}

export const TimerContext = createContext<TimerContextType | null>(null)

export default function TimerContextProvider({
  children,
}: TimerContextProviderProps) {
  const WORK = 1500
  const SHORTBREAK = 300
  const LONGBREAK = 600

  const durationId = useRef<number>(0)
  const workCount = useRef<number>(0)

  const [seconds, setSeconds] = useState(WORK)
  const [timerStarted, setTimerStarted] = useState(false)

  const reset = () => {
    setTimerStarted(false)

    if (durationId.current === 0) {
      setSeconds(WORK)
    } else if (durationId.current === 1) {
      setSeconds(SHORTBREAK)
    } else {
      setSeconds(LONGBREAK)
    }
  }

  const changeDuration = (id: number) => {
    reset()
    durationId.current = id

    if (id === 0) {
      return setSeconds(WORK)
    } else if (id === 1) {
      return setSeconds(SHORTBREAK)
    } else if (id === 2) {
      return setSeconds(LONGBREAK)
    }
  }

  const nextDuration = () => {
    if (durationId.current === 0) {
      ++workCount.current
      console.log('work count is ' + workCount.current)
      if (workCount.current === 4) {
        workCount.current = 0
        durationId.current = 2
      } else {
        durationId.current = 1
      }
    } else if (durationId.current === 1 || durationId.current === 2) {
      durationId.current = 0
    }

    changeDuration(durationId.current)
  }

  return (
    <TimerContext.Provider
      value={{
        WORK,
        SHORTBREAK,
        LONGBREAK,

        durationId,
        workCount,

        seconds,
        setSeconds,
        timerStarted,
        setTimerStarted,

        reset,
        changeDuration,
        nextDuration,
      }}
    >
      {children}
    </TimerContext.Provider>
  )
}

export function useTimerContext() {
  const context = useContext(TimerContext)

  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider'
    )
  }

  return context
}
