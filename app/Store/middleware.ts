import type { Middleware } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";

interface IAction {
    type: string,
    payload: {
        userId: string
    }
}

export const authMiddleware: Middleware = () => (next) => (action) => {
    //@ts-ignore
    if (action.type === 'userSlice/setUser') {
        //@ts-ignore
        if (!action.payload.userId) {
            const navigate = useNavigate();
            navigate('/login')
        }
    }
    return next(action);
};