
interface buttonProps {
    variant: 'primary' | 'secondary' | 'tertiary';
    size: 'sm' | 'md' | 'lg' | 'full';
    defaultCss?: string,
    text: string;
    startIcon?: any;
    endIcon?: any;
    handleClick?: () => void;
};


const constants = {
    variant: {
        primary: 'bg-Bgreen-700  font-normal text-white hover:bg-Bgreen-900',
        secondary: 'bg-Bblue500  text-blue-800 opacity-80 font-normal',
        tertiary: 'bg-gray-50 w-fit focus:outline-0 outline outline-blue-100 outline-1 text-gray-900 text-sm '
    },
    size: {
        sm: 'px-2 py-2 text-sm w-fit ',
        md: 'px-6 py-4 text-base w-fit',
        lg: 'px-6 py-3 text-lg w-fit',
        full: 'text-sm w-full h-10'
    },
}



const Button = (props: buttonProps) => {

    return (
        <>
            <button onClick={props.handleClick} className={` rounded-md   ${props.defaultCss} ${constants.variant[props.variant]} ${constants.size[props.size]}`}>
                <div className="flex justify-center items-center leading-3">
                    {props.startIcon}
                    <span>{props.text}</span>
                    {props.endIcon}
                </div>
            </button>
        </>
    )
}

export default Button
