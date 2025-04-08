import iconSrc from "@/assets/icons/extension/icon-32.png"
import { cn } from "@/lib/utils"

interface AppIconProps {
	url: string
	classNames?: string
}

const AppIcon = ({ url, classNames }: AppIconProps) => {
	return (
		<a href={`${url}`} className={cn("size-7", classNames || "")} title="WebDev HQ">
			<img src={iconSrc} className="size-7" alt="WebDev HQ App-Icon" />
		</a>
	)
}

export default AppIcon
