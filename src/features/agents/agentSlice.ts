// NOSONAR
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    section: 'HOME',
    agent: '',
    filters: {
        status: [],
        role: [],
        mission: [],
        team: [],
        sort: {
            sort_by: '',
            order_by: '',
        },
        search: {
            search_term: 'agent_id',
            search_query: '',
        }
    }
}

const agentSlice = createSlice({
    name: 'agents',
    initialState,
    reducers: {
        updateFilters: (state : any, action) => {
            const { category, index, value } = action.payload;
            state.filters[category][index].isChecked = value;
        },

        updateSection: (state , action) => {
            state.section = action.payload;
        },

        updateAgent: (state , action) => {
            state.agent = action.payload;
        },

        removeFilter: (state : any, action) => {
            const { value, category } = action.payload;
            let index = -1
            state.filters[category].forEach((item : any, i: number) => {
                if (item.value === value)
                    index = i
            });
            state.filters[category][index].isChecked = false;
        },

        addWholeFilters: (state, action) => {
            const { status, role, mission, team } = action.payload;
            if (status.length) {
                state.filters.status = status.map((item : any) => {
                    return {
                        label: item.label,
                        value: item.value,
                        isChecked: false
                    };
                });
            }

            if (role.length) {
                state.filters.role = role.map((item : any) => {
                    return {
                        label: item.label,
                        value: item.value,
                        isChecked: false
                    };
                });
            }

            if (mission.length) {
                state.filters.mission = mission.map((item : any) => {
                    return {
                        label: item.label,
                        value: item.value,
                        isChecked: false
                    };
                });
            }


            if (team.length) {
                state.filters.team = team.map((item : any) => {
                    return {
                        label: item.label,
                        value: item.value,
                        isChecked: false
                    };
                });
            }
        },


        searchAgents: (state, action) => {
            const { search_query } = action.payload;
            state.filters.search.search_query = search_query;
        },

        removeSearch: (state) => {
            state.filters.search.search_query = '';
        },

        sortAgents: (state, action) => {
            const { sort_by, order_by } = action.payload;
            state.filters.sort.sort_by = sort_by;
            state.filters.sort.order_by = order_by;
        },



        clearAll: (state) => {
            state.filters.status.forEach((item: { isChecked: boolean})  => item.isChecked = false);
            state.filters.role.forEach((item: { isChecked: boolean}) => item.isChecked = false);
            state.filters.mission.forEach((item: { isChecked: boolean}) => item.isChecked = false);
            state.filters.team.forEach((item: { isChecked: boolean}) => item.isChecked = false);
            state.filters.search.search_query = '';
        },

    }
});


export default agentSlice.reducer;
export const {
    updateFilters, addWholeFilters, clearAll, sortAgents,
    searchAgents, updateSection, updateAgent,
    removeFilter, removeSearch
} = agentSlice.actions;
