import { DashboardButton } from "@/components/newtab/buttons/DashboardButton"
import { SettingsButton } from "@/components/newtab/buttons/SettingsButton"
import { ResetAppsButton } from "@/components/newtab/buttons/ResetAppsButton"
import { ImportAppsButton } from "@/components/newtab/buttons/ImportAppsButton"
import { ExportAppsButton } from "@/components/newtab/buttons/ExportAppsButton"
import { cn } from "@/lib/utils"

interface CockpitProps {
	classNames?: string
}

const Cockpit = ({ classNames }: CockpitProps) => {
	return (
		<div className={cn(classNames)}>
			<div className="w-full flex justify-start gap-1">
				<DashboardButton />
				<ImportAppsButton />
				<ExportAppsButton />
				<ResetAppsButton />
				<SettingsButton />
			</div>
		</div>
	)
}

export default Cockpit
