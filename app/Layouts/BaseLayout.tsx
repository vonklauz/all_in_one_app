import type { ReactNode } from "react";
import { Header } from "~/Components/Header";

interface IProps {
    children?: ReactNode;
}

export const BaseLayout = (props: IProps) => {
    return (
        <>
            <Header />
            {props.children}
        </>
    )
}