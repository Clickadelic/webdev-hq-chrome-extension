chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

	// since only one tab should be active and in the current window at once
	// the return variable should only have one entry
	var activeTab = tabs[0];
	var activeTabId = activeTab.id; // or do whatever you need
	console.log("Links.js", activeTabId);
 });

const btn = document.getElementById("collect-href");

btn.addEventListener("click", () => {
	chrome.tabs.query({
		active: true,
		lastFocusedWindow: true
	}, function(tabs) {
		// and use that tab to fill in out title and url
		var tab = tabs[0];
		console.log(tab);
		alert(tab);
	});
})
