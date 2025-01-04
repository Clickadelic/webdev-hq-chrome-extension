import React, { useState, useEffect } from "react";

const StopWatch = () => {
	const playIcon = (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-play" viewBox="0 0 16 16">
			<path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z" />
		</svg>
	);

	const stopIcon = (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-stop" viewBox="0 0 16 16">
			<path d="M3.5 5A1.5 1.5 0 0 1 5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11zM5 4.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5z" />
		</svg>
	);

	// state to store time
	const [time, setTime] = useState(0);

	// state to check stopwatch running or not
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		let intervalId;
		if (isRunning) {
			// setting time from 0 to 1 every 10 milisecond using javascript setInterval method
			intervalId = setInterval(() => setTime(time + 1), 10);
		}
		return () => clearInterval(intervalId);
	}, [isRunning, time]);

	// Hours calculation
	const hours = Math.floor(time / 360000);

	// Minutes calculation
	const minutes = Math.floor((time % 360000) / 6000);

	// Seconds calculation
	const seconds = Math.floor((time % 6000) / 100);

	// Milliseconds calculation
	const milliseconds = time % 100;

	// Method to start and stop timer
	const startAndStop = () => {
		setIsRunning(!isRunning);
	};

	// Method to reset timer back to 0
	const reset = () => {
		setTime(0);
	};
	return (
		<div className="flex justify-center p-2">
			<button className="text-lg mr-2 text-white hover:text-slate-300" onClick={reset}>
				{hours}:{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}:{milliseconds.toString().padStart(2, "0")}
			</button>
			<button className="text-sm mt-1 ml-2 text-white hover:text-slate-300" onClick={startAndStop}>
				{isRunning ? stopIcon : playIcon}
			</button>
		</div>
	);
};

export default StopWatch;
