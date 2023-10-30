import { useDispatch, useSelector } from "react-redux";
import AgentSideBar from "./AgentSideBar";
import { useEffect, useState } from "react";
import { FilterItem } from "./AgentTypes";
import { searchAgents, updateSection } from "../../features/agents/agentSlice";
import AgentFilterList from "./AgentFilterList";
import { useGetAgentsQuery } from "../../app/api/services/ConnectedService";
import AgentsList from "./AgentsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const AgentsHome = () => {
    const dispatch = useDispatch();
    const filterAgents = useSelector((state: any) => state.agents.filters);
    const [openSideBar, setOpenSideBar] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [params, setParams] = useState('');
    const [filterLoading, setFilterLoading] = useState(false);  

    const {
        data: agents,
        isLoading: agentsLoading,
        isSuccess: agentsSuccess,
        isError: agentsError,
        refetch
    } = useGetAgentsQuery(params);

    useEffect(() => {
        setFilterLoading(true)
        let par = "";
        filterAgents.status.filter((f: FilterItem) => f.isChecked === true).map((item: any) => par += `status=${item.value}&`);
        filterAgents.role.filter((f: FilterItem) => f.isChecked === true).map((item: any) => par += `role_id=${item.value}&`);
        filterAgents.mission.filter((f: FilterItem) => f.isChecked === true).map((item: any) => par += `mission_id=${item.value}&`);
        filterAgents.team.filter((f: FilterItem) => f.isChecked === true).map((item: any) => par += `team_id=${item.value}&`);
        if (filterAgents.sort.sort_by !== '') {
            par += `sort_by=${filterAgents.sort.sort_by}&order_by=${filterAgents.sort.order_by}`;
        }
        if (filterAgents.search.search_query !== '') {
            par += `search_term=${filterAgents.search.search_term}&search_query=${filterAgents.search.search_query}`;
        }
        setParams(par)
        setTimeout(function () {
            setFilterLoading(false);
            setSearchQuery(filterAgents.search.search_query)
        }, 1000);
        refetch();
    }, [
        filterAgents.mission, 
        filterAgents.role, 
        filterAgents.search.search_query, 
        filterAgents.search.search_term,
        filterAgents.sort.order_by, 
        filterAgents.sort.sort_by, 
        filterAgents.status, 
        filterAgents.team,
        refetch
    ]);

    const searchPersonas = (code: any) => {
        if (code === 'Enter' || code === 'NumpadEnter') {
            dispatch(searchAgents({
                search_query: searchQuery
            }));
        }
    }

    return (
        <div className={`layout layout--filters flat-top ${!openSideBar && 'collapse-filters'}  layout--filters-banner`}>
            <AgentSideBar 
                isOpen={openSideBar}
                onOpenSideBar={setOpenSideBar}/>
            <main className="agents-main">
                <header className="flex-right">
                    <h1 className="align-left">Agents</h1>
                    <div className="index-search">
                        <FontAwesomeIcon icon={faSearch} />
                        <input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyUp={(e) => searchPersonas(e.code)}
                            type="text"
                            placeholder="Search for ID"
                            className=" has-tooltip"
                        />
                    </div>
                    <button 
                        onClick={() => dispatch(updateSection('ADD_AGENT'))}
                        className="btn-add">
                        <i className="fa fa-plus" />
                    </button>
                </header>
                <AgentFilterList data={filterAgents}/>
                <AgentsList
                    data={agents}
                    success={agentsSuccess}
                    loading={agentsLoading}
                    error={agentsError}
                    filterLoading={filterLoading}/>
            </main>
        </div>
    );
}

export default AgentsHome;