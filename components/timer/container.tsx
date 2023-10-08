import React from "react"
import TimeButton from "./time-button"
import StartButton from "./start-button"
import ResetButton from "./reset-button"
import Timer from "./timer"
import { useTimerContext } from "@/context/timer-context"
import NextButton from "./next-button"
import { Canvas } from "@react-three/fiber"
import Experience from "./experience"

export default function Container() {
  const {
    setTimerStarted,
    durationId,
    workCount,
    setSeconds,
    WORK,
    SHORTBREAK,
    LONGBREAK,
  } = useTimerContext()

  const reset = () => {
    setTimerStarted(false)

    if (durationId.current == 0) {
      setSeconds(WORK)
    } else if (durationId.current == 1) {
      setSeconds(SHORTBREAK)
    } else {
      setSeconds(LONGBREAK)
    }
  }

  const changeDuration = (id: number) => {
    reset()
    durationId.current = id

    if (id == 0) {
      return setSeconds(WORK)
    } else if (id == 1) {
      return setSeconds(SHORTBREAK)
    } else if (id == 2) {
      return setSeconds(LONGBREAK)
    }
  }

  const nextDuration = () => {
    if (durationId.current == 0) {
      ++workCount.current
      console.log("work count is " + workCount.current)
      if (workCount.current == 4) {
        workCount.current = 0
        durationId.current = 2
      } else {
        durationId.current = 1
      }
    } else if (durationId.current == 1 || durationId.current == 2) {
      durationId.current = 0
    }

    changeDuration(durationId.current)
  }

  return (
    <div className="flex flex-col items-center border border-black/10 rounded-xl sm:w-3/5 mx-auto h-screen">
      <div className="flex sm:gap-2 w-full">
        <TimeButton name="Short Break" id={1} changeDuration={changeDuration} />
        <TimeButton name="Work" id={0} changeDuration={changeDuration} />
        <TimeButton name="Long Break" id={2} changeDuration={changeDuration} />
      </div>

      <Canvas
        className=""
        camera={{
          fov: 40,
          near: 0.1,
          far: 200,
          position: [0, 2, 8],
        }}
        shadows
      >
        <Experience />
      </Canvas>

      <Timer reset={reset} next={nextDuration} />

      <div className="flex sm:gap-4">
        <div className="flex">
          <StartButton />
          <NextButton next={nextDuration} />
        </div>
        <ResetButton reset={reset} />
      </div>
    </div>
  )
}
