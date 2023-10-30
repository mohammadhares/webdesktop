
import { createSlice } from "@reduxjs/toolkit";
import { aarData } from "../data/aarData";
const initialState = {
    meta: {
        save_mode: true,
        editMission: false,
        editAARAction: false,
    },
    editedInfo: aarData,
    uneditedInfo: aarData,
}

const aarInfoSlice = createSlice({
    name: 'aar',
    initialState,
    reducers: {
        updateFormMode: (state: any, action) => {
            const { field, value } = action.payload;
            state.meta[field] = value;
        },

        updateInfo: (state: any, action) => {
            const { order, index, field, value } = action.payload
            state.editedInfo.sections[order].fields[index][field] = value;
        },

        updateAARResponse: (state: any, action) => {
            const { index, order, field, subIndex, value } = action.payload
            state.editedInfo.sections[order].fields[index][field][subIndex].label = value;
        },

        reset: () => initialState,

        updateState: (state, action) => {
            let { aar } = action.payload;
            state.editedInfo = aar;
            state.uneditedInfo = aar;
        }
    }
});


export default aarInfoSlice.reducer;
export const {
    updateFormMode, updateState, reset, updateInfo, updateAARResponse
} = aarInfoSlice.actions;
