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

	const CLIENT_ID = import.meta.env.WXT_GOOGLE_CALENDAR_CLIENT_ID;
	// const REDIRECT_URI = `https://${chrome.runtime.id}.chromiumapp.org`;
	const REDIRECT_URI = `https://${import.meta.env.WXT_EXTENSION_ID}.chromiumapp.org`;
	const SCOPE = "https://www.googleapis.com/auth/calendar.readonly";

	async function getAuthToken(): Promise<string> {
		return new Promise((resolve, reject) => {
			const authUrl = new URL("https://accounts.google.com/o/oauth2/auth");
			authUrl.searchParams.set("client_id", CLIENT_ID);
			authUrl.searchParams.set("redirect_uri", REDIRECT_URI);
			authUrl.searchParams.set("response_type", "token");
			authUrl.searchParams.set("scope", SCOPE);

			chrome.identity.launchWebAuthFlow(
			{ url: authUrl.toString(), interactive: true },
			(redirectUrl) => {
				if (chrome.runtime.lastError) {
				reject(new Error(chrome.runtime.lastError.message));
				return;
				}
				if (!redirectUrl) {
				reject(new Error("OAuth-Flow abgebrochen oder kein Redirect URL erhalten"));
				return;
				}

				const params = new URLSearchParams(redirectUrl.split("#")[1]);
				const token = params.get("access_token");
				if (!token) return reject(new Error("Kein Token erhalten"));
				resolve(token);
			}
			);
		});
	}

	async function getNextEvent(token: string) {
	const now = new Date().toISOString();
	const url =
		`https://www.googleapis.com/calendar/v3/calendars/primary/events` +
		`?timeMin=${encodeURIComponent(now)}&maxResults=1&orderBy=startTime&singleEvents=true`;

		const resp = await fetch(url, {
			headers: { Authorization: `Bearer ${token}` },
		});
		const data = await resp.json();
		return data.items?.[0] || null;
	}

	// Listener für Nachrichten vom NewTab
	chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
		if (msg.action === "getNextCalendarEvent") {
			(async () => {
				try {
					const token = await getAuthToken();
					const event = await getNextEvent(token);
					sendResponse({ event });
				} catch (e: any) {
					sendResponse({ error: e.message });
				}
			})();
			return true; // async
		}
	});

})
