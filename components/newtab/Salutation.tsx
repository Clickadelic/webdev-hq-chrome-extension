import { dailySalutation } from "@/lib/utils"
import { cn } from "@/lib/utils"

interface SalutationProps {
	classNames?: string
}

const Salutation = ({ classNames }: SalutationProps) => {
	const salutation = dailySalutation()
	return <h1 className={cn("flex", classNames)}>{salutation}</h1>
}

export default Salutation
