import { HiOutlineCog } from "react-icons/hi"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

import { LoadGoogleAppsButton } from "@/components/newtab/buttons/LoadGoogleAppsButton"
import { ImportAppsButton } from "@/components/newtab/buttons/ImportAppsButton"
import { ExportAppsButton } from "@/components/newtab/buttons/ExportAppsButton"
import { DeleteAllAppsButton } from "@/components/newtab/buttons/DeleteAllAppsButton"
export const SettingsButton: React.FC = () => {
	return (
		<Dialog>
			<DialogTrigger className="border border-transparent bg-white text-slate-800 rounded py-2 px-3 hover:border-mantis-primary hover:bg-white hover:cursor-pointer" title="Settings">
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
					<h2 className="text-md font-semibold">{chrome.i18n.getMessage("apps", "Apps")}</h2>
					<hr />
					<div className="flex justify-between gap-2">
						<p className="mt-2 text-muted-foreground">{chrome.i18n.getMessage("delete_all_apps_settings_text", "Delete all apps.")}</p>
						<DeleteAllAppsButton />
					</div>
					<div className="flex justify-between gap-2">
						<p className="mt-2 text-muted-foreground">{chrome.i18n.getMessage("load_google_apps_settings_text", "Load Google Apps as default set.")}</p>
						<LoadGoogleAppsButton />
					</div>
					<div className="flex justify-between gap-2">
						<p className="mt-2 text-muted-foreground">{chrome.i18n.getMessage("export_apps_settings_text", "Export all apps.")}</p>
						<ExportAppsButton />
					</div>
					<div className="flex justify-between gap-2">
						<p className="mt-2 text-muted-foreground">{chrome.i18n.getMessage("import_apps_settings_text", "Import all apps.")}</p>
						<ImportAppsButton />
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}
