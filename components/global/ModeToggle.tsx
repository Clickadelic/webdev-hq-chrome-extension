import { Moon, Sun } from "lucide-react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useTheme } from "@/components/global/ThemeProvider"
import { GrSystem } from "react-icons/gr"
import { useState, useEffect } from "react"

export function ModeToggle() {
	const { setTheme, theme } = useTheme()
	const [value, setValue] = useState("system")

	useEffect(() => {
		if (theme) setValue(theme)
	}, [theme])

	const handleThemeChange = (val: string) => {
		setTheme(val)
		setValue(val)
	}

	const itemBase =
		"border border-transparent bg-white px-3 text-slate-800 dark:bg-slate-800 dark:text-slate-300 " +
		"hover:border-mantis-primary hover:text-mantis-primary hover:cursor-pointer " +
		"data-[state=on]:border-mantis-primary data-[state=on]:text-mantis-primary"

	return (
		<ToggleGroup type="single" value={value} onValueChange={handleThemeChange}>
			<ToggleGroupItem className={itemBase} value="light" title={chrome.i18n.getMessage("light_mode", "Light mode")}>
				<Sun />
			</ToggleGroupItem>
			<ToggleGroupItem className={itemBase} value="dark" title={chrome.i18n.getMessage("dark_mode", "Dark mode")}>
				<Moon />
			</ToggleGroupItem>
			<ToggleGroupItem className={itemBase} value="system" title={chrome.i18n.getMessage("system_mode", "System mode")}>
				<GrSystem />
			</ToggleGroupItem>
		</ToggleGroup>
	)
}
