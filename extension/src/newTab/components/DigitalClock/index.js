import React from 'react';
import { useState } from 'react';
function DigitalClock({ label, textClasses, backgroundClasses }) {
    // Instead of options timeStyle: short, use code below
    // {hour: '2-digit', minute:'2-digit', hour12: false}
    let time = new Date().toLocaleTimeString([], { timeStyle: 'short' });
    const [currentTime, setCurrentTime] = useState(time);
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString([], { timeStyle: 'short' });
        setCurrentTime(time);
    };
    setInterval(UpdateTime);
    return (React.createElement("div", { className: "flex justify-center " + `${textClasses} ${backgroundClasses}` },
        React.createElement("span", { className: "current-time inline-block mr-2" }, currentTime),
        React.createElement("span", { className: "clock-label text-small" }, label)));
}
export default DigitalClock;
