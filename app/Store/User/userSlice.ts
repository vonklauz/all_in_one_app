import { createSlice } from "@reduxjs/toolkit";
import type { User } from "~/Models";

const initialState: User = {
    firstName: '',
    secondName: '',
    lastName: '',
    userId: '',
    email: '',
    phone: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            return action.payload;
        }
    }

})