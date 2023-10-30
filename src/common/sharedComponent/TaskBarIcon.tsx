import { useDispatch } from "react-redux";
import { modifyAppStatus } from "../../features/apps/appSlice";

type TaskBarProps = {
    icon: string,
    title: string,
    min: boolean,
    open: boolean,
    app: string
}

export default function TaskBarIcon({ icon, title, min, open, app }: TaskBarProps) {
    const dispatch = useDispatch();
    return (
        <>
            {open && (
                <div
                    className={`taskbar-icons ${min && 'min-border'}`}
                    onClick={() => dispatch(modifyAppStatus({ mode: 'MIN', value: !min, app: app }))}>
                    <img src={icon} alt={title} />
                </div>
            )}
        </>
    )
}