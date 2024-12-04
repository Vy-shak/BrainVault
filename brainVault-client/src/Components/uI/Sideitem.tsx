import { useState } from "react"

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

const defaultCss = ' justify-start flex w-full h-10 items-center text-black text-sm space-x-2'

function Sideitem(props: sideProp) {
    const [isActive, setIsactive] = useState(false);

    const handleActive = () => {
        setIsactive(true)
    }

    return (
        <div onClick={handleActive} className={`${isActive ? "bg-Bblue500 text-white" : "hover:bg-gray-300"} ${defaultCss} ${menuCss[props.type]} ${defaultCss}`}>
            <div>
                {props.startIcon}
            </ div>
            <span>{`${props.minimize ? "" : props.text}`}</span>
        </div>
    )
}

export default Sideitem
