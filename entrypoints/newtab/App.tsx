import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getUserInfo, dailySalutation, getUserHistory } from "@/utils/index"

import iconSrc from "@/assets/icons/weather/cloudy-sunny.svg"
import youtTubeSrc from "@/assets/icons/weather/cloudy-sunny.svg"
import { AiOutlineSearch } from "react-icons/ai"

const App = () => {
	// Strings
	const salutation: string = dailySalutation()
	const searchPlaceholder: string = chrome.i18n.getMessage("search_placeholder")

	// Tabslabel
	const appsLabel: string = chrome.i18n.getMessage("apps")
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
		<div className="min-h-screen bg-color-curves bg-white/30 bg-cover p-0">
			<div className="min-h-screen backdrop-blur">
				<div className="max-w-[680px] mx-auto backdrop rounded-md relative top-64">
					<h1 className="flex gap-4 text-4xl font-light text-white mb-4">{salutation}</h1>
				</div>
				<form method="GET" action={searchEngine} className="max-w-[680px] mx-auto mb-2 bg-white backdrop relative top-64 flex flex-row gap-3 p-1 rounded">
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
						<TabsList className="grid w-full grid-cols-5">
							<TabsTrigger value="apps">{appsLabel}</TabsTrigger>
							<TabsTrigger value="todos">{todosLabel}</TabsTrigger>
							<TabsTrigger value="tabs">{tabsLabel}</TabsTrigger>
							<TabsTrigger value="history">{historyLabel}</TabsTrigger>
							<TabsTrigger value="downloads">{downloadsLabel}</TabsTrigger>
						</TabsList>
						<TabsContent value="apps">
							<Card className="px-3 py-0">Appslist</Card>
						</TabsContent>
						<TabsContent value="todos">
							<Card className="px-3 py-0">Todoslist</Card>
						</TabsContent>
						<TabsContent value="tabs">
							<Card className="px-3 py-0">Tabslist</Card>
						</TabsContent>
						<TabsContent value="history">
							<Card>
								<ul>
									{history.map(item => (
										<li key={item.url}>{item.url}</li>
									))}
								</ul>
							</Card>
						</TabsContent>
						<TabsContent value="downloads">
							<Card className="px-3 py-0">DownloadsList</Card>
						</TabsContent>
					</Tabs>
				</div>
				<div className="absolute top-4 right-4 text-white">{user?.email ? user.email : "Icognito"}</div>
			</div>
		</div>
	)
}

export default App
