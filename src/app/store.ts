import axiosMiddleware from "redux-axios-middleware";
import thunk from "redux-thunk";
import HttpService from "./services/HttpService";
import appReducer from "../features/apps/appSlice";
import ScannerSliceReducer from "../features/scanner/ScannerSlice";
import aarInfoSliceReducer from './../features/aar/aarInfoSlice';
import agentSliceReducer from '../features/agents/agentSlice';
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import { ascalonApi } from './api/ascalon.api';
import { aarApi } from "./api/aar/aarApi";
import { servicesApi } from "./api/services/ConnectedService";
import { agentApi } from "./api/agent/agentApi";
import { scannerApi } from "./api/scanner/scannerApi";


const middleware: any = applyMiddleware(thunk, axiosMiddleware(HttpService.getAxiosClient()));
const store = configureStore({
    reducer: {
        middleware: middleware,
        apps: appReducer,
        agents: agentSliceReducer,
        aar: aarInfoSliceReducer,
        scanner: ScannerSliceReducer,
        [ascalonApi.reducerPath]: ascalonApi.reducer,
        [aarApi.reducerPath]: aarApi.reducer,
        [servicesApi.reducerPath]: servicesApi.reducer,
        [agentApi.reducerPath]: agentApi.reducer,
        [scannerApi.reducerPath]: scannerApi.reducer,
    }, middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
    })
        .concat(ascalonApi.middleware)
        .concat(aarApi.middleware)
        .concat(servicesApi.middleware)
        .concat(agentApi.middleware)
        .concat(scannerApi.middleware)
});


export default store;
