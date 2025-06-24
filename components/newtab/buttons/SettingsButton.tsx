import { HiOutlineCog } from "react-icons/hi"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

import { LoadGoogleAppsButton } from "@/components/newtab/buttons/LoadGoogleAppsButton"
import { ImportAppsButton } from "@/components/newtab/buttons/ImportAppsButton"
import { ExportAppsButton } from "@/components/newtab/buttons/ExportAppsButton"
import { DeleteAllAppsButton } from "@/components/newtab/buttons/DeleteAllAppsButton"
import { SelectDefaultTab } from "@/components/newtab/buttons/SelectDefaultTab"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const SettingsButton: React.FC = () => {
	return (
		<Dialog>
			<DialogTrigger
				className="border border-transparent rounded px-3 py-2 bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-300 hover:border-mantis-primary hover:text-mantis-primary hover:cursor-pointer"
				title={chrome.i18n.getMessage("settings", "Settings")}
			>
				<HiOutlineCog className="size-4" />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="flex items-start gap-2">
						<HiOutlineCog className="mt-[2px] size-4" />
						{chrome.i18n.getMessage("settings_title", "Settings")}
					</DialogTitle>
					<DialogDescription>{chrome.i18n.getMessage("settings_description", "Manage your settings")}</DialogDescription>
				</DialogHeader>
				<div className="space-y-2">
					<Tabs defaultValue="general" className="w-full rounded-none">
						<TabsList className="w-full bg-transparent p-0">
							<TabsTrigger
								value="general"
								className="border-solid border-0 border-b rounded-none border-slate-200 data-[state=active]:border-mantis-primary data-[state=active]:text-mantis-primary"
							>
								{chrome.i18n.getMessage("general", "General")}
							</TabsTrigger>
							<TabsTrigger
								value="apps"
								className="border-solid border-0 border-b rounded-none border-slate-200 data-[state=active]:border-mantis-primary data-[state=active]:text-mantis-primary"
							>
								{chrome.i18n.getMessage("apps", "Apps")}
							</TabsTrigger>
							<TabsTrigger
								value="todos"
								className="border-solid border-0 border-b rounded-none border-slate-200 data-[state=active]:border-mantis-primary data-[state=active]:text-mantis-primary"
							>
								{chrome.i18n.getMessage("todos", "Todos")}
							</TabsTrigger>
							<TabsTrigger
								value="projects"
								className="border-solid border-0 border-b rounded-none border-slate-200 data-[state=active]:border-mantis-primary data-[state=active]:text-mantis-primary"
							>
								{chrome.i18n.getMessage("projects", "Projects")}
							</TabsTrigger>
							<TabsTrigger
								value="downloads"
								className="border-solid border-0 border-b rounded-none border-slate-200 data-[state=active]:border-mantis-primary data-[state=active]:text-mantis-primary"
							>
								{chrome.i18n.getMessage("downloads", "Downloads")}
							</TabsTrigger>
							<TabsTrigger
								value="history"
								className="border-solid border-0 border-b rounded-none border-slate-200 data-[state=active]:border-mantis-primary data-[state=active]:text-mantis-primary"
							>
								{chrome.i18n.getMessage("history", "History")}
							</TabsTrigger>
						</TabsList>
						<TabsContent value="general" className="min-h-48 space-y-2">
							<div className="flex justify-between gap-2">
								<p className="mt-2 text-muted-foreground">{chrome.i18n.getMessage("general_default_tab_settings_text", "Select your default tab.")}</p>
								<SelectDefaultTab />
							</div>
						</TabsContent>
						<TabsContent value="apps" className="min-h-48 space-y-2">
							<div className="flex justify-between gap-2">
								<p className="mt-2 text-muted-foreground">{chrome.i18n.getMessage("load_google_apps_settings_text", "Load Google Apps as default set.")}</p>
								<LoadGoogleAppsButton />
							</div>
							<div className="flex justify-between gap-2">
								<p className="mt-2 text-muted-foreground">{chrome.i18n.getMessage("import_apps_settings_text", "Import all apps.")}</p>
								<ImportAppsButton />
							</div>
							<div className="flex justify-between gap-2">
								<p className="mt-2 text-muted-foreground">{chrome.i18n.getMessage("export_apps_settings_text", "Export all apps.")}</p>
								<ExportAppsButton />
							</div>
							<div className="flex justify-between gap-2">
								<p className="mt-2 text-muted-foreground">{chrome.i18n.getMessage("delete_all_apps_settings_text", "Delete all apps.")}</p>
								<DeleteAllAppsButton />
							</div>
						</TabsContent>
						<TabsContent value="todos" className="min-h-48 space-y-2">
							<p className="mt-2 text-muted-foreground">Change your todo settings here.</p>
						</TabsContent>
						<TabsContent value="projects" className="min-h-48 space-y-2">
							<p className="mt-2 text-muted-foreground">Change your project settings here.</p>
						</TabsContent>
						<TabsContent value="downloads" className="min-h-48 space-y-2">
							<p className="mt-2 text-muted-foreground">Change your download settings here.</p>
						</TabsContent>
						<TabsContent value="history" className="min-h-48 space-y-2">
							<p className="mt-2 text-muted-foreground">Change your history settings here.</p>
						</TabsContent>
					</Tabs>
				</div>
			</DialogContent>
		</Dialog>
	)
}
