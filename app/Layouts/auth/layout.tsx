import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { Footer } from "~/Components/Footer";
import { Header } from "~/Components/Header";

export async function clientLoader() {
    const data = localStorage.getItem('refreshToken');
    return data;
}

export default function authLayout({ loaderData }: { loaderData: string }) {
    const nagivate = useNavigate();

    useEffect(() => {
        if (loaderData) {
            nagivate('/');
        }
    }, [loaderData]);

    return (
        <>
            <Header />
            <main>
                <section className="section-padding">
                    <Outlet />
                </section>
            </main>
            <Footer />
        </>
    )
}  