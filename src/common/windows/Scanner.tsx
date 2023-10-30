import ScannerMain from "../../pages/Scanners/ScannerMain";
import Window from "../desktop/Window";
import { AppWindowProps } from "./Window.type";

export default function Scanner({ max, min, open }: AppWindowProps) {
    return (
        <Window
            classes={`${open && 'openW'}`}
            title="Scanner"
            app="SCANNER"
            width="1400px"
            height="700px"
            max={max}
            min={min}>
            <div
                className="application-interface"
                style={{ overflow: 'auto' }}>
                <ScannerMain />
            </div>
        </Window>
    )
}