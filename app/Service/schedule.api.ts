import type { IBaseSuccessResponse, IEvents, IScheduleEventState, ISimpleResponse, IUserEvents, IUserScheduleEvent } from "~/Models";
import { baseApi } from "./baseApi";

export const scheduleApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSchedule: builder.query<IBaseSuccessResponse<IEvents>, void>({
            query: () => ({
                url: 'schedule/events',
                method: 'GET',
            })
        }),
        getUserSchedule: builder.query<IBaseSuccessResponse<IUserEvents>, void>({
            query: () => ({
                url: 'schedule/events-tasks',
                method: 'GET',
            }),
            transformResponse: (response: IBaseSuccessResponse<{ event_tasks: IUserScheduleEvent[] }>): IBaseSuccessResponse<IUserEvents> => ({
                success: response.success,
                error: response.error,
                data: {
                    eventTasks: response.data.event_tasks
                }

            })
        }),
        createUserEvent: builder.mutation<IBaseSuccessResponse<IUserScheduleEvent>, Partial<IUserScheduleEvent>>({
            query: (event) => ({
                url: 'schedule/events-tasks/',
                method: 'POST',
                body: {
                    event_id: event.id,
                    send_date: event.sendDate
                }
            }),
            transformResponse: (response: IBaseSuccessResponse<IUserScheduleEvent>): IBaseSuccessResponse<IUserScheduleEvent> => ({
                success: response.success,
                error: response.error,
                data: response.data

            })

        }),
        updateUserEvent: builder.mutation<ISimpleResponse, Partial<IScheduleEventState>>({
            query: ({ sendDate, id }) => ({
                url: `schedule/events-tasks/${id}`,
                method: 'PUT',
                body: {
                    send_date: sendDate
                }
            })
        }),
        deleteUserEvent: builder.mutation<ISimpleResponse, Partial<IScheduleEventState>>({
            query: ({ userEventId }) => ({
                url: `schedule/events-tasks/${userEventId}`,
                method: 'DELETE',
            })
        }),
    })
});

export const {
    useGetScheduleQuery,
    useGetUserScheduleQuery,
    useCreateUserEventMutation,
    useUpdateUserEventMutation,
    useDeleteUserEventMutation
} = scheduleApi;