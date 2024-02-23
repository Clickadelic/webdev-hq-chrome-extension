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
		<nav className="w-full">
			<ul className="navbar-grid">
				<li>
					<div className="bg-white/30 backdrop-blur rounded-md">
						<progress>100%</progress>
					</div>
				</li>
				<li>
					<a href="/" className="p-2 block text-2xl">
						{/*a*/}
					</a>
				</li>
				<li>
					<a href="/" className="p-2 block text-2xl">
						{/*a*/}
					</a>
				</li>
				<li>
					<DigitalClock label="Uhr" classes="text-white text-lg p-3" currentTimeStyle="short" />
				</li>
				<li>
					<StopWatch />
				</li>
				<li>
					<a href="/" className="p-2 block text-2xl">
						{/*a*/}
					</a>
				</li>
				<li>
					<a href="/" className="p-2 block text-lg text-white">
						asd
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
