import React from "react";
import { useState } from "react";

interface DigitalClockProps {
	label?: string;
	classes?: string;
}

const DigitalClock = ({ label, classes }: DigitalClockProps) => {
	// options timeStyle:
	// {hour: '2-digit', minute:'2-digit', hour12: false}
	let time = new Date().toLocaleTimeString([], { timeStyle: "short" });
	const [currentTime, setCurrentTime] = useState(time);
	const UpdateTime = () => {
		time = new Date().toLocaleTimeString([], { timeStyle: "short" });
		setCurrentTime(time);
	};
	setInterval(UpdateTime);
	return (
		<div className={`${classes}`}>
			<span className="current-time inline-block mr-2">{currentTime}</span>
			<span className="clock-label text-small">{label}</span>
		</div>
	);
};

export default DigitalClock;
