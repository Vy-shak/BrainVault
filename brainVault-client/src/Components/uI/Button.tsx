



interface buttonProps {
    variant: 'primary' | 'secondary';
    size: 'sm' | 'md' | 'lg';
    text: string;
    startIcon?: any;
    endIcon?: any;
    onclick?: () => void;
};


const constants = {
    variant: {
        primary: 'bg-blue-700 rounded-md',
        secondary: 'bg-blue-700 rounded-md text-blue-800 opacity-65'
    },
    size: {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg'
    },
}




const Button = (props: buttonProps) => {

    return (
        <>
            <button className={`${constants.variant[props.variant]} ${constants.size[props.size]}`}>{props.text}</button>
        </>
    )
}

export default Button
