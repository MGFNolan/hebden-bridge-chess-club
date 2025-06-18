import { type ReactElement } from 'react';

interface PageProps {
    children: ReactElement[];
}

function Page(props: PageProps) {
    return <div id="main-content">{props.children}</div>;
}

export default Page;
