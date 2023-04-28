import React from 'react'
import {Routes, Route} from 'react-router-dom'
import '../assets/css/tailwind.css'
import History from './components/History'
import About from './components/About'
import MultiBox from './components/MultiBox'
import NavBar from './components/NavBar'

function NewTab() {
	return (
		<div className="App h-screen bg-slate-900">
			<NavBar />
			<MultiBox />
			{/* <main className="md:w-full p-4 mb-4">
				<Routes>
					<Route path="/" element={<History />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</main> */}
		</div>
	)
}

export default NewTab