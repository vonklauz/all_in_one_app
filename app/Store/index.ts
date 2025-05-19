import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authApi } from '~/Service/baseApi';

export const store = configureStore({
    reducer: combineReducers({
        [authApi.reducerPath]: authApi.reducer,
    }),
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            immutableCheck: false,
            serialazableCheck: false,
            thunk: true
        }).concat([authApi.middleware])
    }
})

export const { dispatch } = store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch