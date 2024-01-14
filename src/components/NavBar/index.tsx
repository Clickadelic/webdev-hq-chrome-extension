import React from "react";
import DigitalClock from "../DigitalClock";
import StopWatch from "../StopWatch";
import BackgroundSelector from "../BackgroundSelector";

const NavBar = () => {
	// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle
	async function getTheFile() {
		const pickerOpts = {
			types: [
				{
					description: "Images",
					accept: {
						"image/*": [".png", ".jpeg", ".jpg", ".webp"]
					}
				}
			],
			excludeAcceptAllOption: true,
			multiple: false
		};

		// open file picker
		const [fileHandle] = await window.showOpenFilePicker(pickerOpts);
		// get file contents
		const fileData = await fileHandle.getFile();
		chrome.storage.sync.set({ fileData: fileData });
	}

	return (
		<nav className="w-full bg-black/10 backdrop backdrop-blur">
			<ul className="navbar-grid">
				<li>
					<BackgroundSelector />
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
					<DigitalClock label="Uhr" classes="text-white text-2xl p-3" currentTimeStyle="long" />
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
					<a href="/" className="p-2 block text-2xl text-white">
						<span>Tobias Hopp</span>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
