export default defineBackground(() => {
	chrome.runtime.onInstalled.addListener(() => {
		console.log(chrome.i18n.getMessage("console_log_on_installed", "WebDev HQ Chrome-Extension installed."))
		// Direkt beim Install die Seasonal-Image Daten laden
		fetchSeasonalImage().catch(console.error)
	})

	interface StorageData {
		backgroundImageUrl?: string
		lastFetchedDate?: string
		seasonalImageResponse?: any
	}

	function setToStorage(items: Record<string, any>): Promise<void> {
		return new Promise((resolve, reject) => {
			chrome.storage.local.set(items, () => {
				const err = chrome.runtime.lastError
				if (err) reject(err)
				else resolve()
			})
		})
	}

	function getFromStorage<T>(keys: string[]): Promise<T> {
		return new Promise((resolve, reject) => {
			chrome.storage.local.get(keys, items => {
				const err = chrome.runtime.lastError
				if (err) reject(err)
				else resolve(items as T)
			})
		})
	}

	/**
	 * Fetches the Seasonal Image from API or from Storage if already fetched today
	 */
	async function fetchSeasonalImage(): Promise<any> {
		const today = new Date().toISOString().split("T")[0]
		try {
			const data = await getFromStorage<StorageData>(["seasonalImageResponse", "lastFetchedDate"])
			if (data.seasonalImageResponse && data.lastFetchedDate === today) {
				// Schon für heute geladen
				return data.seasonalImageResponse
			} else {
				// Fetch vom API Endpoint
				const res = await fetch(`${import.meta.env.WXT_API_URL}/background/seasonal?collections=4lffCviDg28&response=json`)
				const json = await res.json()

				await setToStorage({
					seasonalImageResponse: json,
					lastFetchedDate: today,
					backgroundImageUrl: json.url
				})

				return json
			}
		} catch (e) {
			console.error("Error fetching seasonal image:", e)
			return { error: "fetch_failed" }
		}
	}

	/**
	 * Prüft beim Öffnen jeder Seite, ob ein neues Bild geholt werden muss
	 */
	chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
		if (changeInfo.status === "complete") {
			fetchSeasonalImage().catch(err => console.error("Auto-update failed:", err))
		}
	})

	/**
	 * Message Listener
	 */
	chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
		if (message.action === "getRandomImage") {
			fetchSeasonalImage().then(sendResponse)
			return true // keep channel open for async response
		}

		if (message.action === "getHistory") {
			getHistory().then(history => sendResponse({ history }))
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

	/**
	 * Action Button Klick
	 */
	chrome.action.onClicked.addListener(tab => {
		if (tab.id) {
			chrome.scripting.executeScript({
				target: { tabId: tab.id },
				files: ["meazure-script.js"]
			})
		}
	})
})
