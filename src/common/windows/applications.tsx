import { useDispatch } from "react-redux";
import { calculator, note } from "../../assets/icons";
import Window from "../desktop/Window";
import { AppWindowProps } from "./Window.type";
import { modifyAppStatus } from "../../features/apps/appSlice";
import { mode } from "../desktop/desktopTypes";

export default function Applications({ max, min, open }: AppWindowProps) {
    const dispatch = useDispatch();
    const handleActions = (modes: mode, app: string, value: boolean) => {
        dispatch(modifyAppStatus({
            mode: modes,
            value: value,
            app: app
        }))
    }
    return (
        <Window
            classes={`${open && 'openW'}`}
            title="Applications"
            app="APPLICATIONS"
            width="510px"
            height="300px"
            max={max}
            min={min}>
            <div className="all-apps">
                <div
                    className="apps"
                    onClick={() => handleActions("OPEN", 'CALCULATOR', true)}  >
                    <img src={calculator} width="40" alt="CALCULATOR" />
                    <h4>Calculator</h4>
                </div>

                <div
                    className="apps"
                    onClick={() => handleActions("OPEN", 'NOTE', true)}  >
                    <img src={note} width="40" alt="NOTE" />
                    <h4>Sticky Note</h4>
                </div>
                
            </div>
        </Window>
    )
}