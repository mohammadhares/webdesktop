import { AppWindowProps } from './Window.type';
import Window from '../desktop/Window';
import { DECKPUNCH } from '../../app/config/constant';

export default function DeckPunch({ max, min, open }: AppWindowProps) {
  return (
    <Window
      classes={`${open && 'openW'}`}
      title="DeckPunch"
      app="DECKPUNCH"
      width="1400px"
      height="700px"
      max={max}
      min={min}>
      <div className="application-interface">
        <object data={DECKPUNCH} type="text/html">
          DeckPunch
        </object>
      </div>
    </Window>
  )
}
