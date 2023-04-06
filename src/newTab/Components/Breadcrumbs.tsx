import React from 'react'

function Breadcrumbs() {
  return (
	<div className="breadcrumb-navigation mb-6 p-4 rounded bg-white/40 backdrop backdrop-blur-0">
		<ul className="flex font-medium text-1xl">
			<li><a href="/">WebDev HQ</a></li>
			<li><a href="#">Todos</a></li>
		</ul>
	</div>
  )
}

export default Breadcrumbs