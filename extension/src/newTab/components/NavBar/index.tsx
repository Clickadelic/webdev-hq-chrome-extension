import React from 'react'
import DigitalClock from '../DigitalClock'



function NavBar() {
	
	return (
		<nav className="w-full">
			<ul className="navbar-grid">
				<li><a href="/" className="p-2 block text-2xl">Link</a></li>
				<li><a href="/" className="p-2 block text-2xl">Link</a></li>
				<li><a href="/" className="p-2 block text-2xl">Link</a></li>
				<li>
					<DigitalClock
						label="Uhr"
						textClasses="text-slate-400 text-2xl"
						backgroundClasses="bg-white/10 backdrop backdrop-blur rounded p-3"
					/>
				
				</li>
				<li><a href="/" className="p-2 block text-2xl">Link</a></li>
				<li><a href="/" className="p-2 block text-2xl">Link</a></li>
				<li>
					<div className="block">
						<a href="auth/google/">Login with Google</a>
					</div>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar