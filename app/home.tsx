
import type { Route } from "./+types/root";
import { LandingPage } from "./Pages/Landing";
import { Welcome } from "./welcome/welcome";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Банкротство онлайн без смс и регистрации" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <LandingPage/>
      {/* <Welcome /> */}
    </>
  );
}
