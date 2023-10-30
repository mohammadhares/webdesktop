import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import UserService from '../services/UserService';
import { DECKPUNCH } from '../config/constant';

export const ascalonApi = createApi({
    reducerPath: 'ascalon',
    baseQuery: fetchBaseQuery({ baseUrl: DECKPUNCH }),
    tagTypes: ["settings"],
    endpoints: (builder) => ({

        getSysteSettings: builder.query<any, string>({
            query: (params) => ({
                url: `/api/v1/settings/${params}`,
                method: 'GET',
                headers: {
                    'X-Internal-Token': UserService.getToken(),
                }
            }),
            providesTags: ['settings']
        }),

    })

});

export const { useGetSysteSettingsQuery } = ascalonApi;