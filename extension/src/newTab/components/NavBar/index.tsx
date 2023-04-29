import React from 'react'
import Clock from 'react-digital-clock'

function NavBar() {
	return (
		<nav className="w-full mb-16 bg-white">
			<ul className="grid grid-cols-7 gap-[1px] content-center items-center">
				<li>Stuff</li>
				<li>Stuff</li>
				<li>Stuff</li>
				<li><span className=""><Clock /></span></li>
				<li>Stuff</li>
				<li>Stuff</li>
				<li>Stuff</li>
			</ul>
		</nav>
	)
}

export default NavBar