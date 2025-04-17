export default defineBackground(() => {
	chrome.runtime.onInstalled.addListener(() => {
		console.log("Chrome Extension installiert!")
	})

	chrome.runtime.onInstalled.addListener(() => {
		chrome.contextMenus.create({
			id: "addToReadingList",
			title: "Zur Reading List hinzufügen",
			contexts: ["page", "link"]
		})
	})

	chrome.contextMenus.onClicked.addListener((info, tab) => {
		const url = info.linkUrl || info.pageUrl
		if (!url) return
		chrome.storage.sync.get(["readingList"], result => {
			const list: string[] = result.readingList || []
			if (!list.includes(url)) {
				list.push(url)
				chrome.storage.sync.set({ readingList: list })
			}
		})
	})

	function getHistory() {
		return new Promise((resolve, reject) => {
			chrome.history.search({ text: "", maxResults: 10 }, function (results) {
				resolve(results)
			})
		})
	}

	chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
		if (message.action === "getHistory") {
			getHistory().then(history => {
				sendResponse({ history })
			})
		}
		return true // Asynchronous response
	})
})
