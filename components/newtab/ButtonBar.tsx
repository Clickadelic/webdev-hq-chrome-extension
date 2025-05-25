import { DashboardButton } from "@/components/newtab/buttons/DashboardButton"
import { SettingsButton } from "@/components/newtab/buttons/SettingsButton"
// import { ModeToggle } from "@/components/global/ModeToggle"
import { FullscreenButton } from "./buttons/FullscreenButton"
import { cn } from "@/lib/utils"

interface ButtonBarProps {
	classNames?: string
}

const ButtonBar = ({ classNames }: ButtonBarProps) => {
	return (
		<div className={cn(classNames)}>
			<div className="w-full flex justify-start gap-1">
				<DashboardButton />
				<FullscreenButton />
				<SettingsButton />
			</div>
		</div>
	)
}

export default ButtonBar
