import React from 'react'
import {Routes, Route} from 'react-router-dom'
import '../assets/css/tailwind.css'
import HeaderSidebar from './components/HeaderSidebar'
import Home from './components/Home'
import About from './components/About'
import Breadcrumbs from './components/Breadcrumbs'

function Dashboard() {
	return (
		<div className="App bg-slate-100 bg-window-wall min-h-screen">
			<HeaderSidebar />
			<div className="pt-16 pl-4 pr-4 md:pl-72 md:pt-24 md:w-full min-h-screen">
				<Breadcrumbs />
				<main className="md:w-full">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</main>
			</div>
		</div>
	)
}

export default Dashboard