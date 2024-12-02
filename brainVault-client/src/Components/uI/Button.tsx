
interface buttonProps {
    variant: 'primary' | 'secondary';
    size: 'sm' | 'md' | 'lg';
    defaultCss?: string,
    text: string;
    startIcon?: any;
    endIcon?: any;
    onclick?: () => void;
};


const constants = {
    variant: {
        primary: 'bg-Bblue500 rounded-md font-normal text-white',
        secondary: 'bg-Bblue500 rounded-md text-blue-800 opacity-80 font-normal'
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
            <button className={`${props.defaultCss} ${constants.variant[props.variant]} ${constants.size[props.size]}`}>
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
