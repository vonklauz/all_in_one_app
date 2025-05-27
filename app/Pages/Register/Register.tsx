import { useEffect } from "react";
import { parseJwt } from "~/Utils";
import { AuthForm } from "~/Widgets/AuthForm";

const Register = () => {
    return <div className="form-container">
        <AuthForm mode="registration"/>
    </div>
}

export default Register;