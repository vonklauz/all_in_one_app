import { Outlet } from "react-router";
import { Footer } from "~/Components/Footer";
import { Header } from "~/Components/Header";
import type { Route } from "../../+types/root";

export async function loader({
    request,
}: Route.LoaderArgs) {
    const url = new URL(request.url);
    const confirmToken = url.searchParams.get("token");
    return { confirmToken };
}


export default function confirmLayout({
    loaderData,
}: { loaderData: { confirmToken: string } }) {
    const { confirmToken } = loaderData;
    return (
        <>
            <Header />
            <main>
                <Outlet context={confirmToken} />
            </main>
            <Footer />
        </>
    )
}  