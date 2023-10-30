import { AppWindowProps } from './Window.type';
import Window from '../desktop/Window';
import SystemSettingMain from '../../pages/SystemSetting';

export default function SystemSetting({ max, min, open }: AppWindowProps) {
    return (
        <Window
            classes={`${open && 'openW'}`}
            title="System Settings"
            app="SYSTEM_SETTINGS"
            width="1400px"
            height="700px"
            max={max}
            min={min}>
            <div className="application-interface" style={{ overflow: 'auto'}}>
                <SystemSettingMain />
            </div>
        </Window>
    )
}