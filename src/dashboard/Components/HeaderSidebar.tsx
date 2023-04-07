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
					<h2 className="text-1xl font-medium mx-5 my-3 flex">
						<span className="mt-1.5 mr-4">
							<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-speedometer2" viewBox="0 0 16 16">
							<path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
							<path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
							</svg>
						</span>
						<span>Dashboard</span>
					</h2>
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
						<form method="POST" className="inline">
							<input type="search" name="search" className="search-input-mobile md:hidden p-2 border rounded-md ml-3 mt-1" placeholder="Search" />
							<input type="search" name="search" className="search-input-desktop hidden md:inline p-2 border rounded-md ml-3 mt-1" placeholder="Search / CTRL + K" />
						</form>
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