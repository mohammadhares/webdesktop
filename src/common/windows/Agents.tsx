import Window from "../desktop/Window";
import AgentsMain from "../../pages/Agents/AgentsMain";
import { AppWindowProps } from "./Window.type";

export default function Agents({ max, min, open }: AppWindowProps) {
    return (
        <Window
            classes={`${open && 'openW'}`}
            title="Agents"
            app="AGENTS"
            width="1600px"
            height="750px"
            max={max}
            min={min}>
            <div
                className="application-interface"
                style={{ overflow: 'auto' }}>
                <AgentsMain />
            </div>
        </Window>
    )
}