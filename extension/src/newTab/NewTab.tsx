import React from 'react'
import {Routes, Route} from 'react-router-dom'
import '../assets/css/tailwind.css'
import History from './components/History'
import About from './components/About'
import SearchBox from './components/SearchBox'

function NewTab() {
	return (
		<div className="App h-screen bg-slate-100 bg-color-fog">
			<div className="m-auto px-4 pt-24 md:w-full">
				<SearchBox />
				<div className="tab-box md:w-[800px] m-auto">
					<nav className="tab-nav p-4 mb-4 rounded-full bg-white/30 backdrop-blur-md">
						<ul className="flex rounded-full bg-white list-none">
							<li><a href="#/" className="inline-block m-2 ml-6 p-2 text-base text-slate-500">History</a></li>
							<li><a href="#/about" className="inline-block m-2 p-2 text-base text-slate-500">About</a></li>
							<li><a href="/auth/google" className="inline-block m-2 p-2 text-base text-slate-500">Login with Google</a></li>
						</ul>
					</nav>
					<main className="md:w-full p-4 mb-4">
						<Routes>
							<Route path="/" element={<History />} />
							<Route path="/about" element={<About />} />
						</Routes>
					</main>
				</div>
			</div>
		</div>
	)
}

export default NewTab