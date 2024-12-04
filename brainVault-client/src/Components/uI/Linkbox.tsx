import React, { ReactElement } from 'react'
import Links from '../../Icons/Sidebar/Links';
import Copy from './Copy';


interface Linkboxt {
    linksIcon: ReactElement,
    buttonIcon: ReactElement
    buttonText: string,
    Link: string
}

function Linkbox({ linksIcon, buttonIcon, buttonText, Link }: Linkboxt) {
    return (
        <div className="flex items-center justify-center max-w-sm mx-auto">
            <div className="relative items-center justify-center w-full">
                <input type="text" id="simple-search" className="bg-gray-50 focus:outline-0 outline outline-blue-100 outline-1 text-gray-700 text-sm rounded-lg focus:  block w-full ps-10 p-2.5" placeholder={`${buttonText}`} required />
            </div>
            <button className="p-2.5  space-x-2 ms-2 text-sm font-medium text-white flex justify-center items-center bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-800">
                {buttonIcon}
                <span >{buttonText}</span>
            </button>
        </div>

    )
}

export default Linkbox
