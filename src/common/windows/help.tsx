import Window from "../desktop/Window";
import { AppWindowProps } from "./Window.type";

export default function Help({ max, min, open }: AppWindowProps) {
    return (
        <Window
            classes={`${open && 'openW'}`}
            title="Help"
            app="HELP"
            width="500px"
            height="600px"
            max={max}
            min={min}>
            <div className="all-apps p-4">
                <h1> Help</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus neque aliquam, dignissimos eum amet quos obcaecati a
                    rchitecto facilis molestias ducimus? Consectetur vitae amet voluptas nam necessitatibus et dolore obcaecati eos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus neque aliquam, dignissimos eum amet quos obcaecati a
                    rchitecto facilis molestias ducimus? Consectetur vitae amet voluptas nam necessitatibus et dolore obcaecati eos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus neque aliquam, dignissimos eum amet quos obcaecati a
                    rchitecto facilis molestias ducimus? Consectetur vitae amet voluptas nam necessitatibus et dolore obcaecati eos.</p>
            </div>
        </Window>
    )
}