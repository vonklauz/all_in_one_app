import type { IBaseSuccessResponse, IEvents } from "~/Models";
import { baseApi } from "./baseApi";

export const scheduleApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSchedule: builder.query<IBaseSuccessResponse<IEvents>, void>({
            query: () => ({
                url: '/schedule/events',
                method: 'GET',
            })
        })

    })
});

export const { useGetScheduleQuery } = scheduleApi;