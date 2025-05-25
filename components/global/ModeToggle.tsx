import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/global/ThemeProvider"
import { GrSystem } from "react-icons/gr"
export function ModeToggle() {
	const { setTheme } = useTheme()

	return (
		<>
			<Button
				className="border border-transparent bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-300 hover:border-mantis-primary hover:text-mantis-primary hover:cursor-pointer"
				onClick={() => setTheme("light")}
				title={chrome.i18n.getMessage("light_mode", "Light mode")}
			>
				<Sun />
			</Button>
			<Button
				className="border border-transparent bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-300 hover:border-mantis-primary hover:text-mantis-primary hover:cursor-pointer"
				onClick={() => setTheme("dark")}
				title={chrome.i18n.getMessage("dark_mode", "Dark mode")}
			>
				<Moon />
			</Button>
			<Button
				className="border border-transparent bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-300 hover:border-mantis-primary hover:text-mantis-primary hover:cursor-pointer"
				onClick={() => setTheme("system")}
				title={chrome.i18n.getMessage("system_mode", "System mode")}
			>
				<GrSystem />
			</Button>
		</>
	)
}
