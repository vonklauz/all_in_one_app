import type { IBaseSuccessResponse, IDocumentsSchema, IDocumentsSection, IScheduleEventState, ISimpleResponse, IUserEvents, IUserScheduleEvent } from "~/Models";
import { baseApi } from "./baseApi";

export const docsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDocuments: builder.query<IBaseSuccessResponse<[{[key: number]: IDocumentsSection}]>, void>({
            query: () => ({
                url: 'documents',
                method: 'GET',
            })
        }),
        getUserDocuments: builder.query<IBaseSuccessResponse<IUserEvents>, void>({
            query: () => ({
                url: 'documents/client-documents',
                method: 'GET',
            }),
            transformResponse: (response: IBaseSuccessResponse<{ event_tasks: IUserScheduleEvent[] }>): IBaseSuccessResponse<IUserEvents> => ({
                ...response,
                data: {
                    eventTasks: response.data.event_tasks
                }
            })
        }),
        uploadDocument: builder.mutation<IBaseSuccessResponse<IUserScheduleEvent>, Partial<IUserScheduleEvent>>({
            query: (event) => ({
                url: 'documents/client-documents',
                method: 'POST',
                body: {
                    event_id: event.id,
                    send_date: event.sendDate
                }
            })
        }),
        updateDocument: builder.mutation<ISimpleResponse, Partial<IScheduleEventState>>({
            query: ({ sendDate, id }) => ({
                url: `schedule/events-tasks/${id}`,
                method: 'PUT',
                body: {
                    send_date: sendDate
                }
            })
        }),
        // deleteUserEvent: builder.mutation<ISimpleResponse, Partial<IScheduleEventState>>({
        //     query: ({ userEventId }) => ({
        //         url: `schedule/events-tasks/${userEventId}`,
        //         method: 'DELETE',
        //     })
        // }),
    })
});

export const {
    useGetDocumentsQuery,
    useGetUserDocumentsQuery,
    useUploadDocumentMutation,
    useUpdateDocumentMutation
} = docsApi;