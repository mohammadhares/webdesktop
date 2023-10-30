// NOSONAR
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { addWholeFilters, clearAll, updateFilters } from "../../features/agents/agentSlice"
import { FilterItem } from "./AgentTypes"
import Loader from "../../common/sharedComponent/Loader"
import { useGetAgentFiltersQuery } from "../../app/api/services/ConnectedService"

interface AgentSideBarSideBarProps {
    isOpen: boolean
    onOpenSideBar: (value: boolean) => void
}
const AgentSideBar = (props: AgentSideBarSideBarProps) => {

    const { onOpenSideBar, isOpen } = props;
    const filterAgents = useSelector((state: any) => state.agents.filters);
    const dispatch = useDispatch();

    const {
        data: filters,
        isSuccess,
        isLoading,
    } = useGetAgentFiltersQuery();

    useEffect(() => {
        if (isSuccess) {
            dispatch(addWholeFilters({
                status: filters?.data.status['User Status'],
                role: filters?.data.role_id.Role,
                mission: filters?.data.mission.Mission,
                team: filters?.data.team.Team
            }))
        }
    }, [dispatch, filters?.data.mission.Mission, filters?.data.role_id.Role,
        filters?.data.status, filters?.data.team.Team, isSuccess]);


    let count = 0;
    filterAgents.status.forEach((item : FilterItem)=> item.isChecked === true ? count++ : count)
    filterAgents.role.forEach((item : FilterItem) => item.isChecked === true ? count++ : count)
    filterAgents.mission.forEach((item : FilterItem) => item.isChecked === true ? count++ : count)
    filterAgents.team.forEach((item : FilterItem) => item.isChecked === true ? count++ : count)

    return (
        <aside className="filters">
            <header className="flex-right">
                <h4 className="align-left">Filters</h4>
                <button
                    onClick={() => {
                        dispatch(clearAll());
                    }}
                    type="button" className={`action-link ${count > 0 ? '' : 'hide'}`}>Clear all</button>
                <button
                    onClick={() => onOpenSideBar(isOpen ? false : true)}
                    type="button" className="btn btn-collapse">
                    {isOpen ? (
                        <svg aria-hidden="true"
                            focusable="false" data-prefix="fas" data-icon="angle-left" role="img" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 512" className="svg-inline--fa fa-angle-left fa-w-8">
                            <path fill="currentColor"
                                d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
                                className=""></path>
                        </svg>
                    ) : (
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="filter" role="img"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-filter fa-w-16">
                            <path fill="currentColor"
                                d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"
                                className=""></path>
                        </svg>
                    )}

                </button>
            </header>
            <section>
                <h5>Status</h5>
                <div className="scroll">
                    {!isLoading ? filterAgents?.status.map((item: any, i: number) => (
                        <div key={i} className="checkbox-row">
                            <input
                                id={item.value}
                                name="status"
                                type="checkbox"
                                checked={item.isChecked}
                                onChange={(e) => {
                                    dispatch(updateFilters({ category: 'status', index: i, value: e.target.checked }));
                                }}
                            />
                            <label id={item.value} htmlFor={item.value}>{item.label}</label>
                        </div>
                    )) : (
                        <Loader />
                    )}
                </div>
            </section>
            <section>
                <h5>Roles</h5>
                <div className="scroll">
                    {!isLoading ? filterAgents?.role.map((item: any, i: number) => (
                        <div key={i} className="checkbox-row">
                            <input
                                checked={item.isChecked}
                                id={item.value} name="role"
                                type="checkbox" value={item.value}
                                onChange={(e) => dispatch(updateFilters({ category: 'role', index: i, value: e.target.checked }))} />
                            <label id={item.value} htmlFor={item.value}>{item.label}</label>
                        </div>
                    )) : (
                        <Loader />
                    )}
                </div>
            </section>
            <section>
                <h5>Missions</h5>
                <div className="scroll">
                    {!isLoading ? filterAgents?.mission.map((item : any, i: number) => (
                        <div key={i} className="checkbox-row">
                            <input
                                checked={item.isChecked}
                                id={item.value} name="mission"
                                type="checkbox" value={item.value}
                                onChange={(e) => dispatch(updateFilters({ category: 'mission', index: i, value: e.target.checked }))} />

                            <label id={item.value} htmlFor={item.value}>{item.label}</label>
                        </div>
                    )) : (
                        <Loader />
                    )}
                </div>
            </section>
            <section>
                <h5>Teams</h5>
                <div className="scroll">
                    {!isLoading ? filterAgents?.team.map((item : any, i: number) => (
                        <div key={i} className="checkbox-row">
                            <input
                                checked={item.isChecked}
                                id={item.value} name="team"
                                type="checkbox" value={item.value}
                                onChange={(e) => dispatch(updateFilters({ category: 'team', index: i, value: e.target.checked }))} />

                            <label id={item.value} htmlFor={item.value}>{item.label}</label>
                        </div>
                    )) : (
                        <Loader />
                    )}
                </div>
            </section>
        </aside>
    );
}

export default AgentSideBar;