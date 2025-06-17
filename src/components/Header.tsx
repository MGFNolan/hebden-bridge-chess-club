import { type ReactElement } from 'react';

interface HeaderProps {
    children: ReactElement[];
}

export default function Header(props: HeaderProps) {
    return <header>{props.children}</header>;
}
