// components/Clock.tsx

import React, { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

// TODO: Naming is bad, improve it
interface ClockProps {
	wrapperClasses?: string
	digits?: string
}

const Clock: React.FC<ClockProps> = ({ wrapperClasses, digits }: ClockProps) => {
	const [time, setTime] = useState<string>("")

	const oClockLabel = chrome.i18n.getMessage("o_clock")
	useEffect(() => {
		const updateClock = () => {
			const now = new Date()
			const formatter = new Intl.DateTimeFormat(navigator.language, {
				hour: "numeric",
				minute: "2-digit"
			})
			setTime(formatter.format(now))
		}

		updateClock() // Initial load
		const interval = setInterval(updateClock, 1000) // Update every second

		return () => clearInterval(interval)
	}, [])

	return (
		<div className={cn("w-28 flex gap-2", wrapperClasses)}>
			<span className={cn("text-4xl", digits)}>{time}</span>
			<span className={cn("text-4xl", digits)}>{oClockLabel}</span>
		</div>
	)
}

export default Clock
