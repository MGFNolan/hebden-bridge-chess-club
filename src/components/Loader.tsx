import Spinner from "./Icons/Spinner";

export default function Loader() {
    return (
        <div className="col-span-full flex w-full items-center justify-center px-24 py-64">
            <Spinner />
        </div>
    );
}
