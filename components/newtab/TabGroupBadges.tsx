"use client"
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"

type TabGroup = {
	id: number
	title?: string
	color: string
	collapsed: boolean
	windowId: number
	urls: urls
}

const groupColorMap: Record<string, string> = {
	grey: "bg-gray-400 text-white",
	blue: "bg-blue-500 text-white",
	red: "bg-red-500 text-white",
	yellow: "bg-yellow-400 text-black",
	green: "bg-green-500 text-white",
	pink: "bg-pink-400 text-white",
	purple: "bg-purple-500 text-white",
	cyan: "bg-cyan-400 text-white",
	orange: "bg-orange-400 text-black"
}

export default function TabGroupBadges() {
	const [groups, setGroups] = useState<TabGroup[]>([])

	useEffect(() => {
		chrome.tabGroups.query({}, result => {
			setGroups(result)
		})
	}, [])

	const handleGroupClick = (group: TabGroup) => {
		if (group.active && group.id && group.windowId !== undefined) {
			chrome.tabs.query({ groupId: group.id }, tabs => {
				if (tabs.length === 0) return
				chrome.tabGroups.update(group.id!, { collapsed: false })
				chrome.windows.update(group.windowId!, { focused: true })
				chrome.tabs.update(tabs[0].id!, { active: true })
			})
		} else if (group.urls?.length) {
			// Rekonstruiere Gruppe mit Tabs
			chrome.windows.getCurrent({ populate: true }, window => {
				const createTabs = group.urls!.map(url => chrome.tabs.create({ url, active: false, windowId: window.id }))

				Promise.all(createTabs).then(async tabs => {
					const tabIds = tabs.map(tab => tab.id!).filter(Boolean)
					const newGroupId = await chrome.tabs.group({ tabIds })
					chrome.tabGroups.update(newGroupId, {
						title: group.title,
						color: group.color as chrome.tabGroups.ColorEnum,
						collapsed: false
					})
					chrome.tabs.update(tabIds[0], { active: true })
				})
			})
		} else {
			alert("Keine Tabs in dieser Gruppe gespeichert.")
		}
	}

	return (
		<div className="flex flex-wrap gap-2 p-4">
			{groups.map(group => (
				<Badge
					key={group.id}
					className={`cursor-pointer rounded-full px-3 py-1 text-sm font-medium shadow-sm transition hover:opacity-90 ${groupColorMap[group.color] || "bg-gray-200 text-black"}`}
					onClick={() => handleGroupClick(group.id, group.windowId)}
				>
					{group.title || "Ohne Titel"}
				</Badge>
			))}
		</div>
	)
}
