import React from "react";
import DigitalClock from "../DigitalClock";
import StopWatch from "../StopWatch";
import BackgroundSelector from "../BackgroundSelector";

const NavBar = () => {
	chrome.system.cpu.getInfo(info => {
		provideCpuInfo(info);
	});
	chrome.system.display.getInfo(info => {
		provideDisplayInfo(info);
	});
	chrome.system.memory.getInfo(info => {
		provideMemoryInfo(info);
	});
	chrome.system.storage.getInfo(info => {
		provideStorageInfo(info);
	});

	function provideCpuInfo(info) {
		console.log(info.modelName);
	}
	function provideDisplayInfo(info) {
		console.log(info);
	}
	function provideMemoryInfo(info) {
		console.log(info);
	}
	function provideStorageInfo(info) {
		console.log(info);
		return info;
	}

	return (
		<nav className="w-full flex justify-between">
			<DigitalClock label="Uhr" classes="text-white text-lg p-3" currentTimeStyle="short" />
			<StopWatch />
		</nav>
	);
};

export default NavBar;
