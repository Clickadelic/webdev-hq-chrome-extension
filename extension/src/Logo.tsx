import React from 'react'

function Logo(props) {
	return (
		<h1>
			<a href="https://webdev-hq.com/" className="text-2xl text-white hover:text-slate-300">
				<img src="../static/icons/extension/icon-32.png" className="logo inline mr-2 -mt-1" alt="WebDev HQ Logo" />
				<span className="web">Web</span><span className="dev-hq font">Dev HQ</span>
			</a>
		</h1>
	)
}

export default Logo