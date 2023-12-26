import React from "react";
import { apps } from "../../constants";

function GoogleApps() {
	const currentApps = apps.map(app => {
		return (
			<li key={app.id} className="group">
				<a
					href={app.href}
					title={app.title}
					target={app.target}
					className="w-20 h-20 flex flex-col justify-center items-center  text-center backdrop-blur-sm bg-white/10 group-hover:bg-white rounded-lg"
				>
					<img src={app.icon} className="w-8 h-8 p-1" alt={app.title} />
					<span className="text-sm m-1 text-white group-hover:text-slate-600">{app.title}</span>
				</a>
			</li>
		);
	});

	return (
		<div className="m-auto md:w-[760px] justify-between">
			<ul className="grid grid-cols-8 gap-4 content-center items-center rounded-b">{currentApps}</ul>
		</div>
	);
}

export default GoogleApps;
