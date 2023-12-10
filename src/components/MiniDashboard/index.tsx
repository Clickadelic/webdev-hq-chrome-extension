import React from "react"
import { useState } from "react"

function MiniDashboard() {
	const [open, setOPen] = useState(false)
	const toggle = () => {
		setOPen(!open)
	}

	return (
		<div className="absolute bottom-2 left-0 right-0 flex justify-center">
			<button onClick={toggle}>Actions</button>
		</div>
	)
}

export default MiniDashboard
