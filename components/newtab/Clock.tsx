// components/Clock.tsx

import React, { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// TODO: Naming is bad, improve it
interface ClockProps {
	wrapperClasses?: string
	middleClasses?: string
	innerClasses?: string
}

const Clock: React.FC = ({ wrapperClasses, middleClasses, innerClasses }: ClockProps) => {
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
		<div className={cn("w-28 bg-white/30 backdrop-blur rounded p-1", wrapperClasses)}>
			<Card className={cn("rounded py-1 shadow-none", middleClasses)}>
				<CardContent className={cn("p-0 text-center space-x-1 text-lg text-slate-600 font-light", innerClasses)}>
					<span>{time}</span>
					<span>{oClockLabel}</span>
				</CardContent>
			</Card>
		</div>
	)
}

export default Clock
