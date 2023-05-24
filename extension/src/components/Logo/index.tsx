import React from 'react'

function Logo({classes}) {
	return (
		<h1 className="md:block w-56 m-auto">
			<a href="https://webdev-hq.com/" className={classes}>
				<img src="../static/icons/extension/icon-32.png" className="logo inline mr-2 -mt-1" alt="WebDev HQ Logo" />
				<span className="font-light"><span className="web">Web</span><span className="dev-hq font-medium">Dev HQ</span></span>
			</a>
		</h1>
	)
}

export default Logo