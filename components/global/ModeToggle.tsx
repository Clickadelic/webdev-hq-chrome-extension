import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/global/ThemeProvider"
import { GrSystem } from "react-icons/gr"
export function ModeToggle() {
	const { setTheme } = useTheme()

	return (
		<>
			<Button onClick={() => setTheme("light")}>
				<Sun />
			</Button>
			<Button onClick={() => setTheme("dark")}>
				<Moon />
			</Button>
			<Button onClick={() => setTheme("system")}>
				<GrSystem />
			</Button>
		</>
	)
}
