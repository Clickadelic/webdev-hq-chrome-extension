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
			className="absolute bottom-0 mx-auto bg-white/10 backdrop backdrop-blur flex justify-center hover:bg-slate-200 w-96 p-2 rounded-t-md"
			role="button"
			onClick={() => {
				chrome.tabs.create({ url: "dashboard.html" })
			}}
		>
			<span className="text-base font-medium text-white">Mini-Dashboard</span>
		</div>
	)
}

export default MiniDashboard
