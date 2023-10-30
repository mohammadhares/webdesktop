
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    section: 'SCANNER_PROFILE',
    mode: 'SHOW',
    profile: null,
    profile_section: '',
    targets: [],
    graphana_url: '',
    report_host: '',
    report_type: '',
    manual_mode: 'LIST'
}

const ScannerSlice = createSlice({
    name: 'scanner',
    initialState,
    reducers: {
        updateScannerPage: (state, action) => {
            state.section = action.payload
        },

        updateManualMode: (state, action) => {
            state.manual_mode = action.payload;
        },

        updateReportType: (state, action) => {
            state.report_type = action.payload;
        },

        updateReportHost: (state, action) => {
            state.report_host = action.payload;
        },

        updateProfileSection: (state , action) => {
            state.profile_section = action.payload;
        },

        updateProfile: (state, action) => {
            state.profile = action.payload;
        },

        updateMode: (state, action) => {
            state.mode = action.payload;
        },

        addTarget: (state: any, action) => {
            const { name, target } = action.payload;
            state.targets.push({
                name: name,
                target: target,
                selected: true,
            });
        },

        removeTarget: (state, action) => {
            const { id } = action.payload;
            state.targets.splice(id, 1);
        },

        resetTargets: (state) => {
            state.targets = [];
        },

        updateTarget: (state: any, action) => {
            const { index, value } = action.payload;
            state.targets[index].selected = value;
        },

        updateGraphaUrl: (state, action) => {
            state.graphana_url = action.payload;
        },

        selectAllTarget: (state : any, action) => {
            state.targets.forEach((item : any) => {
                item.selected = action.payload
            })
        },

        convertNodeToTarget: (state: any, action) => {
            const { data } = action.payload;
            if (data?.length) {
                state.targets = data.map((item : any) => {
                    return {
                        name: state.profile_section,
                        target: item?.ipAddress,
                        selected: false,
                    };
                });
            }
        },

        convertPVDToTarget: (state: any, action) => {
            const { data } = action.payload;
            if (data?.length) {
                state.targets = data.map((item : any) => {
                    return {
                        name: state.profile_section,
                        target: item?.host_meta?.public_ip,
                        selected: false,
                    };
                });
            }
        },


        updateWholeTarget: (state : any, action) => {
            const { data } = action.payload;
            if (data?.length) {
                state.targets = data.map((item : any) => {
                    return {
                        name: item.name,
                        target: item?.target,
                        selected: true,
                    };
                });
            }
        },



    }
});


export default ScannerSlice.reducer;
export const {
    updateScannerPage,
    updateProfile,
    updateMode,
    addTarget,
    resetTargets,
    removeTarget,
    updateTarget,
    convertNodeToTarget,
    selectAllTarget,
    updateWholeTarget,
    updateGraphaUrl,
    updateProfileSection,
    updateManualMode,
    updateReportHost,
    updateReportType,
    convertPVDToTarget,
} = ScannerSlice.actions;
