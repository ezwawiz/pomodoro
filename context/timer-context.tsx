"use client"

import React, { useState, createContext, useContext, useRef } from "react"

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
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    )
  }

  return context
}
