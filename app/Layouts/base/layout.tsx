import { Outlet } from "react-router";
import { Footer } from "~/Components/Footer";
import { Header } from "~/Components/Header";

export default function baseLayout() {
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