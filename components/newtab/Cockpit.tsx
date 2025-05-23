import { DashboardButton } from "@/components/newtab/DashboardButton"
import { cn } from "@/lib/utils"

interface CockpitProps {
	classNames?: string
}
const Cockpit = ({ classNames }: CockpitProps) => {
	return (
		<div className={cn(classNames)}>
			<div className="w-full flex justify-start gap-1">
				<DashboardButton />
			</div>
		</div>
	)
}

export default Cockpit
