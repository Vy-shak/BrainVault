import React from 'react'


interface border {
    border: 'left' | 'right' | 'top' | 'bottom',
}

const edge = {
    left: 'border-solid border-l-2 border-gray-50',
    right: 'border-solid border-r-2 border-gray-50',
    top: 'border-solid border-t-2 border-gray-50',
    bottom: 'border-solid border-b-2 border-gray-50',
}



function Margin({ border }: border) {
    return (
        <div className={`${edge[border]} bg-black h-full w-11`}>
        </div>
    )
}

export default Margin
