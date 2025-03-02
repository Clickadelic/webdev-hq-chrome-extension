import React from "react";
import { apps } from "../../constants";

function GoogleApps() {
	const currentApps = apps.map(app => {
		return (
			<li key={app.id}>
				<a href={app.href} title={app.title} target={app.target} className="w-16 h-16 flex justify-center items-center bg-slate-200 hover:bg-white hover:glow rounded-lg">
					<img src={app.icon} className="w-8 h-8" alt={app.title} />
				</a>
			</li>
		);
	});

	return (
		<div className="m-auto md:w-[760px] justify-between">
			<ul className="grid grid-cols-10 gap-4 content-center items-center rounded-b">{currentApps}</ul>
		</div>
	);
}

export default GoogleApps;
