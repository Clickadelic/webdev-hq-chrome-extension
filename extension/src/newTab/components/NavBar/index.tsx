import React from 'react'
import DigitalClock from '../DigitalClock'

function NavBar({name}) {
	
	return (
		<nav className="w-full">
			<ul className="navbar-grid">
				<li><a href="/" className="p-2 block text-2xl">{/*a*/}</a></li>
				<li><a href="/" className="p-2 block text-2xl">{/*a*/}</a></li>
				<li><a href="/" className="p-2 block text-2xl">{/*a*/}</a></li>
				<li>
					<DigitalClock label="Uhr" classes="text-white text-2xl p-3" />
				</li>
				<li><a href="/" className="p-2 block text-2xl">{/*a*/}</a></li>
				<li><a href="/" className="p-2 block text-2xl">{/*a*/}</a></li>
				<li>
					<div className="block">
						<a href="auth/google/" className="text-white">{name ? name : ''}</a>
					</div>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar