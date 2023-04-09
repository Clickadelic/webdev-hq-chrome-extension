import React from 'react'
import {Routes, Route} from 'react-router-dom'
import '../assets/css/tailwind.css'
import History from './components/History'
import About from './components/About'
import SearchBox from './components/SearchBox'

function NewTab() {
	return (
		<div className="App flex h-screen bg-slate-100 bg-window-wall">
			<div className="m-auto px-4 md:w-full">
				<SearchBox />
				<div className="tab-box md:w-[800px] m-auto p-4 rounded bg-white/30 backdrop-blur-md">
					<nav className="tab-nav">
						<ul className="flex bg-white list-none">
							<li><a href="#/" className="inline-block m-2 p-2 text-2xl text-slate-500">History</a></li>
							<li><a href="#/about" className="inline-block m-2 p-2 text-2xl text-slate-500">About</a></li>
						</ul>
					</nav>
					<main className="md:w-full bg-white">
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