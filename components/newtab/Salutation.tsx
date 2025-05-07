import { dailySalutation } from "@/lib/utils"
import { cn } from "@/lib/utils"

interface SalutationProps {
	classNames?: string
}

/**
 * Renders a salutation based on the time of day.
 * @param {Object} props Component props
 * @param {string} [props.classNames] Additional class names to add to the component
 * @returns {ReactElement} JSX element
 */
const Salutation = ({ classNames }: SalutationProps) => {
	const salutation = dailySalutation()
	return <h1 className={cn("flex", classNames)}>{salutation}</h1>
}

export default Salutation
