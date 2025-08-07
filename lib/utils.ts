import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const dailySalutation = () => {
	const date = new Date()
	const hours = date.getHours()
	if (hours < 12) {
		return chrome.i18n.getMessage("good_morning", "Good Morning")
	} else if (hours < 18) {
		return chrome.i18n.getMessage("good_afternoon", "Good Afternoon")
	} else {
		return chrome.i18n.getMessage("good_evening", "Good Evening")
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

export function getFaviconUrl(websiteUrl: string, size = 32): string {
	if (websiteUrl) {
		try {
			const url = new URL(websiteUrl)
			return `https://www.google.com/s2/favicons?sz=${size}&domain_url=${url.origin}`
		} catch {
			return "/assets/icons/default-favicon.png"
		}
	} else {
		return "/assets/icons/default-favicon.png"
	}
}

export function isDOM(Obj: any): Obj is Element {
	return Obj instanceof Element
}
