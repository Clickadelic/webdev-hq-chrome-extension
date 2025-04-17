import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getUserInfo, dailySalutation } from "@/utils/index"
import { AiOutlineSearch } from "react-icons/ai"
import { GoGear } from "react-icons/go"

// Tab content modules
import UserHistory from "@/components/custom/UserHistory"
import UserApps from "@/components/custom/UserApps"
import UserTodos from "@/components/custom/UserTodos"
import UserTabs from "@/components/custom/UserTabs"
import UserDownloads from "@/components/custom/UserDownloads"

const App = () => {
	// Strings
	const salutation: string = dailySalutation()
	const searchPlaceholder: string = chrome.i18n.getMessage("search_placeholder")

	// Tabslabel
	const appsLabel: string = chrome.i18n.getMessage("apps")
	const addAppDescription: string = chrome.i18n.getMessage("add_app_description")
	const todosLabel: string = chrome.i18n.getMessage("todos")
	const tabsLabel: string = chrome.i18n.getMessage("tabs")
	const historyLabel: string = chrome.i18n.getMessage("history")
	const downloadsLabel: string = chrome.i18n.getMessage("downloads")

	const [searchEngine, setSearchEngine] = useState<string>("")
	const [user, setUser] = useState<chrome.identity.UserInfo | null>(null)

	useEffect(() => {
		getUserInfo().then(userInfo => setUser(userInfo))
	}, [])

	return (
		<div className="min-h-screen bg-slate-900 bg-color-fog bg-cover p-0">
			<div className="min-h-screen backdrop-blur">
				<div className="max-w-[680px] mx-auto backdrop rounded-md relative top-64 mb-4">
					<h1 className="flex gap-4 text-4xl font-light text-white mb-4">{salutation}</h1>
				</div>
				<form method="GET" action={searchEngine} className="max-w-[680px] mx-auto mb-4 bg-white backdrop relative top-64 flex flex-row gap-3 p-1 rounded">
					<input type="text" className="w-full px-4 py-4 text-xl focus:outline-none" placeholder={searchPlaceholder} />
					<select onChange={e => setSearchEngine(e.target.value)} className="search-engines p-4 text-xl text-slate-600 focus:outline-none">
						<option value="bing">Bing</option>
						<option value="brave">Brave</option>
						<option value="duckduckgo">DuckDuckGo</option>
						<option value="https://www.google.com/search">Google</option>
						<option value="yahoo">Yahoo</option>
					</select>
					<Button size="lg" className="bg-blue-500 text-white size-16 rounded hover:cursor-pointer">
						<AiOutlineSearch />
					</Button>
				</form>
				<div className="max-w-[680px] mx-auto backdrop relative top-64 flex flex-row">
					<Tabs defaultValue="apps" className="w-full">
						<TabsList className="grid w-full grid-cols-5 text-slate-600">
							<TabsTrigger value="apps">{appsLabel}</TabsTrigger>
							<TabsTrigger value="todos">{todosLabel}</TabsTrigger>
							<TabsTrigger value="tabs">{tabsLabel}</TabsTrigger>
							<TabsTrigger value="history">{historyLabel}</TabsTrigger>
							<TabsTrigger value="downloads">{downloadsLabel}</TabsTrigger>
						</TabsList>
						<TabsContent className="pt-1" value="apps">
							<UserApps />
						</TabsContent>
						<TabsContent className="pt-1" value="todos">
							<UserTodos />
						</TabsContent>
						<TabsContent className="pt-1" value="tabs">
							<UserTabs />
						</TabsContent>
						<TabsContent className="pt-1" value="history">
							<UserHistory />
						</TabsContent>
						<TabsContent className="pt-1" value="downloads">
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
		</div>
	)
}

export default App
