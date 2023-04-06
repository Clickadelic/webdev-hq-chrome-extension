import React from 'react'

function HeaderSidebar() {
	function handleClick(){
		alert("Yo, clicked")
	}
	return (
		<>
			<aside className="App-sidebar hidden md:block fixed top-0 left-0 w-64 min-h-screen bg-white shadow">
				<div className="App-sidebar-logo flex justify-center px-2 py-3">
					<h1 className="text-2xl">
						<img src="../static/icons/extension/icon-32.png" className="logo inline mr-2 -mt-1" alt="WebDev HQ Logo" />
						<span className="web">Web</span><span className="dev-hq font-medium">Dev HQ</span>
					</h1>
				</div>
				<section className="sidebar-section mt-10 mb-6">
					<h2 className="text-1xl font-medium mx-5 my-3">Dashboard</h2>
					<ul className="sidebar-nav">
						<li><a href="#/" className="block px-4 py-2 bg-sky-100 border-r-2 border-r-sky-500">Home</a></li>
						<li><a href="#/about" className="block px-4 py-2 bg-sky-100 border-r-2 border-r-sky-500">About</a></li>
					</ul>
				</section>
			</aside>
			<header className="App-header flex fixed top-0 md:ml-64 w-screen p-2 bg-white shadow">
				<nav className="flex justify-between w-max">
					<span className="p-0">
						<a href="/" className="md:hidden">
							<img src="#" className="logo inline mx-2 -mt-1" alt="WebDev HQ Logo" />
						</a>
						<button onClick={() => {handleClick()}} className="bg-slate-200 hidden md:inline hover:bg-slate-300 ml-3 mr-1 rounded p-2 pt-1" id="btn-sidebar-toggle">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-text-indent-right" viewBox="0 0 16 16">
								<path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
							</svg>
						</button>
						{/* This can be done better with CSS */}
						<input type="search" name="search" className="search-input-mobile md:hidden p-2 border rounded-md ml-3 mt-1" placeholder="Search" />
						<input type="search" name="search" className="search-input-desktop hidden md:inline p-2 border rounded-md ml-3 mt-1" placeholder="Search / CTRL + K" />
					</span>
					<button className="fixed right-5 md:hidden bg-slate-200 rounded p-2">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-text-indent-right" viewBox="0 0 16 16">
							<path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
						</svg>
					</button>
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
		</>
	)
}

export default HeaderSidebar