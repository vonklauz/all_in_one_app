import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { Footer } from "~/Components/Footer";
import { Header } from "~/Components/Header";

export async function clientLoader() {
    const data = localStorage.getItem('accessToken');
    return data;
}

export default function authLayout({ loaderData }: { loaderData: string }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (loaderData) {
            navigate('/');
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