import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initDragElement, initResizeElement } from "../../style/script";
import { modifyAppStatus } from "../../features/apps/appSlice";
import { WindowProps, mode } from "./desktopTypes";

const Window = ({ children, title, app, classes, width, height, min, max, }: WindowProps) => {

  const dispatch = useDispatch();

  useEffect(() => {
    initDragElement();
    initResizeElement();
  }, []);

  const handleWindowActions = (modes: mode, value: boolean) => {
    dispatch(modifyAppStatus({
      mode: modes,
      value: value,
      app: app
    }))
  }

  return (
    <div
      className={`popup ${classes} ${max && 'max'} ${min && 'min'}`}
      style={{ width: width, height: height }}>
      <div
        onDoubleClick={() => handleWindowActions('MAX', !max)}
        className="popup-header">
        <div className="leading-left">
          <i
            title="Close"
            className="fa fa-times bg-close"
            onClick={() => handleWindowActions("OPEN", false)} />
          <i
            title="Minimize"
            className="fa fa-minus bg-min"
            onClick={() => handleWindowActions("MIN", !min)} />
          <i
            title="Maximize"
            className="fa fa-sort  bg-max"
            onClick={() => handleWindowActions("MAX", !max)} />
        </div>
        <b className="window-title">{title}</b>
      </div>
      <div className="window-contents">
        {children}
      </div>
    </div>
  );
}

export default Window;