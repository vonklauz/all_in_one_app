import { useEffect, useState } from "react";
import { Navigate, Outlet, redirect, useNavigate } from "react-router";
import { Footer } from "~/Components/Footer";
import { Header } from "~/Components/Header";
import type { Route } from "./+types/layout";

export async function clientLoader() {
  // call the server loader
//   const serverData = await serverLoader();
  // And/or fetch data on the client
  const data = localStorage.getItem('token');
  // Return the data to expose through useLoaderData()
  return data;
}


// export const loader = async () => {
//     const token = localStorage.getItem('token');

//     if (!token) {
//         return redirect('/');
//     }

//     // // Проверяем токен на сервере
//     // const res = await fetch('/api/validate-token', {
//     //     headers: { Authorization: `Bearer ${token}` },
//     // });

//     // if (!res.ok) {
//     //     return redirect('/login');
//     // }

//     return null;
// };

export default function authLayout({loaderData}) {
    // const [user, setUser] = useState(null);
    const nagivate = useNavigate();

    useEffect(() => {
        if (!loaderData) {
            nagivate('/');
        }
    }, [loaderData]);

    // if (!user) {
    //     console.log('hey')
    //     nagivate('/registration');
    // }

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