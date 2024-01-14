import React from "react";
import { useState } from "react";

interface DigitalClockProps {
	label?: string;
	classes?: string;
	currentTimeStyle?: "full" | "long" | "medium" | "short";
}

const DigitalClock = ({ label, classes, currentTimeStyle }: DigitalClockProps) => {
	let time = new Date().toLocaleTimeString([], { timeStyle: currentTimeStyle });
	const [currentTime, setCurrentTime] = useState(time);
	const UpdateTime = () => {
		time = new Date().toLocaleTimeString([], { timeStyle: currentTimeStyle });
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
