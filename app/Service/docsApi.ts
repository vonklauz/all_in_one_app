import type { IBaseSuccessResponse, IDocumentsSchema, IDocumentsSection, IScheduleEventState, ISimpleResponse, IUserDocument } from "~/Models";
import { baseApi } from "./baseApi";

export const docsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDocuments: builder.query<IBaseSuccessResponse<[{ [key: number]: IDocumentsSection }]>, void>({
            query: () => ({
                url: 'documents',
                method: 'GET',
            })
        }),
        getUserDocuments: builder.query<IBaseSuccessResponse<[{ [key: string]: IUserDocument[] }]>, void>({
            query: () => ({
                url: 'documents/client-documents',
                method: 'GET',
            }),
        }),
        uploadDocument: builder.mutation<IBaseSuccessResponse<[{ [key: number]: IUserDocument[] }]>, { documentId: string, files: FormData }>({
            query: ({ documentId, files }) => ({
                url: `documents/client-documents?document_id=${documentId}`,
                method: 'POST',
                body: files
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