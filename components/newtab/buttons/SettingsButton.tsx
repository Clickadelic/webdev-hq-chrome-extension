import { HiOutlineCog } from "react-icons/hi"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

import { ResetAppsButton } from "@/components/newtab/buttons/ResetAppsButton"
import { ImportAppsButton } from "@/components/newtab/buttons/ImportAppsButton"
import { ExportAppsButton } from "@/components/newtab/buttons/ExportAppsButton"

export const SettingsButton: React.FC = () => {
	const handleClick = () => {
		const url = new URL(chrome.runtime.getURL("/dashboard.html"))
		chrome.tabs.create({ url: url.toString() })
	}

	return (
		<Dialog>
			<DialogTrigger className="border border-transparent bg-white text-slate-800 rounded py-2 px-3 hover:border-mantis-primary hover:bg-white hover:cursor-pointer" title="Settings">
				<HiOutlineCog className="size-4" />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{chrome.i18n.getMessage("settings_title")}</DialogTitle>
					<DialogDescription>{chrome.i18n.getMessage("settings_description")}</DialogDescription>
				</DialogHeader>
				<div className="space-y-2">
					<h2 className="text-md font-semibold">{chrome.i18n.getMessage("apps")}</h2>
					<hr />
					<div className="flex justify-between gap-2">
						<p className="mt-2 text-muted-foreground">{chrome.i18n.getMessage("reset_apps_settings_text")}</p>
						<ResetAppsButton />
					</div>
					<div className="flex justify-between gap-2">
						<p className="mt-2 text-muted-foreground">{chrome.i18n.getMessage("export_apps_settings_text")}</p>
						<ExportAppsButton />
					</div>
					<div className="flex justify-between gap-2">
						<p className="mt-2 text-muted-foreground">{chrome.i18n.getMessage("import_apps_settings_text")}</p>
						<ImportAppsButton />
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}
