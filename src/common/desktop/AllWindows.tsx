import { useSelector } from "react-redux";
import { App, AppMainState } from "../../features/apps/app.types";
import { WindowList } from "./WindowList";

export default function AllWindows() {
    const apps = useSelector((state: AppMainState) => state.apps.apps);
    return (
        <div className="all-windows">
            {apps?.map((item: App, index: number) => {
                if (item.open) {
                    const Window = WindowList[index];
                    return (
                        <Window
                            open={item.open}
                            min={item.min}
                            max={item.max}
                            key={index}
                        />
                    );
                }
                return <></>
            })}
        </div>
    );
}
