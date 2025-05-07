import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import UserApps from "@/components/newtab/UserApps"
import UserHistory from "@/components/newtab/UserHistory"
import UserTodos from "@/components/newtab/UserTodos"
import UserDownloads from "@/components/newtab/UserDownloads"

import { BsApp } from "react-icons/bs"
import { BsListCheck } from "react-icons/bs"
import { PiClockCountdown } from "react-icons/pi"
import { CgTab } from "react-icons/cg"
import { GoDownload } from "react-icons/go"

interface TabsModuleProps {
	classNames?: string
}

const TabsModule = ({ classNames }: TabsModuleProps) => {
	const appsLabel: string = chrome.i18n.getMessage("apps")
	const todosLabel: string = chrome.i18n.getMessage("todos")
	const tabsLabel: string = chrome.i18n.getMessage("tabs")
	const historyLabel: string = chrome.i18n.getMessage("history")
	const downloadsLabel: string = chrome.i18n.getMessage("downloads")
	return (
		<div className={classNames}>
			<Tabs defaultValue="apps" className="w-full">
				<div className="bg-white/30 p-1 rounded">
					<TabsList className="grid grid-cols-5 w-full text-slate-600">
						<TabsTrigger value="apps">
							<BsApp />
							{appsLabel}
						</TabsTrigger>
						<TabsTrigger value="todos">
							<BsListCheck />
							{todosLabel}
						</TabsTrigger>
						<TabsTrigger value="free">
							<CgTab />
							{tabsLabel}
						</TabsTrigger>
						<TabsTrigger value="history">
							<PiClockCountdown />
							{historyLabel}
						</TabsTrigger>
						<TabsTrigger value="downloads">
							<GoDownload />
							{downloadsLabel}
						</TabsTrigger>
					</TabsList>
				</div>
				<TabsContent value="apps">
					<UserApps />
				</TabsContent>
				<TabsContent value="todos">
					<UserTodos />
				</TabsContent>
				<TabsContent value="free">Free</TabsContent>
				<TabsContent value="history">
					<UserHistory />
				</TabsContent>
				<TabsContent value="downloads">
					<UserDownloads />
				</TabsContent>
			</Tabs>
		</div>
	)
}

export default TabsModule
