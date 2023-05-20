import React from 'react'


function GoogleApps({classes}) {

	const apps = [
		{
			id: 'gmail',
			title: 'G-Mail',
			url: 'https://mail.google.com/',
			icon: 'google-svg.svg'
		},
		{
			id: 'docs',
			title: 'Docs',
			url: 'https://docs.google.com/document/u/0/',
			icon: 'google-docs.svg'
		}
	]

	return (
		<div className={classes}>
			<ul className="grid grid-cols-12 gap-4 align-center p-2 rounded-b">
				<li>
					<a href="https://docs.google.com/" className="bg-white rounded-full p-1 block" target="_self">
						<img src="../../static/icons/google-apps/google-docs.svg" width="16" alt="Google Docs" />
					</a>
				</li>
				<li>
					<a href="https://docs.google.com/spreadsheets/" className="bg-white rounded-full p-1 block" target="_self">
						<img src="../../static/icons/google-apps/google-sheets.svg" width="16" alt="Google Sheets" />
					</a>
				</li>
				<li>
					<a href="https://docs.google.com/slides/" className="bg-white rounded-full p-1 block" target="_self">
						<img src="../../static/icons/google-apps/google-slides.svg" width="16" alt="Google Slides" />
					</a>
				</li>
				<li>
					<a href="https://docs.google.com/forms/u/0/?tgif=d" className="bg-white rounded-full p-1 block" target="_self">
						<img src="../../static/icons/google-apps/google-forms.svg" width="16" alt="Google Slides" />
					</a>
				</li>
				<li>
					<a href="https://mail.google.com/" className="bg-white rounded-full p-1 block" target="_self">
						<img src="../../static/icons/google-apps/google-gmail.svg" width="22" alt="G-Mail" />
					</a>
				</li>
				<li>
					<a href="https://drive.google.com/drive/my-drive" className="bg-white rounded-full p-1 block" target="_self">
						<img src="../../static/icons/google-apps/google-drive.svg" width="22" alt="Google Drive" />
					</a>
				</li>
				<li>
					<a href="https://calendar.google.com/calendar/u/0/r" className="bg-white rounded-full p-1 block" target="_self">
						<img src="../../static/icons/google-apps/google-calendar.svg" width="22" alt="Google Calendar" />
					</a>
				</li>
				<li>
					<a href="https://www.youtube.com/" className="bg-white rounded-full p-1 block" target="_self">
						<img src="../../static/icons/google-apps/youtube-color-icon.svg" width="22" alt="YouTube" />
					</a>
				</li>
				<li>
					<a href="https://search.google.com/search-console/about" className="bg-white rounded-full p-1 block" target="_self">
						<img src="../../static/icons/google-apps/google-search-console.svg" width="22" alt="Google Search Console" />
					</a>
				</li>
				<li>
					<a href="https://domains.google/" className="bg-white rounded-full p-1 block" target="_self">
						<img src="../../static/icons/google-apps/google-domains.svg" width="22" alt="Google Domains" />
					</a>
				</li>
				<li>
					<a href="https://toolbox.googleapps.com/apps/checkmx/" className="bg-white rounded-full p-1 block" target="_self">
						<img src="../../static/icons/google-apps/g-logo.svg" width="22" alt="Google MX Check" />
					</a>
				</li>
			</ul>
		</div>
	)
}

export default GoogleApps