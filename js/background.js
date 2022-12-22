chrome.tabs.onActivated.addListener((tab) => {
	console.log(tab);
})
chrome.downloads.search({}, (items) => {
	items.forEach((item) => {
		if (item.endTime)
		console.log(new Date(item.endTime))
	})
})