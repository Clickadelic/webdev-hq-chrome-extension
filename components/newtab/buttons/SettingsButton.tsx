import { HiOutlineCog } from "react-icons/hi"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

import { ResetAppsButton } from "@/components/newtab/buttons/ResetAppsButton"
import { ImportAppsButton } from "@/components/newtab/buttons/ImportAppsButton"
import { ExportAppsButton } from "@/components/newtab/buttons/ExportAppsButton"

export const SettingsButton: React.FC = () => {
	return (
		<Dialog>
			<DialogTrigger className="border border-transparent bg-white text-slate-800 rounded py-2 px-3 hover:border-mantis-primary hover:bg-white hover:cursor-pointer" title="Settings">
				<HiOutlineCog className="size-4" />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{chrome.i18n.getMessage("settings_title", "Settings")}</DialogTitle>
					<DialogDescription>{chrome.i18n.getMessage("settings_description", "Manage your settings")}</DialogDescription>
				</DialogHeader>
				<div className="space-y-2">
					<h2 className="text-md font-semibold">{chrome.i18n.getMessage("apps", "Apps")}</h2>
					<hr />
					<div className="flex justify-between gap-2">
						<p className="mt-2 text-muted-foreground">{chrome.i18n.getMessage("reset_apps_settings_text", "Reset apps")}</p>
						<ResetAppsButton />
					</div>
					<div className="flex justify-between gap-2">
						<p className="mt-2 text-muted-foreground">{chrome.i18n.getMessage("export_apps_settings_text", "Export apps")}</p>
						<ExportAppsButton />
					</div>
					<div className="flex justify-between gap-2">
						<p className="mt-2 text-muted-foreground">{chrome.i18n.getMessage("import_apps_settings_text", "Import apps")}</p>
						<ImportAppsButton />
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}
