export default defineBackground(() => {
	chrome.runtime.onInstalled.addListener(() => {
		console.log(chrome.i18n.getMessage("console_log_on_installed", "WebDev HQ Chrome-Extension installed."))
	})

	interface StorageData {
		backgroundImageUrl?: string
		lastFetchedDate?: string
		unsplashUrl?: string
		author?: string
		authorUrl?: string
		unsplashResponse?: any
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

	chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
		if (message.action === "getRandomImage") {
			handleRandomImage(sendResponse)
			return true // keep channel open for async response
		}
	})

	async function handleRandomImage(sendResponse: (response: any) => void) {
		const today = new Date().toISOString().split("T")[0]

		try {
			const data = await getFromStorage<StorageData>(["backgroundImageUrl", "lastFetchedDate", "unsplashResponse"])
			if (data.unsplashResponse && data.lastFetchedDate === today) {
				// Wir haben den ganzen Unsplash-Response bereits gespeichert
				sendResponse(data.unsplashResponse)
			} else {
				const res = await fetch(`${import.meta.env.WXT_API_URL}/common/v1/chrome-extension/random-image`)
				const json = await res.json()

				await setToStorage({
					unsplashResponse: json,
					lastFetchedDate: today
				})

				sendResponse(json)
			}
		} catch (e) {
			console.error("Error loading:", e)
			sendResponse({ error: "fetch_failed" })
		}
	}

	chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
		if (message.action === "getHistory") {
			getHistory().then(history => {
				sendResponse({ history })
			})
		}
		return true // Asynchronous response
	})

	function getHistory() {
		return new Promise((resolve, reject) => {
			chrome.history.search({ text: "", maxResults: 10 }, function (results) {
				resolve(results)
			})
		})
	}

	chrome.action.onClicked.addListener(tab => {
		if (tab.id) {
			chrome.scripting.executeScript({
				target: { tabId: tab.id },
				files: ["meazure-script.js"]
			})
		}
	})
})
