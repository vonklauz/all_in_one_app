import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./Layouts/base/layout.tsx", [
        index("./home.tsx"),
    ]),
    layout("./Layouts/auth/layout.tsx", [
        route("login", "./Pages/Login/Login.tsx"),
        route("register", "./Pages/Register/Register.tsx"),
    ]),
    layout("./Layouts/confirm/layout.tsx", [
        route("email/confirm", "./Pages/Confirm/Confirm.tsx"),
    ]),
    layout("./Layouts/protected/layout.tsx", [
        route("profile", "./Pages/Profile/Profile.tsx"),
        route("calendar", "./Pages/Calendar/Calendar.tsx"),
        route("documents", "./Pages/Documents/Documents.tsx"),
        route("dossiers-list", "./Pages/DossierList/DossierList.tsx"),
        route("dossiers-list/dossier", "./Pages/DossierSingle/DossierSingle.tsx"),
    ]),
] satisfies RouteConfig;
