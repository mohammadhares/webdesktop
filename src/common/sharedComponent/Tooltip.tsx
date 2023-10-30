import { ReactElement } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

type TooltipProps = {
    children: ReactElement
    message: string
}

export default function ToolTip({ children, message }: TooltipProps) {
    return (
        <OverlayTrigger
            placement={`top`}
            overlay={
                <Tooltip 
                    className="tooltip" 
                    id={`tooltip-top`}>
                    {message}
                </Tooltip>
            }>
            {children}
        </OverlayTrigger>
    );
}

