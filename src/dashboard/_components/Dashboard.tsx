import React from "react";
import { Routes, Route } from "react-router-dom";
import "../../assets/css/tailwind.css";
import Logo from "../../components/Logo";

function Dashboard() {
	return (
		<div className="bg-white/10 backdrop backdrop-blur">
			<div className="App min-h-screen">
				<aside className="App-sidebar hidden fixed md:block top-0 left-0 w-64 min-h-screen bg-white border-r">
					<div className="App-sidebar-logo hidden md:flex justify-center px-2 py-3">
						<Logo classes="text-slate-700" />
					</div>
					<section className="sidebar-section mt-10 mb-6">
						<span className="text-slate-500 text-sm inline-block ml-4 mb-2">Dashboard</span>
						<ul className="sidebar-nav mb-2">
							<li>
								<a href="/" className="flex justify-between px-4 py-2 bg-sky-100 border-r-2 border-r-sky-500">
									<span className="flex">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-speedometer2 mt-1 mr-2" viewBox="0 0 16 16">
											<path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4M3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
											<path
												fillRule="evenodd"
												d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10m8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3"
											/>
										</svg>
										<span className="text-base font-medium">Dashboard</span>
									</span>
									<span>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up mt-1" viewBox="0 0 16 16">
											<path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
										</svg>
									</span>
								</a>
								<ul className="mb-0 ml-0">
									<li>
										<a className="block text-slate-600 hover:bg-slate-50 hover:border-r-2 py-1.5 pl-10" href="/">
											Default
										</a>
									</li>
									<li>
										<a className="block text-slate-600 hover:bg-slate-50 hover:border-r-2 py-1.5 pl-10" href="/">
											Analytics
										</a>
									</li>
								</ul>
							</li>
						</ul>
						<span className="text-slate-500 text-sm inline-block ml-4 mb-2">Projects</span>
						<ul className="sidebar-nav mb-2">
							<li>
								<a href="/" className="flex justify-between px-4 py-2 bg-sky-100 border-r-2 border-r-sky-500">
									<span className="flex">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-buildings mt-1 mr-2" viewBox="0 0 16 16">
											<path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z" />
											<path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z" />
										</svg>
										<span className="text-base font-medium">Projects</span>
									</span>
									<span>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up mt-1" viewBox="0 0 16 16">
											<path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
										</svg>
									</span>
								</a>
								<ul className="mb-0 ml-0">
									<li>
										<a className="block text-slate-600 hover:bg-slate-50 hover:border-r-2 py-1.5 pl-10" href="/">
											Project Data
										</a>
									</li>
									<li>
										<a className="block text-slate-600 hover:bg-slate-50 hover:border-r-2 py-1.5 pl-10" href="/">
											Business Intelligence
										</a>
									</li>
								</ul>
							</li>
						</ul>
						<span className="text-slate-500 text-sm inline-block ml-4 mb-2">Environments</span>
						<ul className="sidebar-nav mb-2">
							<li>
								<a href="/" className="flex justify-between px-4 py-2 bg-sky-100 border-r-2 border-r-sky-500">
									<span className="flex">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-signpost-split mt-1 mr-2" viewBox="0 0 16 16">
											<path d="M7 7V1.414a1 1 0 0 1 2 0V2h5a1 1 0 0 1 .8.4l.975 1.3a.5.5 0 0 1 0 .6L14.8 5.6a1 1 0 0 1-.8.4H9v10H7v-5H2a1 1 0 0 1-.8-.4L.225 9.3a.5.5 0 0 1 0-.6L1.2 7.4A1 1 0 0 1 2 7zm1 3V8H2l-.75 1L2 10zm0-5h6l.75-1L14 3H8z" />
										</svg>
										<span className="text-base font-medium">Environments</span>
									</span>
									<span>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up mt-1" viewBox="0 0 16 16">
											<path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
										</svg>
									</span>
								</a>
								<ul className="mb-0 ml-0">
									<li>
										<a className="block text-slate-600 hover:bg-slate-50 hover:border-r-2 py-1.5 pl-10" href="/">
											Development
										</a>
									</li>
									<li>
										<a className="block text-slate-600 hover:bg-slate-50 hover:border-r-2 py-1.5 pl-10" href="/">
											Production
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</section>
					<div className="absolute block left-0 bottom-0 w-100 p-1 bg-slate-200">
						<img src="/public/Avatar-1.png" className="w-12 h-12 m-2 ml-4 rounded-full border border-gray-200" alt="User Avatar" />
						<span className="flex flex-col mt-3">
							<span className="font-medium text-sm">JWT User</span>
							<span className="text-sm text-neutral-500">Administrator</span>
						</span>
					</div>
				</aside>
				<header className="App-header flex fixed top-0 md:ml-64 w-screen p-2 border-b bg-white">
					<nav className="flex justify-between w-max">
						<span className="p-0">
							<a href="/" className="border rounded w-8 h-8 p-2 md:hidden">
								<img src="../public/Dashboard.svg" className="logo w-6 h-6 inline -mt-1" alt="Tailwind Dashboard" />
								<span className="text-base hidden">
									<span className="font-medium">Tailwind</span>
									<span>Dashboard</span>
								</span>
							</a>
							<button className="hidden md:inline hover:bg-slate-100 ml-3 mr-1 rounded p-2 pt-1" id="btn-sidebar-toggle">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-text-indent-right" viewBox="0 0 16 16">
									<path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
								</svg>
							</button>
							<input type="search" name="search" className="search-input-mobile md:hidden p-2 border rounded-md ml-3 mt-1" placeholder="Search" />
							<input type="search" name="search" className="search-input-desktop hidden md:inline p-2 border rounded-md ml-3 mt-1" placeholder="Search / CTRL + K" />
						</span>
						<button className="fixed right-5 md:hidden bg-slate-100 rounded p-2 mt-1">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-text-indent-right" viewBox="0 0 16 16">
								<path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
							</svg>
						</button>
						<ul className="hidden fixed right-5 md:inline-flex md:mt-1 px-3">
							<li>
								<button className="hover:bg-slate-100 mt-1 mx-1 inline-flex p-2 rounded mega-menu-trigger">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-windows" viewBox="0 0 16 16">
										<path d="M6.555 1.375 0 2.237v5.45h6.555zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16z" />
									</svg>
								</button>
								<div className="grid grid-cols-3 hidden w-860 h-72 rounded-md overflow-hidden top-12 right-12 bg-white shadow-md border">
									<div className="gradient bg-waves p-8 flex flex-col">
										<h2 className="text-white text-2xl font-medium mb-6">Explore your Data</h2>
										<p className="text-white mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quod.</p>
										<a className="text-slate-600 bg-slate-50 p-2 mt-5 rounded-md">View</a>
									</div>
									<div className="p-8">
										<span className="block font-medium mb-4">Authentication</span>
										<ul className="list-disc ml-5">
											<li>
												<a className="mb-2 block hover:text-slate-500" href="/">
													Login
												</a>
											</li>
											<li>
												<a className="mb-2 block hover:text-slate-500" href="/">
													Register
												</a>
											</li>
											<li>
												<a className="mb-2 block hover:text-slate-500" href="/">
													Forgot Password
												</a>
											</li>
											<li>
												<a className="mb-2 block hover:text-slate-500" href="/">
													Delete Account
												</a>
											</li>
										</ul>
									</div>
									<div className="p-8">
										<span className="block font-medium mb-4">Dashboard</span>
										<ul className="list-disc ml-5">
											<li>
												<a className="mb-2 block hover:text-slate-500" href="/">
													Overview
												</a>
											</li>
											<li>
												<a className="mb-2 block hover:text-slate-500" href="/">
													Data Sets
												</a>
											</li>
											<li>
												<a className="mb-2 block hover:text-slate-500" href="/">
													Administration
												</a>
											</li>
										</ul>
									</div>
								</div>
							</li>
							<li>
								<button className="hover:bg-slate-100 mt-1 mx-1 inline-flex p-2 rounded">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-translate" viewBox="0 0 16 16">
										<path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
										<path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
									</svg>
								</button>
							</li>
							<li>
								<button className="hover:bg-slate-100 mt-1 mx-1 inline-flex p-2 rounded">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
										<path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
									</svg>
								</button>
							</li>
							<li>
								<button className="hover:bg-slate-100 mt-1 mx-1 inline-flex p-2 rounded">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
										<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
									</svg>
								</button>
							</li>
							<li>
								<button className="hover:bg-slate-100 mt-1 mx-1 inline-flex p-2 rounded">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
										<path
											fillRule="evenodd"
											d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707"
										/>
									</svg>
								</button>
							</li>
							<li>
								<button className="hover:bg-slate-100 mt-1 mx-1 inline-flex p-2 rounded">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
										<path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
										<path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
									</svg>
								</button>
							</li>
							<li>
								<button className="hover:bg-slate-100 mx-2 inline-flex p-2 rounded">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle mt-1 mr-2" viewBox="0 0 16 16">
										<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
										<path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
									</svg>
									<span>Username</span>
								</button>
							</li>
						</ul>
					</nav>
				</header>
				<div className="pt-16 pl-4 pr-4 md:pl-72 md:pt-24 md:w-full min-h-screen">
					<div className="breadcrumb-navigation mb-6">
						<ul className="flex">
							<li>
								<a href="/" className="text-slate-400">
									Home
								</a>
							</li>
						</ul>
					</div>
					<main className="md:w-full">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
							<div className="bg-white rounded-lg pb-2 mb-3 border border-slate-200 overflow-hidden">
								<h2 className="font-medium w-100 p-3 mb-2 bg-sky-200">Box</h2>
								<p className="mx-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, tempore!</p>
							</div>
							<div className="bg-white rounded-lg pb-2 mb-3 border border-slate-200 overflow-hidden">
								<h2 className="font-medium w-100 p-3 mb-2 bg-amber-200">Box</h2>
								<p className="mx-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, tempore!</p>
							</div>
							<div className="bg-white rounded-lg pb-2 mb-3 border border-slate-200 overflow-hidden">
								<h2 className="font-medium w-100 p-3 mb-2 bg-fuchsia-200">Box</h2>
								<p className="mx-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, tempore!</p>
							</div>
							<div className="bg-white rounded-lg pb-2 mb-3 border border-slate-200 overflow-hidden">
								<h2 className="font-medium w-100 p-3 mb-2 bg-rose-200">Box</h2>
								<p className="mx-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, tempore!</p>
							</div>
						</div>
						<div className="grid grid-rows-3 grid-flow-col gap-3">
							<div className="row-span-3 bg-white rounded-lg p-2 px-3">
								<h2 className="font-medium">Box</h2>
								<p className="mx-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quaerat.</p>
							</div>
							<div className="col-span-2 bg-white rounded-lg p-2 px-3">
								<h2 className="font-medium">Box</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quaerat.</p>
							</div>
							<div className="row-span-2 col-span-2 bg-white rounded-lg p-2 px-3">
								<h2 className="font-medium">Box</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quaerat.</p>
							</div>
							<div className="bg-white rounded-lg p-2 px-3">
								<h2 className="font-medium">Box</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quaerat.</p>
							</div>
							<div className="bg-white rounded-lg p-2 px-3">
								<h2 className="font-medium">Box</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quaerat.</p>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
