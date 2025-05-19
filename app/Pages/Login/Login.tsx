import { useEffect } from "react";
import { parseJwt } from "~/Utils";
import { AuthForm } from "~/Widgets/AuthForm";
//fb5cfad7-5fa9-429e-94bd-6d80cc215376

const Login = () => {
    useEffect(() => {
       
    }, []);
    return <div className="form-container">
        <AuthForm mode="login"/>
    </div>
}

export default Login;