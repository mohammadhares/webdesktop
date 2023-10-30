import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { KEYCLOAK_REALM, KEYCLOAK_URL } from '../../config/constant';
import UserService from '../../services/UserService';

export const agentApi = createApi({
    reducerPath: 'agentApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${KEYCLOAK_URL}/admin/realms/${KEYCLOAK_REALM}` }),
    tagTypes: ["user"],
    endpoints: (builder) => ({

        getRoles: builder.query<any, void>({
            query: () => ({
                url: `/roles`,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${UserService.getToken()}`
                }
            }),
            providesTags: ['user']
        }),

        getSingleAgent: builder.mutation<{}, string>({
            query: (id) => ({
                url: `/users/?search=${id}`,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${UserService.getToken()}`
                },
            }),
            invalidatesTags: ['user']
        }),

        getUserCredentials: builder.query<any, string>({
            query: (id) => ({
                url: `/users/${id}/credentials`,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer  ${UserService.getToken()}`
                }
            }),
            providesTags: ['user']
        }),

        assignRole: builder.mutation<{}, { role: any, user_uuid: any }>({
            query: (params) => ({
                url: `/users/${params.user_uuid}/role-mappings/realm`,
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${UserService.getToken()}`
                },
                body: params.role
            }),
            invalidatesTags: ['user']
        }),

        destroyTOTP: builder.mutation<{}, { user_uuid: any, totp_id: any }>({
            query: (params) => ({
                url: `/users/${params.user_uuid}/role-mappings/realm/${params.totp_id}`,
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer  ${UserService.getToken()}`
                },
            }),
            invalidatesTags: ['user']
        }),

        storeUser: builder.mutation<{}, any>({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer  ${UserService.getToken()}`
                },
                body: user
            }),
            invalidatesTags: ['user']
        }),

        getUserList: builder.query<any, any>({
            query: () => ({
                url: '/users',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer  ${UserService.getToken()}`
                },
            }),
            providesTags: ['user']
        }),

        getUserRoles: builder.query<any, string>({
            query: (userId) => ({
                url: `/users/${userId}/role-mappings/realm`,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${UserService.getToken()}`
                }
            }),
            providesTags: ['user']
        }),


        updateUser: builder.mutation<{}, { user: any, uuid: string }>({
            query: (params) => ({
                url: `/users/${params.uuid}`,
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer  ${UserService.getToken()}`
                },
                body: params.user,
            }),
            invalidatesTags: ['user']
        }),

        

    })
});


export const {
    useGetRolesQuery,
    useGetUserRolesQuery,
    useGetSingleAgentMutation,
    useGetUserListQuery,
    useGetUserCredentialsQuery,
    useStoreUserMutation,
    useAssignRoleMutation,
    useUpdateUserMutation,
    useDestroyTOTPMutation
} = agentApi