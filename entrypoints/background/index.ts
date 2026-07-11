export default defineBackground(() => {
	// ==========================================
	// 1. ZENTRALES INSTALL-EVENT
	// ==========================================
	chrome.runtime.onInstalled.addListener(() => {
		console.log(chrome.i18n.getMessage("console_log_on_installed", "WebDev HQ Chrome-Extension installed."));

		// Seasonal-Image Daten laden
		fetchSeasonalImage().catch(console.error);

		// Kontextmenü erstellen
		chrome.contextMenus.create({
			id: "webdev-hq-inject-css",
			title: "Debug CSS",
			type: "normal",
			contexts: ["selection", "page"]
		});
	});

	// ==========================================
	// 2. HELPER & STORAGE LOGIK
	// ==========================================
	interface StorageData {
		backgroundImageUrl?: string;
		lastFetchedDate?: string;
		seasonalImageResponse?: any;
	}

	function setToStorage(items: Record<string, any>): Promise<void> {
		return new Promise((resolve, reject) => {
			chrome.storage.local.set(items, () => {
				const err = chrome.runtime.lastError;
				if (err) reject(err);
				else resolve();
			});
		});
	}

	function getFromStorage<T>(keys: string[]): Promise<T> {
		return new Promise((resolve, reject) => {
			chrome.storage.local.get(keys, items => {
				const err = chrome.runtime.lastError;
				if (err) reject(err);
				else resolve(items as T);
			});
		});
	}

	async function fetchSeasonalImage(): Promise<any> {
		const today = new Date().toISOString().split("T")[0];
		try {
			const data = await getFromStorage<StorageData>(["seasonalImageResponse", "lastFetchedDate"]);
			if (data.seasonalImageResponse && data.lastFetchedDate === today) {
				return data.seasonalImageResponse;
			} else {
				const res = await fetch(`${import.meta.env.WXT_HOMEPAGE_URL}/api/unsplash/image/seasonal`);
				const json = await res.json();

				if (!json?.data?.urls) {
					throw new Error("Invalid API response structure");
				}

				const imageUrl = json.data.urls.full || json.data.urls.raw || json.data.urls.regular;
				console.log("Fetched new seasonal image:", imageUrl);
				await setToStorage({
					seasonalImageResponse: json,
					lastFetchedDate: today,
					backgroundImageUrl: imageUrl
				});

				return json;
			}
		} catch (e) {
			console.error("Error fetching seasonal image:", e);
			return { error: "fetch_failed" };
		}
	}

	function getHistory() {
		return new Promise((resolve, reject) => {
			chrome.history.search({ text: "", maxResults: 10 }, function (results) {
				resolve(results);
			});
		});
	}

	// ==========================================
	// 3. AUTO-UPDATE BEI TABS
	// ==========================================
	chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
		if (changeInfo.status === "complete") {
			fetchSeasonalImage().catch(err => console.error("Auto-update failed:", err));
		}
	});

	// ==========================================
	// 4. KONTEXTMENÜ KLICK
	// ==========================================
	chrome.contextMenus.onClicked.addListener((info, tab) => {
		if (info.menuItemId === "webdev-hq-inject-css" && tab?.id) {
			chrome.tabs.sendMessage(tab.id, {
				command: "injectStylesheet",
				stylesheet: "assets/pesticide.css"
			});
		}
	});

	// ==========================================
	// 5. EXTENSION ICON (ACTION BUTTON) KLICK
	// ==========================================
	chrome.action.onClicked.addListener(tab => {
		if (!tab.id) return;

		// Führt dein Meazure-Script aus...
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			files: ["meazure-script.js"]
		});

		// ...und schickt dem Content Script gleichzeitig den CSS Befehl
		chrome.tabs.sendMessage(tab.id, {
			command: "injectStylesheet",
			stylesheet: "assets/pesticide.css"
		});
	});

	// ==========================================
	// 6. ZENTRALER MESSAGE LISTENER
	// ==========================================
	chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
		console.log("Background received message:", message);

		if (message.action === "getRandomImage") {
			fetchSeasonalImage()
				.then(response => sendResponse(response))
				.catch(error => {
					console.error("Error in fetchSeasonalImage:", error);
					sendResponse({ error: "fetch_failed" });
				});
			return true;
		}

		if (message.action === "getHistory") {
			getHistory().then(history => sendResponse({ history }));
			return true;
		}

		// HINWEIS: Der "injectStylesheet" Zweig wurde hier entfernt!
		// Das gehört exklusiv in den onMessage-Listener deines Content-Scripts!
	});
});
