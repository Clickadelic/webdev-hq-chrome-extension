import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import UserApps from "@/components/newtab/UserApps"
import UserHistory from "@/components/newtab/UserHistory"
import TodoList from "@/components/newtab/TodoList"
import UserDownloads from "@/components/newtab/UserDownloads"

import { BsApp } from "react-icons/bs"
import { BsListCheck } from "react-icons/bs"
import { PiClockCountdown } from "react-icons/pi"
import { GoDownload } from "react-icons/go"
import { HiOutlineCog8Tooth } from "react-icons/hi2"

interface TabsModuleProps {
	classNames?: string
}

const TabsModule = ({ classNames }: TabsModuleProps) => {
	return (
		<div className={classNames}>
			<Tabs defaultValue="apps" className="w-full">
				<div className="bg-white/30 p-1 rounded">
					<TabsList className="grid grid-cols-5 w-full text-slate-600">
						<TabsTrigger value="apps">
							<BsApp />
							{chrome.i18n.getMessage("apps")}
						</TabsTrigger>
						<TabsTrigger value="todos">
							<BsListCheck />
							{chrome.i18n.getMessage("todos")}
						</TabsTrigger>
						<TabsTrigger value="history">
							<PiClockCountdown />
							{chrome.i18n.getMessage("history")}
						</TabsTrigger>
						<TabsTrigger value="downloads">
							<GoDownload />
							{chrome.i18n.getMessage("downloads")}
						</TabsTrigger>
						<TabsTrigger value="freetab">
							<HiOutlineCog8Tooth />
							Freetab
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
				<TabsContent value="freetab">Freetab</TabsContent>
			</Tabs>
		</div>
	)
}

export default TabsModule
