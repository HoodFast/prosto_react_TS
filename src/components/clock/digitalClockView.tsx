import React from "react";
import {getStringTwoDigit, ViewClockType} from "./clock";

export const DigitalClockView: React.FC<ViewClockType> = ({date}) => {
    return <><span>{getStringTwoDigit(date.getHours())}</span>
        :
        <span>{getStringTwoDigit(date.getMinutes())}</span>
        :
        <span>{getStringTwoDigit(date.getSeconds())}</span>
    </>
}