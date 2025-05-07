import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import UserApps from "@/components/newtab/UserApps"
import UserHistory from "@/components/newtab/UserHistory"
import TodoList from "@/components/newtab/TodoList"
import UserDownloads from "@/components/newtab/UserDownloads"
import Settings from "./Settings"

import { BsApp } from "react-icons/bs"
import { BsListCheck } from "react-icons/bs"
import { PiClockCountdown } from "react-icons/pi"
import { CgTab } from "react-icons/cg"
import { GoDownload } from "react-icons/go"
import { HiOutlineCog8Tooth } from "react-icons/hi2"

interface TabsModuleProps {
	classNames?: string
}

const TabsModule = ({ classNames }: TabsModuleProps) => {
	const appsLabel: string = chrome.i18n.getMessage("apps")
	const todosLabel: string = chrome.i18n.getMessage("todos")
	const historyLabel: string = chrome.i18n.getMessage("history")
	const downloadsLabel: string = chrome.i18n.getMessage("downloads")
	const settingsLabel: string = chrome.i18n.getMessage("settings")
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
						<TabsTrigger value="history">
							<PiClockCountdown />
							{historyLabel}
						</TabsTrigger>
						<TabsTrigger value="downloads">
							<GoDownload />
							{downloadsLabel}
						</TabsTrigger>
						<TabsTrigger value="settings">
							<HiOutlineCog8Tooth />
							{settingsLabel}
						</TabsTrigger>
					</TabsList>
				</div>
				<TabsContent value="apps">
					<UserApps />
				</TabsContent>
				<TabsContent value="todos">
					<TodoList />
				</TabsContent>
				<TabsContent value="history">
					<UserHistory />
				</TabsContent>
				<TabsContent value="downloads">
					<UserDownloads />
				</TabsContent>
				<TabsContent value="settings">
					<Settings />
				</TabsContent>
			</Tabs>
		</div>
	)
}

export default TabsModule
