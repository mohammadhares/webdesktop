import Window from "../desktop/Window";
import { AppWindowProps } from "./Window.type";
import CalculatorHome from "../../pages/Calculator/CalculatorHome";

export default function Calculator({ max, min, open }: AppWindowProps) {
    return (
        <Window
            classes={`${open && 'openW'}`}
            title="Calculator"
            app="CALCULATOR"
            width="400px"
            height="340px"
            max={max}
            min={min}>
            <CalculatorHome />
        </Window>
    )
}