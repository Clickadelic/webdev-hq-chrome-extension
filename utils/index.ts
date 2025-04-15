export const dailySalutation = () => {
	const date = new Date()
	const hours = date.getHours()
	if (hours < 12) {
		return "Good Morning"
	} else if (hours < 1) {
		return "Hey, Nightowl"
	} else if (hours < 18) {
		return "Good Afternoon"
	} else {
		return "Good Evening"
	}
}

export const getUserInfo = (): Promise<chrome.identity.UserInfo> => {
	return new Promise(resolve => {
		chrome.identity.getProfileUserInfo(userInfo => {
			resolve(userInfo)
		})
	})
}

export const getUserHistory = ({ maxResults = 15, startTime = 0 }) => {
	return new Promise((resolve, reject) => {
		if (!chrome.history) {
			reject(new Error("chrome.history API is not available"))
			return
		}

		chrome.history.search(
			{
				text: "",
				maxResults,
				startTime
			},
			results => {
				if (chrome.runtime.lastError) {
					reject(chrome.runtime.lastError)
				} else {
					resolve(
						results.map(entry => ({
							url: entry.url,
							title: entry.title,
							lastVisitTime: entry.lastVisitTime
						}))
					)
				}
			}
		)
	})
}
export const deleteUserHistory = (): Promise<void> => {
	return new Promise(resolve => {
		chrome.history.deleteAll(() => {
			resolve()
		})
	})
}

export function getFaviconUrl(websiteUrl: string, size = 32): string | undefined {
	try {
		const url = new URL(websiteUrl)
		return `https://www.google.com/s2/favicons?sz=${size}&domain_url=${url.origin}`
	} catch {
		return undefined // nicht null!
	}
}
