export const dailySalutation = () => {
	const date = new Date()
	const hours = date.getHours()
	if (hours < 12) {
		return "Good Morning"
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

export const getUserHistory = ({ maxResults = 10, startTime = 0 }) => {
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
