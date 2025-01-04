import React from "react";
import { useState } from "react";
const DigitalClock = ({ label, classes, currentTimeStyle }) => {
    let time = new Date().toLocaleTimeString([], { timeStyle: currentTimeStyle });
    const [currentTime, setCurrentTime] = useState(time);
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString([], { timeStyle: currentTimeStyle });
        setCurrentTime(time);
    };
    setInterval(UpdateTime);
    return (React.createElement("div", { className: `${classes}` },
        React.createElement("span", { className: "current-time inline-block mr-2" }, currentTime),
        React.createElement("span", { className: "clock-label text-small" }, label)));
};
export default DigitalClock;
