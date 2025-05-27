import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { Footer } from "~/Components/Footer";
import { Header } from "~/Components/Header";

export async function clientLoader() {
    const data = localStorage.getItem('accessToken');
    return data;
}

export default function protectedLayout({ loaderData }: { loaderData: string }) {
    const nagivate = useNavigate();

    useEffect(() => {
        if (!loaderData) {
            nagivate('/login');
        }
    }, [loaderData]);

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}  