import React from 'react'
import DigitalClock from '../DigitalClock'
function NavBar() {
	return (
		<nav className="flex justify-between mb-16 p-4">
			<ul className="flex">
				<li><a href="/" className="p-2 text-white text-base hover:text-slate-300">Link</a></li>
				<li><a href="/" className="p-2 text-white text-base hover:text-slate-300">Link</a></li>
				<li><a href="/" className="p-2 text-white text-base hover:text-slate-300">Link</a></li>
			</ul>
			<DigitalClock />
			<ul className="flex">
				<li><a href="/" className="p-2 text-white text-base hover:text-slate-300">Link</a></li>
				<li><a href="/" className="p-2 text-white text-base hover:text-slate-300">Link</a></li>
				<li><a href="/" className="p-2 text-white text-base hover:text-slate-300">Link</a></li>
				<li><a href="/" className="p-2 text-white text-base hover:text-slate-300">Link</a></li>
				<li><a href="/" className="p-2 text-white text-base hover:text-slate-300">Login</a></li>
			</ul>
		</nav>
	)
}

export default NavBar