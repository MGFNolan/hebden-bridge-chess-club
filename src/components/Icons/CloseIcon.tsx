interface CloseIconProps {
    className?: string;
}

export default function CloseIcon({ className }: CloseIconProps) {
    return (
        <div className={className}>
            <div className="absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-orange-500" />
            <div className="absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-orange-500" />
        </div>
    );
}
