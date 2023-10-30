import { AppWindowProps } from './Window.type';
import Window from '../desktop/Window';
import { PATAKA_URL } from '../../app/config/constant';

export default function Pataka({ max, min, open }: AppWindowProps) {
  return (
    <Window
      classes={`${open && 'openW'}`}
      title="Pataka"
      app="PATAKA"
      width="1400px"
      height="700px"
      max={max}
      min={min}>
      <div className="application-interface">
        <object data={PATAKA_URL} type="text/html">
          Pataka
        </object>
      </div>
    </Window>
  )
}