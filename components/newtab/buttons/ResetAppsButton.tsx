import { Button } from "@/components/ui/button"
import { useAppStore } from "@/stores/use-app-store"
import { SlRefresh } from "react-icons/sl"
export const ResetAppsButton: React.FC = () => {
	const resetApps = useAppStore(state => state.resetApps)
	return (
		<Button
			onClick={resetApps}
			className="border border-transparent text-sm bg-white text-slate-800 hover:border-mantis-primary hover:bg-white hover:cursor-pointer"
			title={chrome.i18n.getMessage("reset_apps", "Reset apps")}
		>
			<SlRefresh className="mr-2 size-4" />
			{chrome.i18n.getMessage("reset_apps", "Reset apps")}
		</Button>
	)
}
