chrome.runtime.onInstalled.addListener(() => {
	console.log("huhu")
})

chrome.bookmarks.onCreated.addListener(() => {
	console.log("Bookmark created")
})