import React from 'react'
import DigitalClock from '../../../components/DigitalClock'

function NavBar({name}) {

	// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle
	async function getTheFile() {

		const pickerOpts = {
			types: [
				{
					description: "Images",
					accept: {
						"image/*": [".png", ".jpeg", ".jpg", ".webp"],
					},
				},
			],
			excludeAcceptAllOption: true,
			multiple: false,
		};
	  
		// open file picker
		const [fileHandle] = await window.showOpenFilePicker(pickerOpts);
		// get file contents
		const fileData = await fileHandle.getFile();
		console.log(fileData.name);
		return fileData;
	}

	return (
		<nav className="w-full">
			<ul className="navbar-grid">
				<li>
					<button onClick={getTheFile} className="p-2 block text-2xl">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-image" viewBox="0 0 16 16">
							<path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
							<path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
						</svg>
						{chrome.i18n.getMessage("BackgroundImage")}
					</button>
				</li>
				<li><a href="/" className="p-2 block text-2xl">{/*a*/}</a></li>
				<li><a href="/" className="p-2 block text-2xl">{/*a*/}</a></li>
				<li><DigitalClock label="Uhr" classes="text-white text-2xl p-3" /></li>
				<li><a href="/" className="p-2 block text-2xl">{/*a*/}</a></li>
				<li><a href="/" className="p-2 block text-2xl">{/*a*/}</a></li>
				<li><a href="/" className="p-2 block text-2xl">{/*a*/}</a></li>
			</ul>
		</nav>
	)
}

export default NavBar