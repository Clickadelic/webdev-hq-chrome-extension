import { useEffect, useState } from "react"

type TabInfo = {
	id?: number
	title?: string
	url?: string
	windowId?: number
}

function extractDomain(url?: string) {
	try {
		return new URL(url || "").hostname
	} catch {
		return ""
	}
}

function getFaviconUrl(domain: string) {
	return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`
}

const UserTabs = () => {
	const [tabs, setTabs] = useState<TabInfo[]>([])

	useEffect(() => {
		chrome.tabs.query({}, tabs => {
			setTabs(tabs)
		})
	}, [])

	const focusTab = (tab: TabInfo) => {
		if (tab.id != null && tab.windowId != null) {
			chrome.windows.update(tab.windowId, { focused: true }, () => {
				chrome.tabs.update(tab.id!, { active: true })
			})
		}
	}

	return (
		<ul className="space-y-2">
			{tabs.map(tab => {
				const domain = extractDomain(tab.url)
				const favicon = getFaviconUrl(domain)

				return (
					<li key={tab.id} onClick={() => focusTab(tab)} className="flex items-center gap-2 border p-2 rounded shadow-sm cursor-pointer bg-white hover:bg-gray-100 transition">
						<img src={favicon} alt="favicon" width={16} height={16} className="shrink-0" />
						<div>
							<div className="font-semibold">{tab.title || "Kein Titel"}</div>
							<div className="text-gray-600 break-all text-xs">{tab.url}</div>
						</div>
					</li>
				)
			})}
		</ul>
	)
}

export default UserTabs
