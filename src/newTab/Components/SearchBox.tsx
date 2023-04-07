import React from 'react'
import { useState, useEffect } from 'react'
function SearchBox() {

	const handleChange = (e) => {

		// const [engine, setEngine] = useState('https://search.brave.com/search')
		console.log(e)
	}

	return (
		<div className="searchbox flex md:w-[800px] m-auto justify-center p-4 mb-4 rounded bg-white/30 backdrop-blur-md">
			<form method="GET" className="flex md:w-[800px]" action="#" id="action-search">
				<input type="text" className="p-3 text-2xl w-full rounded-tl rounded-bl mx-auto" name="q" id="q" placeholder={chrome.i18n.getMessage("search")} />
				<select onChange={handleChange} name="search-engine" id="search-engine" className="p-3 text-2xl">
					<option value="https://search.brave.com/search">Brave</option>
					<option value="https://www.google.com/">Google</option>
					<option value="https://www.bing.com/">Bing</option>
					<option value="https://duckduckgo.com/">Duck</option>
				</select>
				<button className="bg-white text-slate-500 hover:text-blue-500 rounded-br rounded-tr p-6" type="submit">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
						<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
					</svg>
				</button>
			</form>
		</div>
	)
}

export default SearchBox