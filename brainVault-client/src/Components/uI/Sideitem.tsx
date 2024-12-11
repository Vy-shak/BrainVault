import { useState } from "react"
import { NavLink } from "react-router-dom"

interface sideProp {
    type: 'selected' | 'normal'
    startIcon?: any,
    text: string,
    minimize: boolean
};

const menuCss = {
    selected: 'bg-Bblue-900 py-2 px-4',
    normal: 'py-2 px-4'
}

const defaultCss = ' justify-start flex w-full h-10 items-center text-sm space-x-2'

function Sideitem(props: sideProp) {

    return (
        <NavLink to={`/home/${props.text}`} className={({ isActive }) => isActive ? `${defaultCss} ${menuCss[props.type]} bg-Bblue500 text-white` : `${defaultCss} ${menuCss[props.type]} hover:bg-gray-300`}>
            <div className={`${defaultCss}`}>
                <div>
                    {props.startIcon}
                </div>
                <span>{`${props.minimize ? "" : props.text}`}</span>
            </div>
        </NavLink>
    )
}

export default Sideitem
