
interface buttonProps {
    variant: 'primary' | 'secondary' | 'tertiary';
    size: 'sm' | 'md' | 'lg';
    defaultCss?: string,
    text: string;
    startIcon?: any;
    endIcon?: any;
    handleClick?: () => void;
};


const constants = {
    variant: {
        primary: 'bg-Bblue500  font-normal text-white',
        secondary: 'bg-Bblue500  text-blue-800 opacity-80 font-normal',
        tertiary: 'bg-gray-50 w-fit focus:outline-0 outline outline-blue-100 outline-1 text-gray-900 text-sm '
    },
    size: {
        sm: 'px-4 py-2 text-sm ',
        md: 'px-6 py-4 text-base',
        lg: 'px-6 py-3 text-lg'
    },
}



const Button = (props: buttonProps) => {

    return (
        <>
            <button onClick={props.handleClick} className={` rounded-full ${props.defaultCss} ${constants.variant[props.variant]} ${constants.size[props.size]}`}>
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
