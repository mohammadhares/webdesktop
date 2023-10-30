import { createSlice } from "@reduxjs/toolkit";
import { AppsList } from "./apps";
import { App, AppState, ModifyApp } from "./app.types";

const initialState: AppState = {
    apps: AppsList
}

const appSlice = createSlice({
    name: "apps",
    initialState,
    reducers: {
        modifyAppStatus: (state: AppState, action: ModifyApp) => {
            const { mode, app , value } = action.payload;
            const index = state.apps.findIndex((item: App) => item.title === app);
            switch (mode) {
                case 'OPEN':
                    state.apps[index].open = value;
                    break;
                case 'MIN':
                    state.apps[index].min = value;
                    break;
                case 'MAX':
                    state.apps[index].max = value;
                    break;
                case 'LOCK':
                    state.apps[index].lock = value;
                    break;
            }
        },
    }
})

export const { modifyAppStatus } = appSlice.actions;
export default appSlice.reducer;