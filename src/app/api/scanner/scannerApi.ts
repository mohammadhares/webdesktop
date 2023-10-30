import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import UserService from '../../services/UserService';
import { SCANNER_URL } from '../../config/constant';

export const scannerApi = createApi({
    reducerPath: 'scannerApi',
    baseQuery: fetchBaseQuery({ baseUrl: SCANNER_URL }),
    tagTypes: ["update_scanner", "scanners", "scan_list", "openvas_status" , "zap_status" , 'nmap_status'],
    endpoints: (builder) => ({

        getScannerUpdates: builder.query<any , string>({
            query: (scanner) => ({
                url: `/api/get_feeds/${scanner}`,
                method: 'GET',
                headers: {
                    'Authorization':   `Bearer ${UserService.getToken()}`,
                }
            }),
            providesTags: ['update_scanner']
        }),

        getNmapScanList: builder.query<any , string>({
            query: (scanType) => ({
                url: `/api/namp_scans/${scanType}`,
                method: 'GET',
                headers: {
                    'Authorization':   `Bearer ${UserService.getToken()}`,
                }
            }),
            providesTags: ['scan_list']
        }),

        getOpenVasScanList: builder.query<any , string>({
            query: (scanType) => ({
                url: `/api/openvas_scans/${scanType}`,
                method: 'GET',
                headers: {
                    'Authorization':   `Bearer ${UserService.getToken()}`,
                }
            }),
            providesTags: ['scan_list']
        }),

        getOpenVasScanStatus: builder.query<any , string>({
            query: (name) => ({
                url: `/api/openvas_status/${name}`,
                method: 'GET',
                headers: {
                    'Authorization':   `Bearer ${UserService.getToken()}`,
                }
            }),
            providesTags: ['openvas_status']
        }),

        removeOpenVasScan: builder.mutation<any , string>({
            query: (name) => ({
                url: `/api/openvas_remove/${name}`,
                method: 'DELETE',
                headers: {
                    'Authorization':   `Bearer ${UserService.getToken()}`,
                }
            }),
            invalidatesTags: ['scan_list']
        }),

        getZapScanList: builder.query<any , string>({
            query: (scanType) => ({
                url: `/api/zap_scans/${scanType}`,
                method: 'GET',
                headers: {
                    'Authorization':   `Bearer ${UserService.getToken()}`,
                }
            }),
            providesTags: ['scan_list']
        }),

        getZapScanStatus: builder.query<any , string>({
            query: (name) => ({
                url: `/api/zap_scan_status/${name}`,
                method: 'GET',
                headers: {
                    'Authorization':   `Bearer ${UserService.getToken()}`,
                }
            }),
            providesTags: ['zap_status']
        }),

        getNmapScanStatus: builder.query<any , string>({
            query: (name) => ({
                url: `/api/nmap_scan_status/${name}`,
                method: 'GET',
                headers: {
                    'Authorization':   `Bearer ${UserService.getToken()}`,
                }
            }),
            providesTags: ['zap_status']
        }),

        removeZapScan: builder.mutation<any , string>({
            query: (name) => ({
                url: `/api/zap_remove/${name}`,
                method: 'DELETE',
                headers: {
                    'Authorization':   `Bearer ${UserService.getToken()}`,
                }
            }),
            invalidatesTags: ['scan_list']
        }),

        removeNmapScan: builder.mutation<any , string>({
            query: (name) => ({
                url: `/api/nmap_remove/${name}`,
                method: 'DELETE',
                headers: {
                    'Authorization':   `Bearer ${UserService.getToken()}`,
                }
            }),
            invalidatesTags: ['scan_list']
        }),

        getScannerStatus: builder.query<any , void>({
            query: () => ({
                url: `/api/scanner/status`,
                method: 'GET',
                headers: {
                    'Authorization':   `Bearer ${UserService.getToken()}`,
                }
            }),
            providesTags: ['scanners']
        }),


        openVASscan: builder.mutation<any, any>({
            query: (body) => ({
                url: `/api/openvas_scan`,
                method: "POST",
                headers: {
                    'Authorization':   `Bearer ${UserService.getToken()}`,
                },
                body: body,
            }),
            invalidatesTags: ['scan_list']
        }),

        openVASResume: builder.mutation<any, string>({
            query: (name) => ({
                url: `/api/openvas_resume/${name}`,
                method: "POST",
                headers: {
                    'Authorization':   `Bearer ${UserService.getToken()}`,
                },
            }),
            invalidatesTags: ['scan_list', 'openvas_status']
        }),

        openVASPause: builder.mutation<any, string>({
            query: (name) => ({
                url: `/api/openvas_stop/${name}`,
                method: "POST",
                headers: {
                    'Authorization':   `Bearer ${UserService.getToken()}`,
                },
            }),
            invalidatesTags: ['scan_list', 'openvas_status']
        }),

        ZapResume: builder.mutation<any, string>({
            query: (name) => ({
                url: `/api/zap_resume/${name}`,
                method: "POST",
                headers: {
                    'Authorization':   `Bearer ${UserService.getToken()}`,
                },
            }),
            invalidatesTags: ['scan_list', 'openvas_status']
        }),

        ZapPause: builder.mutation<any, string>({
            query: (name) => ({
                url: `/api/zap_pause/${name}`,
                method: "POST",
                headers: {
                    'Authorization':   `Bearer ${UserService.getToken()}`,
                },
            }),
            invalidatesTags: ['scan_list', 'zap_status']
        }),

        nmapResume: builder.mutation<any, string>({
            query: (name) => ({
                url: `/api/nmap_resume/${name}`,
                method: "POST",
                headers: {
                    'Authorization':   `Bearer ${UserService.getToken()}`,
                },
            }),
            invalidatesTags: ['scan_list', 'nmap_status']
        }),

        nmapPause: builder.mutation<any, string>({
            query: (name) => ({
                url: `/api/nmap_pause/${name}`,
                method: "POST",
                headers: {
                    'Authorization':   `Bearer ${UserService.getToken()}`,
                },
            }),
            invalidatesTags: ['scan_list', 'nmap_status']
        }),

        zapScan: builder.mutation<any, any>({
            query: (body) => ({
                url: `/api/zap_scan`,
                method: "POST",
                headers: {
                    'Authorization':   `Bearer ${UserService.getToken()}`,
                },
                body: body,
            }),
            invalidatesTags: ['scan_list']
        }),


        getZapReport: builder.query<any, string>({
            query: (name) => ({
                url: `/api/zap_report/${name}`,
                method: "GET",
                headers: {
                    'Authorization':   `Bearer ${UserService.getToken()}`,
                },
            }),
        }),

        getOpenVasReport: builder.query<any, string>({
            query: (name) => ({
                url: `/api/openvas_report/${name}`,
                method: "GET",
                headers: {
                    'Authorization':   `Bearer ${UserService.getToken()}`,
                },
            }),
        }),

        getNmapReport: builder.query<any, string>({
            query: (name) => ({
                url: `/api/nmap_report/${name}`,
                method: "GET",
                headers: {
                    'Authorization':   `Bearer ${UserService.getToken()}`,
                },
            }),
        }),


    })
});


export const {
    useGetScannerStatusQuery,
    useGetOpenVasScanStatusQuery,
    useGetZapScanStatusQuery,
    useGetScannerUpdatesQuery,
    useGetOpenVasScanListQuery,
    useGetNmapScanListQuery,
    useGetZapScanListQuery,
    useOpenVASscanMutation,
    useOpenVASPauseMutation,
    useOpenVASResumeMutation,
    useZapPauseMutation,
    useZapResumeMutation,
    useRemoveOpenVasScanMutation,
    useRemoveZapScanMutation,
    useZapScanMutation,
    useGetOpenVasReportQuery,
    useGetZapReportQuery,
    useGetNmapReportQuery,
    useRemoveNmapScanMutation,
    useNmapPauseMutation,
    useNmapResumeMutation,
    useGetNmapScanStatusQuery
} = scannerApi