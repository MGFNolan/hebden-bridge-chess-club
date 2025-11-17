interface CloseIconProps {
    className?: string;
    onClick?: () => void;
}

export default function CloseIcon({ className, onClick }: CloseIconProps) {
    return (
        <div
            className="z-10 flex cursor-pointer items-center justify-center"
            onClick={onClick}
        >
            <div className="relative h-6 w-6">
                <div className="absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                <div className="absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" />
            </div>
        </div>
    );
}
