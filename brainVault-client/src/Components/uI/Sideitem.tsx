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

const defaultCss = 'flex justify-start w-full items-center text-black text-sm space-x-2'

function Sideitem(props: sideProp) {
    const [isActive, setIsactive] = useState(false);

    const handleActive = () => {
        setIsactive(true)
    }

    return (
        <div onClick={handleActive} className={`${isActive ? "bg-Bblue500 text-white" : null} ${defaultCss} ${menuCss[props.type]} ${defaultCss}`}>
            <div>
                {props.startIcon}
            </div>
            <span>{`${props.minimize ? props.text : ""}`}</span>
        </div>
    )
}

export default Sideitem
