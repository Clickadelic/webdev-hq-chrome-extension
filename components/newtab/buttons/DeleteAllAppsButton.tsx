import { Button } from "@/components/ui/button"
import { useAppStore } from "@/stores/use-app-store" // Pfad ggf. anpassen
import { RiDeleteBackLine } from "react-icons/ri"

export const DeleteAllAppsButton = () => {
	const apps = useAppStore(state => state.apps)

	const deleteAllApps = () => {
		if (window.confirm("Are you sure you want to delete all apps?")) {
			useAppStore.setState({ apps: [] })
		}
	}

	return (
		<Button
			className="border border-transparent bg-white text-slate-800 hover:border-mantis-primary hover:bg-white hover:cursor-pointer"
			onClick={deleteAllApps}
			title={chrome.i18n.getMessage("delete_all_apps_button", "Delete all apps")}
		>
			<RiDeleteBackLine className="mr-2 size-4" />
			{chrome.i18n.getMessage("delete_all_apps_button", "Delete all apps")}
		</Button>
	)
}
