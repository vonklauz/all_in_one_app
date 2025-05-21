import { createApi, fetchBaseQuery, type BaseQueryFn, type FetchArgs, type FetchBaseQueryError, type RootState } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "~/Consts";
import type { RawUser, User } from "~/Models";
import { handleLoginSuccess, handleLogoutSuccess } from "~/Utils";

const baseQuery = fetchBaseQuery({
    baseUrl: `${BASE_URL}api/`,
    //Пока отключил до момента переноса рефреш токена в куки
    // prepareHeaders: (headers) => {
    //     const token = localStorage.getItem('accessToken');
    //     if (token) {
    //         headers.set('Authorization', `Bearer ${token}`);
    //     }
    //     return headers;
    // },
});

const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {
        // Пытаемся обновить токен
        const refreshResult = await baseQuery(
            {
                url: 'auth/tokens/access/new',
                method: 'POST',
                headers: { Authorization: `Bearer ${localStorage.getItem('refreshToken')}` }
            },
            api,
            extraOptions
        );

        if (refreshResult.data) {
            //@ts-expect-error
            console.log('refreshResult', refreshResult.data.data)
            // Сохраняем новый токен в хранилище
            // api.dispatch(setToken(refreshResult.data.accessToken));
            // Повторяем исходный запрос
            //@ts-expect-error
            handleLoginSuccess(refreshResult.data.data);
            result = await baseQuery(args, api, extraOptions);
        } else {
            // Если refreshToken невалиден, разлогиниваем
            handleLogoutSuccess();
        }
    }

    return result;
};

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getUser: builder.query<User, any>({
            query: () => ({
                url: 'users',
                method: 'GET',
                headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
            }),
            transformResponse: (response: {
                data: RawUser
            }): User => ({
                firstName: response.data.first_name,
                lastName: response.data.last_name,
                secondName: response.data.second_name,
                userId: response.data.user_id,
                phone: response.data.phone,
                email: response.data.email
            })
        }),
    })
})

export const { useGetUserQuery } = baseApi;