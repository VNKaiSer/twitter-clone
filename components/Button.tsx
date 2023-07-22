interface ButtonProps {
    label: string;
    secondary?: boolean;
    fullWidth?: boolean;
    large?: boolean;
    onClick: () => void;
    disabled?: boolean;
    outline?: boolean;
}
const Button: React.FC<ButtonProps> = ({
    label,
    secondary,
    fullWidth,
    large,
    onClick,
    disabled,
    outline
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                disabled:opacity-70
                disabled:cursor-not-allowed
                rounded-full
                fond-semibold
                hover:opacity-80
                transition
                border-2
                p-4
                ${fullWidth ? 'w-full' : 'w-fit'}
                ${secondary ? 'bg-white' : 'bg-sky-500'}
                ${secondary ? 'border-black' : 'border-white'}
                ${large ? 'text-xl' : 'text-md'}
                ${outline ? 'bg-transparent' : ''}
                ${outline ? 'text-white' : ''}
                ${outline ? 'bg-white' : ''}
        `}>
            {label}
        </button>);
}

export default Button;