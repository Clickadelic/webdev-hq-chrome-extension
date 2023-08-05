import React from 'react'
import DigitalClock from '../../../components/DigitalClock'

function NavBar({name}) {
	
	async function getTheFile() {
		const pickerOpts = {
		  types: [
			{
			  description: "Images",
			  accept: {
				"image/*": [".png", ".gif", ".jpeg", ".jpg"],
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
		return fileData;
	}

	return (
		<nav className="w-full">
			<ul className="navbar-grid">
				<li><a href="/" className="p-2 block text-2xl">{/*a*/}</a></li>
				<li><a href="/" className="p-2 block text-2xl">{/*a*/}</a></li>
				<li><a href="/" className="p-2 block text-2xl">{/*a*/}</a></li>
				<li><DigitalClock label="Uhr" classes="text-white text-2xl p-3" /></li>
				<li><a href="/" className="p-2 block text-2xl">{/*a*/}</a></li>
				<li><a href="/" className="p-2 block text-2xl">{/*a*/}</a></li>
				<li><a href="auth/google/" className="text-white">{name ? name : ''}</a></li>
			</ul>
		</nav>
	)
}

export default NavBar