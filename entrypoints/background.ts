export default defineBackground(() => {
	// installation message in console
	chrome.runtime.onInstalled.addListener(() => {
		console.log(chrome.i18n.getMessage("console_log_on_installed"))
	})

	interface StorageData {
		backgroundImageUrl?: string
		lastFetchedDate?: string
		unsplashUrl?: string
		author?: string
		authorUrl?: string
	}
	function setToStorage(items: Record<string, any>): Promise<void> {
		return new Promise((resolve, reject) => {
			chrome.storage.local.set(items, () => {
				const err = chrome.runtime.lastError
				if (err) {
					reject(err)
				} else {
					resolve()
				}
			})
		})
	}

	function getFromStorage<T>(keys: string[]): Promise<T> {
		return new Promise((resolve, reject) => {
			chrome.storage.local.get(keys, items => {
				const err = chrome.runtime.lastError
				if (err) {
					reject(err)
				} else {
					resolve(items as T)
				}
			})
		})
	}

	chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
		if (message.action === "getRandomImage") {
			;(async () => {
				const today = new Date().toISOString().split("T")[0]

				const data = await getFromStorage<StorageData>(["backgroundImageUrl", "lastFetchedDate"])

				if (data.backgroundImageUrl && data.lastFetchedDate === today) {
					sendResponse({
						url: data.backgroundImageUrl,
						author: data.author,
						authorUrl: data.authorUrl,
						link: data.unsplashUrl
					})
				} else {
					try {
						const res = await fetch(`${import.meta.env.WXT_API_URL}/common/v1/extension/random-image`)
						const json = await res.json()

						// json ist direkt das Bildobjekt, kein json.response!
						const imageUrl = json.url

						await setToStorage({
							backgroundImageUrl: imageUrl,
							lastFetchedDate: today,
							unsplashUrl: json.link,
							author: json.author,
							authorUrl: json.authorUrl
						})

						sendResponse({
							url: imageUrl,
							author: json.author,
							authorUrl: json.authorUrl,
							link: json.link
						})
					} catch (e) {
						console.error("Error loading:", e)
						sendResponse({ url: null })
					}
				}
			})()

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
