import { useTimerContext } from "@/context/timer-context"
import React from "react"

export default function StartButton() {
  const { timerStarted, setTimerStarted } = useTimerContext()

  return (
    <button
      className=" sm:text-2xl bg-rose-500 text-white font-bold px-14 py-6 sm:px-24 sm:py-10 sm:rounded-xl active:translate-y-1.5 active:scale-95"
      onClick={() => setTimerStarted((prev) => !prev)}
    >
      {timerStarted ? "PAUSE" : "START"}
    </button>
  )
}
