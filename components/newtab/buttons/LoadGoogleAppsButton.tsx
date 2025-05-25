import { Button } from "@/components/ui/button"
import { useAppStore } from "@/stores/use-app-store"
import { SlRefresh } from "react-icons/sl"
import { FaGoogle } from "react-icons/fa"
export const LoadGoogleAppsButton: React.FC = () => {
	const resetApps = useAppStore(state => state.resetApps)
	return (
		<Button
			onClick={resetApps}
			className="border border-slate-200 bg-white shadow-none text-slate-800 hover:border-mantis-primary hover:bg-white hover:cursor-pointer"
			title={chrome.i18n.getMessage("load_google_apps", "Load Google Apps")}
		>
			<FaGoogle className="size-4" />
		</Button>
	)
}
