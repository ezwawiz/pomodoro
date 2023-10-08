import { useTimerContext } from "@/context/timer-context"
import React from "react"

type TimeButtonProps = {
  name: string
  id: number
  changeDuration: (id: number) => void
}

export default function TimeButton({
  name,
  id,
  changeDuration,
}: TimeButtonProps) {
  const { workCount, timerStarted } = useTimerContext()

  const changeTime = () => {
    changeDuration(id)
    workCount.current = 0
  }

  return (
    <button
      className="flex-grow py-2 sm:rounded-lg bg-gray-300 active:bg-gray-600"
      onClick={changeTime}
    >
      {name}
    </button>
  )
}
