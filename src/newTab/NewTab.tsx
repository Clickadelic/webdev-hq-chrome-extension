import React from 'react'
import {Routes, Route} from 'react-router-dom'
import '../assets/css/tailwind.css'
import Home from './components/Home'
import About from './components/About'

function NewTab() {
	return (

	<div className="App bg-slate-100 min-h-screen">
		<aside className="App-sidebar hidden md:block fixed top-0 left-0 w-64 min-h-screen bg-white shadow">
			<div className="App-sidebar-logo flex justify-center px-2 py-3">
				<h1 className="text-2xl">
					<img src="/" className="logo inline mr-2 -mt-1" alt="WebDev HQ Logo" />
					<span className="web">Web</span><span className="dev-hq font-medium">Dev HQ</span>
				</h1>
			</div>
			<section className="sidebar-section mt-10 mb-6">
				<h2 className="text-1xl font-medium mx-5 my-3">SVG Todos</h2>
				<ul className="sidebar-nav">
					<li><a href="/" className="block px-4 py-2 bg-sky-100 border-r-2 border-r-sky-500">SVG All Todos</a></li>
				</ul>
			</section>
		</aside>
		<header className="App-header flex fixed top-0 md:ml-64 w-screen p-2 bg-white shadow">
			<nav className="flex justify-between w-max">
				<span className="p-0">
					<a href="/" className="md:hidden"><img src="#" className="logo inline mx-2 -mt-1" alt="WebDev HQ Logo" /></a>
					<button className="bg-slate-200 hidden md:inline hover:bg-slate-300 ml-3 mr-1 rounded p-2 pt-1" id="btn-sidebar-toggle">
						SVG
					</button>

					{/* This can be done better with CSS */}
					<input type="search" name="search" className="search-input-mobile md:hidden p-2 border rounded-md ml-3 mt-1" placeholder="Search" />
					<input type="search" name="search" className="search-input-desktop hidden md:inline p-2 border rounded-md ml-3 mt-1" placeholder="Search / CTRL + K" />
				</span>
				<button className="fixed right-5 md:hidden bg-slate-200 rounded p-2">SVG</button>
				<ul className="hidden fixed right-5 md:inline-flex md:mt-1">
					<li>
						<button className="bg-slate-200 mx-2 inline-flex p-3 rounded">
							SVG
						</button>
					</li>
					<li>
						<button className="bg-slate-200 mx-2 inline-flex p-3 rounded">
							SVG
						</button>
					</li>
					<li>
						<button className="bg-slate-200 mx-2 inline-flex p-3 rounded">
							SVG
						</button>
					</li>
					<li>
						<button className="bg-slate-200 mx-2 inline-flex p-3 rounded">
							SVG
						</button>
					</li>
					<li>
						<button className="bg-slate-200 mx-2 inline-flex p-3 rounded">
							SVG
						</button>
					</li>
					<li>
						<button className="bg-slate-200 mx-2 inline-flex p-3 rounded">
							SVG
						</button>
					</li>
				</ul>
			</nav>
		</header>
		<div className="pt-16 pl-4 pr-4 md:pl-72 md:pt-24 md:w-full min-h-screen">
			<div className="breadcrumb-navigation mb-6">
				<ul className="flex">
					<li><a href="/">WebDev HQ</a></li>
					<li><a href="#">Todos</a></li>
				</ul>
			</div>
			<main className="md:w-full">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</main>
			{/* <main className="md:w-full">
				<div className="grid grid-cols-6 gap-4">
					<div className="bg-green-200 rounded">
						<h2>Todos</h2>
						<ul>
							<li><a href="/">ListItem</a></li>
						</ul>
					</div>
					<div className="bg-green-200 rounded">
						<h2>Todos</h2>
						<ul>
							<li><a href="/">ListItem</a></li>
						</ul>
					</div>
					<div className="bg-green-200 rounded">
						<h2>Todos</h2>
						<ul>
							<li><a href="/">ListItem</a></li>
						</ul>
					</div>
					<div className="bg-green-200 rounded">
						<h2>Todos</h2>
						<ul>
							<li><a href="/">ListItem</a></li>
						</ul>
					</div>
					<div className="bg-green-200 rounded">
						<h2>Todos</h2>
						<ul>
							<li><a href="/">ListItem</a></li>
						</ul>
					</div>
					<div className="bg-green-200 rounded">
						<h2>Todos</h2>
						<ul>
							<li><a href="/">ListItem</a></li>
						</ul>
					</div>
				</div>
			</main> */}
		</div>
	</div>

	)
}

export default NewTab