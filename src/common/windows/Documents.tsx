import { AppWindowProps } from './Window.type';
import Window from '../desktop/Window';
import DocHome from '../../pages/Documents/DocHome';

export default function Documents({ max, min, open }: AppWindowProps) {
    return (
        <Window
            classes={`${open && 'openW'}`}
            title="Documents"
            app="DOCUMENTS"
            width="1400px"
            height="700px"
            max={max}
            min={min}>
            <div className="application-interface">
                <DocHome />
            </div>
        </Window>
    )
}
