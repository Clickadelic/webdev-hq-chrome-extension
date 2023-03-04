import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'

function NewTab() {
  return (
	<div>
		<ul>
			<li><a href="#/">Home</a></li>
			<li><a href="#/about">About</a></li>
		</ul>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route index element={<About />} />
		</Routes>

	</div>
  )
}

export default NewTab