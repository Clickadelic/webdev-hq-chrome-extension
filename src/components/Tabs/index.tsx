import React from 'react'

function Tabs() {

	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
		let url = tabs[0].url;
		// use `url` here inside the callback because it's asynchronous!
		console.log("Tabs are:", Tabs, "Urls are:", url);
	});

	return (
		<div className="m-auto md:w-[760px] justify-between rounded bg-white/10 backdrop backdrop-blur p-2">
			<ul className="list-tabs p-4">
				<li><input type="checkbox" name="tabname" /><a href="/">Tabs</a></li>
			</ul>
		</div>
	)
}

export default Tabs