import React from 'react'

function GoogleApps() {
	return (
		<div className="flex justify-between p-2 rounded-b">
			<a href="https://mail.google.com/mail/u/0/" className="rounded-full backdrop backdrop-blur bg-white/10 hover:bg-slate-300 px-2 py-3" target="_blank" title="G-Mail">
				<img src="../../../../static/icons/google-apps/set2/google-gmail-icon.svg" width="24" height="24" className="gmail" alt="G-Mail" />
			</a>
			<a href="https://www.google.com/business/" className="rounded-full backdrop backdrop-blur bg-white/10 hover:bg-slate-300 px-2 py-3" target="_blank" title="My Busyness">
				<img src="../../../../static/icons/google-apps/set2/google-my-business-icon.svg" width="24" height="24" className="my-business" alt="My Business" />
			</a>
			<a href="https://drive.google.com/" className="rounded-full backdrop backdrop-blur bg-white/10 hover:bg-slate-300 px-2 py-3" target="_blank" title="Drive">
				<img src="../../../../static/icons/google-apps/set2/google-drive-color-icon.svg" width="24" height="24" className="drive" alt="Drive" />
			</a>
			<a href="https://calendar.google.com/" className="rounded-full backdrop backdrop-blur bg-white/10 hover:bg-slate-300 px-2 py-3" target="_blank" title="Drive">
				<img src="../../../../static/icons/google-apps/set2/google-calendar-icon.svg" width="24" height="24" className="calendar" alt="Calendar" />
			</a>
			<a href="https://youtube.com/" className="rounded-full backdrop backdrop-blur bg-white/10 hover:bg-slate-300 px-2 py-3" target="_blank" title="Drive">
				<img src="../../../../static/icons/google-apps/set2/youtube-color-icon.svg" width="24" height="24" className="calendar" alt="Calendar" />
			</a>
		</div>
	)
}

export default GoogleApps