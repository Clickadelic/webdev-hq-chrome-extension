import React from 'react'
import {Routes, Route} from 'react-router-dom'
import '../assets/css/tailwind.css'
import NavBar from './components/NavBar'
import Logo from '../Logo'
import FormSearchBar from './components/FormSearchBar'
import History from './components/History'
import About from './components/About'
import SettingsButton from './components/SettingsButton'


function NewTab() {
	
	return (
		<div className="App h-screen bg-slate-900 bg-mountain-beach">
			<div className="flex m-auto mb-24">
				<NavBar />
			</div>
			<div className="flex m-auto md:w-[600px] justify-center mb-12">
				<Logo />
			</div>
			<div className="flex m-auto md:w-[600px] justify-center mb-12 rounded bg-white/10 backdrop backdrop-blur p-2">
				<div className="bg-white p-3 w-full rounded">
					<FormSearchBar />
				</div>
			</div>
			<main className="md:w-full p-4 mb-4">
				<Routes>
					<Route path="/" element={<History />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</main>
			<footer>
				<p>Footer Stuff</p>
			</footer>
			<SettingsButton />
		</div>
	)
}

export default NewTab