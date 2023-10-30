import { AppWindowProps } from './Window.type';
import Window from '../desktop/Window';
import { DECKPUNCH } from '../../app/config/constant';

export default function Logs({ max, min, open }: AppWindowProps) {
    return (
        <Window
            classes={`${open && 'openW'}`}
            title="Logs"
            app="LOGS"
            width="1400px"
            height="700px"
            max={max}
            min={min}>
            <div className="application-interface">
                <object data={`${DECKPUNCH}/kibana/app/home`} type="text/html">
                    Logs
                </object>
            </div>
        </Window>
    )
}