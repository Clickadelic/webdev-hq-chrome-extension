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

		chrome.contextMenus.onClicked.addListener((info, tab) => {
			if (info.menuItemId === "addToReadingList") {
				const urlToSend = info.linkUrl || info.pageUrl

				fetch("https://example.com/api/reading-list", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({ url: urlToSend })
				})
					.then(response => {
						if (!response.ok) {
							throw new Error("Network response was not ok")
						}
						console.log("URL erfolgreich gesendet:", urlToSend)
					})
					.catch(error => {
						console.error("Fehler beim Senden der URL:", error)
					})
			}
		})
	})

	chrome.contextMenus.onClicked.addListener((info, tab) => {
		const url = info.linkUrl || info.pageUrl
		if (!url) {
			alert("Keine URL gefunden")
		}
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

	// Wenn eine Gruppe erstellt, geändert oder verschoben wird
	chrome.tabGroups.onUpdated.addListener(async group => {
		const saved = await getSavedGroups()
		const updatedGroup = {
			title: group.title,
			color: group.color
		}

		const alreadyExists = saved.some(g => g.title === updatedGroup.title && g.color === updatedGroup.color)

		if (!alreadyExists) {
			const newGroups = [...saved, updatedGroup]
			chrome.storage.local.set({ savedGroups: newGroups })
			console.log("Neue Gruppe gespeichert:", updatedGroup)
		}
	})

	// Optional: Wenn Gruppe gelöscht wird, könnten wir sie trotzdem behalten
	chrome.tabGroups.onRemoved.addListener(async groupId => {
		console.log("Gruppe wurde geschlossen:", groupId)
		// Optional: Entferne sie NICHT aus dem Speicher
	})

	// Hilfsfunktion zum Laden
	async function getSavedGroups(): Promise<{ title?: string; color: string }[]> {
		return new Promise(resolve => chrome.storage.local.get(["savedGroups"], res => resolve(res.savedGroups || [])))
	}
})
