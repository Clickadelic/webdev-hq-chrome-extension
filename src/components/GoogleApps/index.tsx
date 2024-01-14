import React from "react";
import { googleapps } from "../../constants";

const GoogleApps = () => {
	const currentApps = googleapps.map(app => {
		return (
			<li key={app.id} className="flex flex-col group items-center justify-center">
				<a
					href={app.href}
					title={app.title}
					target={app.target}
					className="w-20 h-20 flex flex-col justify-center items-center text-center backdrop-blur-sm bg-white/10 group-hover:bg-white rounded-lg"
				>
					<img src={app.icon} className="w-10 h-10 p-1" alt={app.title} />
					<span className="text-sm mt-1 text-white group-hover:text-slate-800 break-normal">{app.title}</span>
				</a>
			</li>
		);
	});

	return (
		<div className="m-auto md:w-[760px] justify-between">
			<ul className="grid grid-cols-8 gap-3 content-center items-center rounded-b">{currentApps}</ul>
		</div>
	);
};

export default GoogleApps;
