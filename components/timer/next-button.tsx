import React from 'react'
import { FaForwardStep } from 'react-icons/fa6'

type NextButtonProps = {
    next: () => void
}

export default function NextButton({ next }: NextButtonProps) {
    return (
        <button
            className='mx-2'
            onClick={next}
        >
            <FaForwardStep size={32} />
        </button>
    )
}
