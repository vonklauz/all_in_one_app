import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("./home.tsx"),
    layout("./Layouts/auth/authLayout.tsx", [
        route("login", "./Pages/Login/Login.tsx"),
        route("register", "./Pages/Register/Register.tsx"),
    ]),

] satisfies RouteConfig;
