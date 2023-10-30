import { useEffect, useState } from "react";
import { dateTimeOptions } from "./Component.util";
import moment from "moment";

export const CurrentDTZ = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);


    return (
        <div className="asc-datetime">
            <div className="asc-date">
                <i className="fa fa-calendar" />
                {moment().format('D MMM YY , Z')}
            </div>
            <div className="asc-time">
                <i className="fa fa-clock-o" />
                {dateTime.toLocaleString(undefined, dateTimeOptions)}
            </div>
        </div>
    );
}

