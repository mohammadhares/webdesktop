import Window from "../desktop/Window";
import { AppWindowProps } from "./Window.type";

export default function WifiSpeed({ max, min, open }: AppWindowProps) {
    return (
        <Window
            classes={`${open && 'openW'}`}
            title="Connection Speed"
            app="WIFI"
            width="1400px"
            height="700px"
            max={max}
            min={min}>
            <div className="application-interface">
            </div>
        </Window>
    )
}