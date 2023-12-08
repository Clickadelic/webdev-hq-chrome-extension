import React from "react"

function GoogleApps() {
	const path = "../../static/icons/google-apps/"
	const apps = [
		{
			id: "gmail",
			title: "G-Mail",
			href: "https://mail.google.com/"
		},
		{
			id: "docs",
			title: "Docs",
			href: "https://docs.google.com/document/u/0/"
		}
	]
	const currentApps = apps.map(app => {
		return (
			<li key={app.id} className="bg-slate-100 rounded p-3 w-[32px]">
				<a href={app.href}>{app.title}</a>
			</li>
		)
	})

	return (
		<div className="m-auto md:w-[760px] justify-between rounded bg-white/10 backdrop backdrop-blur p-2">
			<ul className="grid grid-cols-12 gap-4 content-center items-center p-2 rounded-b">{currentApps}</ul>
		</div>
	)
}

export default GoogleApps
