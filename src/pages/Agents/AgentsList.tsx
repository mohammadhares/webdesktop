// NOSONAR
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../common/sharedComponent/Loader";
import { sortAgents, updateAgent, updateSection } from "../../features/agents/agentSlice";
import { renderCheckoutPersona, renderTeams } from "./AgentsMixin";
import AgentStatus from "../../common/sharedComponent/AgentStatus";
import { AgentProps } from "./AgentTypes";
import { AgentRoles } from "../../common/sharedComponent/AgentRoles";


const AgentsList = (props: AgentProps) => {

    const dispatch = useDispatch();
    const { data: agent, success, loading } = props;
    const filterAgents = useSelector((state: any) => state.agents.filters);
    const sortBy = filterAgents?.sort.sort_by;
    const orderBy = filterAgents?.sort.order_by;


    const selectAgent = (item: any) => {
        dispatch(updateSection('DETAILS'));
        dispatch(updateAgent(item));
    }

    return (
        <table className="table--agent dp-card  user-table table--fancy">
            <thead className="accent-dark">
                <tr>
                    <th className="sortable">
                        <button onClick={() => dispatch(sortAgents({ sort_by: 'name', order_by: orderBy === 'asc' ? 'desc' : 'asc' }))}>
                            ID {sortBy === 'name' && <i className={`fa fa-caret-${orderBy === "asc" ? 'down' : 'up'}`} />}
                        </button>
                    </th>
                    <th style={{ width: "250px" }} className="sortable">
                        <button onClick={() => dispatch(sortAgents({ sort_by: 'age', order_by: orderBy === 'asc' ? 'desc' : 'asc' }))}>
                            Role {sortBy === 'age' && <i className={`fa fa-caret-${orderBy === "asc" ? 'down' : 'up'}`} />}
                        </button>
                    </th>
                    <th style={{ width: "300px" }}>Teams</th>
                    <th>Persona</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {loading && <tr><td colSpan={5}><Loader /></td></tr>}
                {agent?.data?.length === 0 && (
                    <tr>
                        <td colSpan={5} className="text-center p-3">
                            <i> There is no Agent in list</i>
                        </td>
                    </tr>
                )}
                {success && agent?.data?.map((item: any, index: number) => (
                    <tr key={index}>
                        <td><div onClick={() => selectAgent(item)} className="agent_id action-link" >{item.agent_id}</div></td>
                        <td><AgentRoles userId={item?.user_id} /></td>
                        <td style={{ overflow: "visible" }}>
                            {item?.teams?.length > 0 && renderTeams(item?.teams[0]).id && renderTeams(item?.teams[0]).type !== 'unassigned' ? (
                                <div className="action-link">
                                    {renderTeams(item?.teams[0])?.name}
                                </div>
                            ) : (
                                <>None</>
                            )}
                        </td>
                        <td style={{ overflow: "visible" }}>
                            {item?.checked_out_persona && renderCheckoutPersona(item).name !== '' ? (
                                <div className="action-link">
                                    {renderCheckoutPersona(item).name}
                                </div>
                            ) : (
                                <>None</>
                            )}
                        </td>
                        <td>
                            <AgentStatus status={item?.status} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    );
}

export default AgentsList;