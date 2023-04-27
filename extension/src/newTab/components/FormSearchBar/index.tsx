import React from 'react';
import { useState, useEffect } from 'react';

function FormSearchBar() {

	const [engine, setEngine] = useState("https://search.brave.com/search")
	const [userSettings, setUserSettings] = useState({})

	function handleChange(e){
		setEngine(e.target.value)
		setUserSettings({currentSearchEngine: e.target.value})
	}

	function handleSettingsClick(e){
		e.preventDefault()
		alert("Clicked settings")
	}
	console.log(userSettings)
	return (
		<form method="GET" className="flex justify-between" action={engine} id="multi-search">
			<input type="text" className="w-full text-base pl-3 focus-visible:outline-0" name="q" id="q" placeholder={chrome.i18n.getMessage("search")} />
			<select onChange={(e) => {handleChange(e)}} value={engine} name="search-engine" id="search-engine" className="p-3 text-lg">
				<option value="https://search.brave.com/search" className="brave">Brave</option>
				<option value="https://www.google.com/search" className="google">Google</option>
				<option value="https://www.bing.com/search" className="bing">Bing</option>
				<option value="https://duckduckgo.com/search" className="duck">Duck</option>
			</select>
			<button onClick={handleSettingsClick} className="px-4 ml-3 rounded-md text-slate-400 hover:text-slate-600">
				<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
					<path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
					<path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
				</svg>
			</button>
			<button className="px-4 ml-3 rounded-md bg-sky-500 hover:bg-sky-600 text-white" type="submit">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
					<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
				</svg>
			</button>
		</form>
	)
}

export default FormSearchBar