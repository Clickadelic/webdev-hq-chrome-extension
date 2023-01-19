// Run onboarding on installation
chrome.runtime.onInstalled.addListener((reason) => {
	if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
		chrome.tabs.create({
			url: 'onboarding.html'
		})
	}
})

// Log current tabs
async function getCurrentTab() {
	let queryOptions = { active: true, lastFocusedWindow: true }
	// `tab` will either be a `tabs.Tab` instance or `undefined`.
	let [tab] = await chrome.tabs.query(queryOptions)
	console.log("GetCurrentTab", tab)
	return tab
}

chrome.tabs.onActivated.addListener((tab) => {
	console.log("OnActivated:", tab)
})