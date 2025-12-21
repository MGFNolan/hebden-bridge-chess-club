import ErrorIcon from "./Icons/ErrorIcon";

export default function Error(props: { children: string }) {
    return (
        <div className="flex flex-col items-center justify-center bg-black place-content-center p-4 rounded-sm border-red-600 border-6 border-dashed">
            <ErrorIcon className="fill-red-600 py-3 size-24" />
            <div className="flex max-w-124 flex-col justify-center gap-y-2 text-center">
                <h2>Oh no!</h2>
                <p className="font-light text-[var(--secondary-colour)]">
                    {props.children} Try re-loading the page or returning later.
                    If the issue persists, please use the{" "}
                    <a href="#contact-us">Contact Form</a> or email us at
                    hebdenbridgechessclub@gmail.com
                </p>
            </div>
        </div>
    );
}
