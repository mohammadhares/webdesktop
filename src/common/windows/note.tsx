import Window from "../desktop/Window";
import { AppWindowProps } from "./Window.type";

export default function Note({ max, min, open }: AppWindowProps) {
    return (
        <Window
            classes={`${open && 'openW'}`}
            title="Sticky Note"
            app="NOTE"
            width="500px"
            height="600px"
            max={max}
            min={min}>
            <div className="sticky-note">
                <textarea autoFocus={true} name="note" />
            </div>
        </Window>
    )
}