import { DashboardButton } from "@/components/newtab/buttons/DashboardButton"
import { SettingsButton } from "@/components/newtab/buttons/SettingsButton"

import { SidePanelButton } from "@/components/newtab/buttons/SidePanelButton"
import { FullscreenButton } from "./buttons/FullscreenButton"
import { cn } from "@/lib/utils"

interface CockpitProps {
	classNames?: string
}

const Cockpit = ({ classNames }: CockpitProps) => {
	return (
		<div className={cn(classNames)}>
			<div className="w-full flex justify-start gap-1">
				<DashboardButton />
				<SidePanelButton />
				<FullscreenButton />
				<SettingsButton />
			</div>
		</div>
	)
}

export default Cockpit
