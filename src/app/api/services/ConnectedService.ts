import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import UserService from '../../services/UserService';
import { DECKPUNCH } from '../../config/constant';


export const servicesApi = createApi({
    reducerPath: 'services',
    baseQuery: fetchBaseQuery({ baseUrl: DECKPUNCH }),
    tagTypes: ["tirade", "facegen", "LMP", "settings" , "agents" , "activity"],
    endpoints: (builder) => ({

        // GET Setting
        getTiradeCred: builder.query<{}, void>({
            query: () => ({
                url: '/tirade/tirade_credentials',
                method: 'GET',
                headers: {
                    'X-Internal-Token': UserService.getToken(),
                }
            }),
            providesTags: ['tirade']
        }),

        getSettings: builder.query<{}, void>({
            query: () => ({
                url: '/api/v1/settings',
                method: 'GET',
                headers: {
                    contentType: 'text/html',
                    'X-Internal-Token': UserService.getToken(),
                }
            }),
            providesTags: ['settings']
        }),


        getSettingContent: builder.query<{}, string>({
            query: (params) => ({
                url: `/api/v1/settings/${params}`,
                method: 'GET',
                headers: {
                    'X-Internal-Token': UserService.getToken(),
                }
            }),
            providesTags: ['settings']
        }),

        addSetting: builder.mutation<{}, { id: string, body: any }>({
            query: (params) => ({
                url: `/api/v1/settings/${params.id}`,
                method: 'POST',
                headers: {
                    'X-Internal-Token': UserService.getToken(),
                },
                body: params.body
            }),
            invalidatesTags: ['settings']
        }),

        getTiradeCredential: builder.query<{}, {}>({
            query: () => ({
                url: `/tirade/tirade_credentials`,
                method: 'GET',
                headers: {
                    'X-Internal-Token': UserService.getToken(),
                }
            }),
            providesTags: ['tirade']
        }),

        getFaceGenCredential: builder.query<{}, {}>({
            query: () => ({
                url: `/api/v2/facegen/credentials`,
                method: 'GET',
                headers: {
                    'X-Internal-Token': UserService.getToken(),
                }
            }),
            providesTags: ['facegen']
        }),

        getLMPCredential: builder.query<{}, {}>({
            query: () => ({
                url: `/api/v1/lmp/credentials`,
                method: 'GET',
                headers: {
                    'X-Internal-Token': UserService.getToken(),
                }
            }),
            providesTags: ['LMP']
        }),

        configureTirade: builder.mutation<{}, any>({
            query: (data) => ({
                url: '/tirade/tirade_credentials',
                method: 'POST',
                headers: {
                    'X-Internal-Token': UserService.getToken(),
                },
                body: data
            }),
            invalidatesTags: ['tirade']
        }),

        configureFaceGen: builder.mutation<{}, any>({
            query: (data) => ({
                url: '/api/v2/facegen/credentials',
                method: 'POST',
                headers: {
                    'X-Internal-Token': UserService.getToken(),
                },
                body: data
            }),
            invalidatesTags: ['facegen']
        }),

        configureLMP: builder.mutation<{}, any>({
            query: (data) => ({
                url: '/api/v1/lmp/credentials',
                method: 'POST',
                headers: {
                    'X-Internal-Token': UserService.getToken(),
                },
                body: data
            }),
            invalidatesTags: ['LMP']
        }),


        getAgentFilters: builder.query<any , void>({
            query: () => ({
                url: `api/v1/d7h_users/filters`,
                method: 'GET',
                headers: {
                    'X-Internal-Token': UserService.getToken(),
                }
            }),
            providesTags: ['agents']
        }),

        getAgents: builder.query<any , string>({
            query: (params) => ({
                url:`api/v1/d7h_users?${params}`,
                method: 'GET',
                headers: {
                    'X-Internal-Token': UserService.getToken(),
                }
            }),
            providesTags: ['agents']
        }),

        getAllActivity: builder.query<any , string>({
            query: (params) => ({
                url: `api/v1/d7h_activity_logs?${params}`,
                method: 'GET',
                headers: {
                    'X-Internal-Token': UserService.getToken(),
                }
            }),
            providesTags: ['activity']
        }),

        assignPermission: builder.mutation<{}, {}>({
            query: (data) => ({
                url: `/tirade/permissions`,
                method: "POST",
                headers: {
                    'X-Internal-Token': UserService.getToken(),
                },
                body: data
            }),
            invalidatesTags: ['agents']
        }),

    })
});


export const {
    useGetTiradeCredQuery,
    useGetAgentsQuery,
    useConfigureTiradeMutation,
    useConfigureFaceGenMutation,
    useConfigureLMPMutation,
    useGetSettingsQuery,
    useGetSettingContentQuery,
    useGetTiradeCredentialQuery,
    useGetFaceGenCredentialQuery,
    useGetLMPCredentialQuery,
    useAddSettingMutation,
    useGetAgentFiltersQuery,
    useGetAllActivityQuery,
    useAssignPermissionMutation
} = servicesApi