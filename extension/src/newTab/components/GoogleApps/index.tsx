import React from 'react'

function GoogleApps() {
	return (
		<div className="flex justify-between p-2 rounded-b">
			<a href="/" className="bg-white rounded-full p-2" target="_blank"><img src="../../../../static/icons/google-apps/google-gmail-icon.svg" className="gmail" alt="G-Mail" /></a>
			<a href="/" className="bg-white rounded-full p-2" target="_blank">Sheets</a>
			<a href="/" className="bg-white rounded-full p-2" target="_blank">Presentations</a>
			<a href="/" className="bg-white rounded-full p-2" target="_blank">Drive</a>
			<a href="/" className="bg-white rounded-full p-2" target="_blank">Mail</a>
			<a href="/" className="bg-white rounded-full p-2" target="_blank">YouTube</a>
		</div>
	)
}

export default GoogleApps