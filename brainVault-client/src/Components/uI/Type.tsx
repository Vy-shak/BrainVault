import React from 'react'

interface Typet {
    varient: "normal" | "selected"
    text: string,
    logo?: any
    size: 'sm'
}

const constant = {
    varients: {
        normal: 'bg-white text-gray-950 text-sm border border-gray-200 border-4',
        selected: 'bg-blue-500 text-white text-sm',
    },
    Size: {
        sm: 'px-4 py-1'
    }
}

function Type({ text, logo, varient, size }: Typet) {
    return (
        <button className={` ${constant.Size[size]} ${constant.varients[varient]}flex justify-center w-fit h-fit m-0 items-center rounded-full shadow-lg`}>
            {logo}
            <span>{text}</span>
        </button>
    )
}

export default Type
