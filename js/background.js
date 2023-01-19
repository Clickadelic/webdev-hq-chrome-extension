// Run onboarding on installation
chrome.runtime.onInstalled.addListener((reason) => {
	if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
	  chrome.tabs.create({
		url: 'onboarding.html'
	  });
	}
});

// Log current tabs
async function getCurrentTab() {
	let queryOptions = { active: true, lastFocusedWindow: true };
	// `tab` will either be a `tabs.Tab` instance or `undefined`.
	let [tab] = await chrome.tabs.query(queryOptions);
	console.log(tab)
	return tab;
}

chrome.tabs.onActivated.addListener((tab) => {
	console.log(tab);
})

// chrome.downloads.search({}, (items) => {
// 	items.forEach((item) => {
// 		if (item.endTime)
// 		console.log(new Date(item.endTime))
// 	})
// })

// background.js
chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: {tabId: tab.id},
		files: ['content.js']
	})
})

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

	if (request.message == 'buttonClicked') {
		// Create a new tab with options page
		alert("huhu")
	}
});