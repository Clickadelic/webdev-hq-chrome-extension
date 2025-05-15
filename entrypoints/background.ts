export default defineBackground(() => {
	chrome.runtime.onInstalled.addListener(() => {
		console.log(chrome.i18n.getMessage("console_log_on_installed"))
	})

	chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
		if (message.action === "fetchAndStoreBackgroundImage") {
			fetch("https://api.webdev-hq.com/common/v1/extension/daily-image")
				.then(res => res.json())
				.then(data => {
					const imageUrl = data.response.urls.regular
					chrome.storage.local.set({ backgroundImageUrl: imageUrl }, () => {
						sendResponse({ success: true, imageUrl })
					})
				})
				.catch(err => {
					console.error("Fehler beim Laden des Bildes:", err)
					sendResponse({ success: false })
				})
			return true
		}
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

	chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
		if (message.action === "getLinks") {
			const links = await getLinksFromAPI()
			sendResponse({ links })
		}
	})
	async function getLinksFromAPI() {
		const response = await fetch("https://cms.tobias-hopp.de/wp-json/wp/v2/links", { method: "GET" })
		return response.json()
	}

	chrome.runtime.onInstalled.addListener(() => {
		chrome.contextMenus.create({
			id: "trigger-messwerkzeug",
			title: "Messwerkzeug starten",
			contexts: ["all"]
		})
	})

	chrome.contextMenus.onClicked.addListener((info, tab) => {
		if (info.menuItemId === "trigger-messwerkzeug") {
			chrome.scripting.executeScript({
				target: { tabId: tab?.id || 0 },
				func: () => {
					chrome.runtime.sendMessage({ action: "start-messwerkzeug" })
				}
			})
		}
	})
})
