import React from 'react'

type ResetButtonProps = {
    reset: () => void
}

export default function ResetButton({ reset }: ResetButtonProps) {

    return (
        <button
            className='bg-gray-300 text-black ml-2 px-12 py-4'
            onClick={reset}
        >
            RESET
        </button>
    )
}
