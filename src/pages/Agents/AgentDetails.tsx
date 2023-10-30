import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { updateSection } from "../../features/agents/agentSlice";
import AgentStatusButton from "../../common/sharedComponent/AgentStatusButton";
import AgentActivityList from "./AgentActivityList";

const AgentDetails = () => {
    const dispatch = useDispatch();
    const agent = useSelector((state: any) => state.agents.agent);    

    return (
        <div className="agent-detail">
            <header>
                <div
                    onClick={() => dispatch(updateSection('HOME'))}
                    className='back action-link'>
                    <FontAwesomeIcon icon={faAngleLeft} />
                    Back
                </div>
            </header>
            <section id="persona_detials">
                <div className={`campaign-wrap`}>
                    <div className="campaign-header">
                        <div className="agent-details">
                            <div className="agent_details_left">
                                <div className="agent-icon agent-icon--xl has-tooltip">
                                    <div> {agent?.agent_id.slice(-4)} </div>
                                </div>
                                <div className="mt-3">
                                    <button
                                        onClick={() => dispatch(updateSection('EDIT_AGENT'))}
                                        className="mc-btn blue-hov">
                                        Edit Agent
                                    </button>
                                </div>
                            </div>
                            <div className="agent_details_right">
                                <h1>{agent?.agent_id}</h1>
                                <div className="mt-4">
                                    <AgentStatusButton
                                        status={agent.status}
                                        classes={"pill"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="persona_tabs">
                    <div className="p-5">
                        <AgentActivityList id={agent?.id} />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AgentDetails;