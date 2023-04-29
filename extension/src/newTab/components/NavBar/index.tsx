import React from 'react'
import Clock from 'react-digital-clock'

function NavBar() {
	return (
		<nav className="w-full mb-16 bg-slate-500">
			<ul className="grid grid-cols-7 gap-[1px] justify-center justify-items-stretch">
				
				<li className="bg-white/10"><a href="/" className="text-2xl text-slate-800 p-1">Widget</a></li>
				<li className="bg-white/10"><a href="/" className="text-2xl text-slate-800 p-1">Widget</a></li>
				<li className="bg-white/10"><a href="/" className="text-2xl text-slate-800 p-1">Widget</a></li>
				<li className="bg-white/10"><span className="text-2xl text-slate-800 p-1"><Clock /></span></li>
				<li className="bg-white/10"><a href="/" className="text-2xl text-slate-800 p-1">Widget</a></li>
				<li className="bg-white/10"><a href="/" className="text-2xl text-slate-800 p-1">Widget</a></li>
				<li className="bg-white/10"><a href="/" className="text-2xl text-slate-800 p-1">Widget</a></li>

			</ul>
		</nav>
	)
}

export default NavBar