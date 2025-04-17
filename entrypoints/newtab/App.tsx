import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { GoGear } from "react-icons/go"

import AppIcon from "@/components/custom/AppIcon"
// Tab content modules
import UserSearch from "@/components/newtab/UserSearch"
import UserApps from "@/components/newtab/UserApps"
import UserHistory from "@/components/newtab/UserHistory"
import UserTodos from "@/components/newtab/UserTodos"
import UserTabs from "@/components/newtab/UserTabs"
import UserDownloads from "@/components/newtab/UserDownloads"

import { getUserInfo, dailySalutation } from "@/utils/index"

const App = () => {
	const salutation: string = dailySalutation()

	const appsLabel: string = chrome.i18n.getMessage("apps")
	const todosLabel: string = chrome.i18n.getMessage("todos")
	const tabsLabel: string = chrome.i18n.getMessage("tabs")
	const historyLabel: string = chrome.i18n.getMessage("history")
	const downloadsLabel: string = chrome.i18n.getMessage("downloads")

	const [user, setUser] = useState<chrome.identity.UserInfo | null>(null)

	useEffect(() => {
		getUserInfo().then(userInfo => setUser(userInfo))
	}, [])

	return (
		<div className="min-h-screen bg-slate-900 bg-rotterdam bg-cover">
			<AppIcon url="https://webdev-hq.com" classNames="absolute top-4 left-4" target="_blank" />
			<div className="max-w-[680px] mx-auto backdrop rounded-md relative top-64 mb-4">
				<h1 className="flex gap-4 text-4xl font-light text-white mb-4">{salutation}</h1>
			</div>
			<UserSearch />
			<div className="max-w-[680px] mx-auto backdrop relative top-64 flex flex-row">
				<Tabs defaultValue="apps" className="w-full">
					<div className="bg-white/30 p-2 rounded">
						<TabsList className="grid w-full grid-cols-5 text-slate-600">
							<TabsTrigger value="apps">{appsLabel}</TabsTrigger>
							<TabsTrigger value="todos">{todosLabel}</TabsTrigger>
							<TabsTrigger value="tabs">{tabsLabel}</TabsTrigger>
							<TabsTrigger value="history">{historyLabel}</TabsTrigger>
							<TabsTrigger value="downloads">{downloadsLabel}</TabsTrigger>
						</TabsList>
					</div>
					<TabsContent value="apps">
						<UserApps />
					</TabsContent>
					<TabsContent value="todos">
						<UserTodos />
					</TabsContent>
					<TabsContent value="tabs">
						<UserTabs />
					</TabsContent>
					<TabsContent value="history">
						<UserHistory />
					</TabsContent>
					<TabsContent value="downloads">
						<UserDownloads />
					</TabsContent>
				</Tabs>
			</div>
			<div className="absolute top-4 right-4 text-white">{user?.email ? user.email : "Incognito"}</div>
			<div className="absolute bottom-4 right-4 text-white">
				<Button className="w-full" onClick={() => chrome.runtime.openOptionsPage()}>
					<GoGear />
				</Button>
			</div>
		</div>
	)
}

export default App
