import type { Middleware } from "@reduxjs/toolkit";

interface IAction {
    type: string,
    payload: {
        userId: string
    }
}

export const authMiddleware: Middleware = () => (next) => (action) => {
    const typedAction = action as IAction;
    if (typedAction.type === 'userSlice/setUser') {
        if (!typedAction.payload.userId) {
            window.location.href = '/login';
            return;
        }
    }
    return next(action);
};