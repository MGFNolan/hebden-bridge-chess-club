interface CloseIconProps {
    className?: string;
    onClick?: () => void;
}

export default function CloseIcon({ className, onClick }: CloseIconProps) {
    return (
        <div className={className} onClick={onClick}>
            <div className="absolute h-0.5 w-6 rotate-45 bg-white" />
            <div className="absolute h-0.5 w-6 -rotate-45 bg-white" />
        </div>
    );
}
