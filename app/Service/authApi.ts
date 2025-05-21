import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "~/Consts";
import type { RegisterData, Login } from "~/Models";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}api/auth/` }),
    endpoints: (builder) => ({
        register: builder.mutation<any, RegisterData>({
            query: ({ firstName, secondName, lastName, phone, email, password }) => ({
                url: 'register',
                method: 'POST',
                body: {
                    first_name: firstName,
                    second_name: secondName,
                    last_name: lastName,
                    phone,
                    email,
                    password
                }
            })
        }),
        login: builder.mutation<any, Login>({
            query: ({ email, password }) => ({
                url: 'login',
                method: 'POST',
                body: {
                    email,
                    password
                }
            })
        }),
        logout: builder.mutation<any, any>({
            query: ({ refreshToken }) => ({
                headers: { Authorization: `Bearer ${refreshToken}` },
                url: 'logout',
                method: 'POST',
            })
        })

    })
})

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } = authApi;