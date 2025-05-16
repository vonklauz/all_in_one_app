import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./Layouts/base/layout.tsx", [
        index("./home.tsx"),
        // route("login", "./Pages/Login/Login.tsx"),
        // route("register", "./Pages/Register/Register.tsx"),
    ]),
    layout("./Layouts/auth/layout.tsx", [
        route("login", "./Pages/Login/Login.tsx"),
        route("register", "./Pages/Register/Register.tsx"),
    ]),

] satisfies RouteConfig;
