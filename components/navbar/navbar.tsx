import React from "react"
import { FaUser, FaGear, FaChartLine } from "react-icons/fa6"
import ThemeSwitch from "./theme-switch"

export default function Navbar() {
  return (
    <nav className=" justify-end flex mt-4 mr-4 mb-4 sm:mb-8">
      <ul className="flex gap-3">
        <li className="bg-neutral-300 w-[2.5rem] h-[2.5rem] bg-opacity-80 backdrop-blur-[0.5rem] shadow-2xl rounded-xl flex items-center justify-center  active:scale-105 transition-all cursor-pointer">
          {" "}
          <FaUser />{" "}
        </li>
        <li className="bg-neutral-300 w-[2.5rem] h-[2.5rem] bg-opacity-80 backdrop-blur-[0.5rem] shadow-2xl rounded-xl flex items-center justify-center active:scale-105 transition-all cursor-pointer">
          {" "}
          <FaChartLine />{" "}
        </li>
        <li className="bg-neutral-300 w-[2.5rem] h-[2.5rem] bg-opacity-80 backdrop-blur-[0.5rem] shadow-2xl rounded-xl flex items-center justify-center  active:scale-105 transition-all cursor-pointer">
          {" "}
          <FaGear />{" "}
        </li>
        <ThemeSwitch />
      </ul>
    </nav>
  )
}
