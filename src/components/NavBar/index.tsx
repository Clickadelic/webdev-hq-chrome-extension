import React from "react";
import DigitalClock from "../DigitalClock";
import StopWatch from "../StopWatch";

function NavBar({ name }) {
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
					<button onClick={getTheFile} className="p-2 flex text-base text-white hover:text-slate-300">
						<span className="mt-1">{chrome.i18n.getMessage("BackgroundImage")}</span>
					</button>
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
					<DigitalClock label="Uhr" classes="text-white text-2xl p-3" />
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
					<a href="/" className="p-2 block text-2xl">
						<span>Tobias Hopp</span>
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
