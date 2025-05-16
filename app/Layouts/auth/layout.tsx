import { Outlet } from "react-router";
import { Footer } from "~/Components/Footer";
import { Header } from "~/Components/Header";

export default function authLayout() {
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