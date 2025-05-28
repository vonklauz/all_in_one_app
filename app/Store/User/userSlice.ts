import { createSlice } from "@reduxjs/toolkit";
import type { User } from "~/Models";

export const getDefaultUser = (): User => (
    {
        firstName: '',
        secondName: '',
        lastName: '',
        userId: '',
        email: '',
        phone: ''
    }
)

const initialState = {
    user: getDefaultUser()
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = { ...state.user, ...action.payload };
        },
        unsetUser(state) {
            state = { ...initialState };
        }
    }
});

export const { setUser, unsetUser } = userSlice.actions;