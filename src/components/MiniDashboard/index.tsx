import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
function MiniDashboard() {
	const [open, setOpen] = useState(false)
	const toggle = () => {
		setOpen(!open)
		console.log(toggle)
	}

	return (
		<div
			className="absolute bottom-0 left-0 right-0 flex justify-center bg-white hover:bg-slate-200 mx-auto w-96 p-2 rounded-t-md"
			role="button"
			onClick={() => {
				chrome.tabs.create({ url: "dashboard.html" })
			}}
		>
			<span className="text-base font-medium text-neutral-500">Mini-Dashboard</span>
		</div>
	)
}

export default MiniDashboard
