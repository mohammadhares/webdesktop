import { useSelector } from "react-redux";
import AgentDetails from "./AgentDetails";
import AgentsHome from "./AgentsHome";
import './../../style/agents/agentStyles.css';
import AddAgent from "./Forms/AddAgent";
import EditAgent from "./Forms/EditAgent";

const AgentsMain = () => {
    const section = useSelector((state: any) => state.agents.section);

    return (
        <>
            {section === 'HOME' && <AgentsHome />}
            {section === 'DETAILS' && <AgentDetails />}
            {section === 'ADD_AGENT' && <AddAgent />}
            {section === 'EDIT_AGENT' && <EditAgent />}
        </>
    )
}

export default AgentsMain;