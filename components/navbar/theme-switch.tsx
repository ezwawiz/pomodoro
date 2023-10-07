'use client'

import React, { useState, useEffect } from 'react'
import { BsFillMoonFill, BsSun } from 'react-icons/bs'

type Theme = 'light' | 'dark'

export default function ThemeSwitch() {

    const [theme, setTheme] = useState<Theme>('light')

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
            window.localStorage.setItem("theme", "dark")
            document.documentElement.classList.add('dark')
        } else {
            setTheme('light')
            window.localStorage.setItem("theme", "light")
            document.documentElement.classList.remove('dark')

        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme | null

        if (localTheme) {
            setTheme(localTheme)

            if (localTheme == 'dark') {
                document.documentElement.classList.add('dark')

            }
        } else if (window.matchMedia('prefers-color-scheme: dark').matches) {
            setTheme('dark')
            document.documentElement.classList.add('dark')
        }
    }, [])

    return (
        <button
            className='bg-violet-600 hover:bg-violet-700 text-white w-[2.5rem] h-[2.5rem] backdrop-blur-[0.5rem] shadow-2xl rounded-xl flex items-center justify-center active:scale-95 transition-all dark:text-black dark:bg-yellow-300 dark:hover:bg-yellow-400'
            onClick={toggleTheme}
        >
            {theme === 'light' ? <BsFillMoonFill /> : <BsSun />}
        </button>
    )
}

