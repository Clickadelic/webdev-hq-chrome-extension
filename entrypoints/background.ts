export default defineBackground(() => {
	chrome.runtime.onInstalled.addListener(() => {
		console.log(chrome.i18n.getMessage("console_log_on_installed"))
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

	chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
		if (message.action === "getHistory") {
			getHistory().then(history => {
				sendResponse({ history })
			})
		}
		return true // Asynchronous response
	})

	chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
		if (msg.type === "getHardwareInfo") {
			Promise.all([chrome.system.cpu.getInfo(), chrome.system.memory.getInfo(), chrome.system.storage.getInfo()]).then(([cpu, memory, storage]) => {
				sendResponse({ cpu, memory, storage })
			})

			// Async response
			return true
		}
	})

	function getHistory() {
		return new Promise((resolve, reject) => {
			chrome.history.search({ text: "", maxResults: 10 }, function (results) {
				resolve(results)
			})
		})
	}
})
