import React from 'react'
import { FaUser, FaGear, FaChartLine } from 'react-icons/fa6'
import ThemeSwitch from './theme-switch'

export default function Navbar() {
  return (
    <header className='hidden sm:block sm:fixed top-0 right-0 bg-transparent z-10'>
      <nav className='justify-end flex mt-[0.5rem] mr-[0.5rem]'>
        <ul className='flex gap-2'>
          {/* <li className='bg-neutral-300 w-[2.5rem] h-[2.5rem] bg-opacity-80 backdrop-blur-[0.5rem] shadow-2xl rounded-xl flex items-center justify-center active:scale-105 transition-all cursor-pointer'>
            {' '}
            <FaUser />{' '}
          </li> */}

          <li className='bg-neutral-100/10  w-[2.5rem] h-[2.5rem] rounded-xl flex items-center justify-center active:scale-105 transition-all cursor-pointer border border-neutral-400/40 shadow-xl'>
            {' '}
            <FaUser />{' '}
          </li>

          <li className='bg-neutral-100/10 w-[2.5rem] h-[2.5rem] rounded-xl flex items-center justify-center active:scale-105 transition-all cursor-pointer border border-neutral-400/40 shadow-xl'>
            {' '}
            <FaChartLine />{' '}
          </li>

          <li className='bg-neutral-100/10 w-[2.5rem] h-[2.5rem] rounded-xl flex items-center justify-center active:scale-105 transition-all cursor-pointer border border-neutral-400/40 shadow-xl'>
            {' '}
            <FaGear />{' '}
          </li>

          <ThemeSwitch />
        </ul>
      </nav>
    </header>
  )
}
