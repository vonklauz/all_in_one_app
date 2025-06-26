import type { IBaseSuccessResponse, IDocumentsSection, IDossierFormSection, IFormSchema, IUserDocument } from "~/Models";
import { baseApi } from "./baseApi";

export const dossierApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getFormSchemas: builder.query<IBaseSuccessResponse<IFormSchema[]>, void>({
            query: () => ({
                url: 'forms/schemas',
                method: 'GET',
            })
        }),
        getSchemaById: builder.query<IBaseSuccessResponse<IDossierFormSection>, { schemaId: string }>({
            query: ({ schemaId }) => ({
                url: `forms/schemas/${schemaId}`,
                method: 'GET',
            })
        }),
    })
});

export const {
    useGetFormSchemasQuery,
    useGetSchemaByIdQuery,
} = dossierApi;