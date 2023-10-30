import Window from "../desktop/Window";
import { AppWindowProps } from "./Window.type";

export default function SystemInfo({ max, min, open }: AppWindowProps) {
    return (
        <Window
            classes={`${open && 'openW'}`}
            title="System Health"
            app="SYSTEM_HEALTH"
            width="1400px"
            height="700px"
            max={max}
            min={min}>
            <div
                className="all-apps"
                style={{ overflow: 'auto' }}>
            </div>
        </Window>
    )
}