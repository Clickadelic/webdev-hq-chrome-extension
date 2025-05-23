import { Button } from "@/components/ui/button"
import { useAppStore } from "@/stores/use-app-store"
import { cn } from "@/lib/utils"

interface ResetAppsButtonProps {
	btnClasses?: string
}

const ResetAppsButton = ({ btnClasses }: ResetAppsButtonProps) => {
	const resetApps = useAppStore(state => state.resetApps)

	return (
		<Button variant="secondary" size="sm" onClick={resetApps} className={cn(btnClasses)}>
			{chrome.i18n.getMessage("reset_apps")}
		</Button>
	)
}

export default ResetAppsButton
