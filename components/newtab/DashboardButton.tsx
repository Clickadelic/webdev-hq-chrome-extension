import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { SlScreenDesktop } from "react-icons/sl"

export const DashboardButton: React.FC = () => {
	const handleClick = () => {
		const url = new URL(chrome.runtime.getURL("/dashboard.html"))
		chrome.tabs.create({ url: url.toString() })
	}

	return (
		<Button onClick={handleClick} className={cn("bg-white text-slate-800")} title={chrome.i18n.getMessage("open_dashboard")}>
			<SlScreenDesktop />
		</Button>
	)
}
