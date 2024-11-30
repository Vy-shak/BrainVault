

interface sideProp {
    type: 'selected' | 'normal'
    startIcon?: any,
    text: string
};

const menuCss = {
    selected: 'bg-Bblue-900 py-2 px-4',
    normal: 'py-2 px-4'
}

const defaultCss = 'flex justify-center items-center'

function Sideitem(props: sideProp) {
    return (
        <div className={`${defaultCss} ${menuCss[props.type]} text-black text-sm`}>
            <div>
                {props.startIcon}
            </div>
            <span>{props.text}</span>
        </div>
    )
}

export default Sideitem
