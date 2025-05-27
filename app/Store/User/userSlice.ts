import { createSlice } from "@reduxjs/toolkit";
import type { User } from "~/Models";
import { getDefaultUser } from "~/Utils";

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