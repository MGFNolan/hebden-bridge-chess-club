import { type ReactElement } from "react";

interface PageProps {
    children: ReactElement[];
}

function Page(props: PageProps) {
    return (
        <>
            <a href="#main-content" className="screen-reader-text">
                Skip to main content
            </a>
            <div id="main-content">{props.children}</div>
        </>
    );
}

export default Page;
