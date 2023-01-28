chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
	  console.log(sender.tab ?
				  "from a content script:" + sender.tab.url :
				  "from the extension");
	  if (request.greeting === "hello")
		sendResponse({farewell: "goodbye"});
	}
);

// Log current tabs
async function getCurrentTab() {
	let queryOptions = { active: true, lastFocusedWindow: true }
	// `tab` will either be a `tabs.Tab` instance or `undefined`.
	let [tab] = await chrome.tabs.query(queryOptions)
	console.log("GetCurrentTab", tab)
	return tab
}

getCurrentTab()