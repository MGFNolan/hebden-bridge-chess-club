export default function Spinner() {
    return (
        <div className="relative box-border inline-block size-20">
            <div
                className="animate-spin border-t-black absolute m-2 box-border block size-16 rounded-full border-8 border-solid border-r-transparent border-b-transparent border-l-transparent"
                style={{ animationDuration: "1.5s" }}
            />

            <div
                className="animate-spin border-t-black absolute m-2 box-border block size-16 rounded-full border-8 border-solid border-r-transparent border-b-transparent border-l-transparent"
                style={{ animationDuration: "2s" }}
            />

            <div
                className="animate-spin border-t-black absolute m-2 box-border block size-16 rounded-full border-8 border-solid border-r-transparent border-b-transparent border-l-transparent"
                style={{ animationDuration: "2.5s" }}
            />

            <div className="animate-spin border-t-black absolute m-2 box-border block size-16 rounded-full border-8 border-solid border-r-transparent border-b-transparent border-l-transparent" />
        </div>
    );
}
