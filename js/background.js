chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: {tabId: tab.id},
		files: ['./content-script.js']
	});
});

console.log("Background js logged this one")