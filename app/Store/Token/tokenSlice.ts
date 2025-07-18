import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: '',
}

export const tokenSlice = createSlice({
    name: 'tokenSlice',
    initialState,
    reducers: {
        setTokens(state, action) {
            return { ...state, accessToken: action.payload.accessToken }
        },
        setAccessToken(state, action) {
            return { ...state, accessToken: action.payload.accessToken }
        },
        unsetTokens(state) {
            return { ...state, accessToken: '' }
        }
    }
});

export const { setTokens, setAccessToken, unsetTokens } = tokenSlice.actions;