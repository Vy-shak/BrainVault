import React from 'react'

interface Typet {
    varient: "normal" | "selected"
    text: string,
    logo?: any
    size: 'sm'
}

const constant = {
    varients: {
        normal: 'bg-white text-gray-950 text-sm',
        selected: 'bg-blue-500 text-white text-sm',
    },
    Size: {
        sm: 'px-4 y-2'
    }
}

function Type({ text, logo, varient, size }: Typet) {
    return (
        <button className={` ${constant.Size[size]} ${constant.varients[varient]}flex justify-center items-center bg-white rounded-full`}>
            {logo}
            <span>{text}</span>
        </button>
    )
}

export default Type
