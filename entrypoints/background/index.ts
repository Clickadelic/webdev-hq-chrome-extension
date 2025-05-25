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
			return true // Wichtig!
		}
	})

	async function handleRandomImage(sendResponse: (response: any) => void) {
		const today = new Date().toISOString().split("T")[0]

		try {
			const data = await getFromStorage<StorageData>(["backgroundImageUrl", "lastFetchedDate", "author", "authorUrl", "unsplashUrl"])

			if (data.backgroundImageUrl && data.lastFetchedDate === today) {
				sendResponse({
					url: data.backgroundImageUrl,
					author: data.author,
					authorUrl: data.authorUrl,
					link: data.unsplashUrl
				})
			} else {
				const res = await fetch(`${import.meta.env.WXT_API_URL}/common/v1/chrome-extension/random-image`)
				const json = await res.json()

				await setToStorage({
					backgroundImageUrl: json.url,
					lastFetchedDate: today,
					unsplashUrl: json.link,
					author: json.author,
					authorUrl: json.authorUrl
				})

				sendResponse({
					url: json.url,
					author: json.author,
					authorUrl: json.authorUrl,
					link: json.link
				})
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
