import { li, tr, ul } from "motion/react-client"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import Sideitem2 from "./Sideitem2"
import { useRef } from "react"

interface sideProp {
    type: 'selected' | 'normal'
    startIcon?: any,
    text: string,
    minimize: boolean,
    data1: any
};

const menuCss = {
    selected: 'bg-Bblue-900 py-2 px-4',
    normal: 'py-2 px-4'
}

const defaultCss = ' justify-start flex w-full h-10 items-center text-sm space-x-2'

function Sideitem(props: sideProp) {
    const [open, setOpen] = useState(false)
    return (
        props.data1.map((item) => (
            <li>
                <span onClick={() => setOpen((prev) => !prev)} className="text-white">{">"}</span>
                <span className="text-white">{item.name}</span>
                {item.child ? <Sideitem2 open={open} data1={item.child} /> : null}
            </li>
        ))
    )
}

export default Sideitem
