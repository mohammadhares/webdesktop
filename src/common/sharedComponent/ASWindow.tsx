import { Rnd } from "react-rnd";

export default function ASWindow() {
    return (
        <Rnd
            className="asc_window"
            default={{ x: 400, y: 400, width: 700, height: 500 }}>
            <header className="asc_window_header">
                Window Header
            </header>
            <section className="asc_window_body">
                <object style={{ width: "100%", height: "100%" }}
                    data={'http://localhost:3000/home'} type="text/html">
                    safd
                </object>
            </section>
        </Rnd>
    );
}
