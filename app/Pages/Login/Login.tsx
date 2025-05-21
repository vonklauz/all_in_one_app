import { useEffect } from "react";
import { parseJwt } from "~/Utils";
import { AuthForm } from "~/Widgets/AuthForm";

const Login = () => {
    return <div className="form-container">
        <AuthForm mode="login" />
    </div>
}

export default Login;