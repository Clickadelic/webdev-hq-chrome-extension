import React from "react";

function Tabs() {
	chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
		console.log(tabs);
	});

	return (
		<div className="m-auto md:w-[760px] justify-between rounded bg-white/10 backdrop backdrop-blur p-2">
			<h2 className="text-base text-white m-auto p-2">{chrome.i18n.getMessage("tabs")}</h2>
			<hr className="mx-2" />
			<ul className="list-tabs p-4">asd</ul>
		</div>
	);
}

export default Tabs;
