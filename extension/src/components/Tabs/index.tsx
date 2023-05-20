import React from 'react'

function Tabs() {

	function logTabs(tabs) {
		for (const tab of tabs) {
			// tab.url requires the `tabs` permission or a matching host permission.
			console.log(tab.url);
			
		}
	}
	
	function onError(error) {
		console.error(`Error: ${error}`);
	}
	
	chrome.tabs.query({}).then(logTabs, onError);

	return (
		
		<div>asd</div>
	)
}

export default Tabs