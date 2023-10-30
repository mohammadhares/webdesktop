import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import UserService from '../../services/UserService';
import { DECKPUNCH } from '../../config/constant';


export const aarApi = createApi({
    reducerPath: 'aarSlice',
    baseQuery: fetchBaseQuery({ baseUrl: DECKPUNCH }),
    tagTypes: ["aar", "personaAAR", "aarFile"],
    endpoints: (builder) => ({


        getAAREdit: builder.query<any, void>({
            query: (params) => ({
                url: `/api/v1/aar/edit`,
                method: 'GET',
                headers: {
                    'X-Internal-Token': UserService.getToken(),
                }
            }),
            providesTags: ['aar', 'personaAAR']
        }),

        getReportFile: builder.query<any, number>({
            query: (id) => ({
                url: `/dam/api/persona_records/list?persona_session_id=${id}`,
                method: 'GET',
                headers: {
                    'X-Internal-Token': UserService.getToken(),
                }
            }),
            providesTags: ['aarFile']
        }),

        updateAAR: builder.mutation<{}, any>({
            query: (aars) => ({
                url: `/api/v1/aar/edit`,
                method: "POST",
                headers: {
                    'X-Internal-Token': UserService.getToken(),
                },
                body: aars,
            }),
            invalidatesTags: ['personaAAR', 'aar']
        }),

        clipVideo: builder.mutation<{}, { id: number, data: any }>({
            query: (params) => ({
                url: `/cut_single_clip_dam/${params.id}`,
                method: "POST",
                headers: {
                    'content-type': 'multipart/form-data',
                    'X-Internal-Token': UserService.getToken(),
                },
                body: params.data,
            }),
        }),


    })
});


export const {
    useGetAAREditQuery,
    useUpdateAARMutation,
    useClipVideoMutation,
    useGetReportFileQuery
} = aarApi