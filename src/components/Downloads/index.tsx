import React from 'react'
import {useState, useEffect} from 'react'

function Downloads({classes}) {

	const [userDownloads, setUserDownloads] = useState([])
	
	function getDownloads(){
		alert("Loading downloads")
	}

	function deleteDownloads(){
		alert("Deleting downloads")
	}

	useEffect(() => {
		getDownloads()
	}, [userDownloads])

	return (
		<div className={`${classes}`}>
			<ul className="list-downloads p-1 w-full min-h-[20px]">
				{userDownloads}
			</ul>
			<ul className="list-history-actions flex justify-center w-full border-t border-slate-400">
				<li><button onClick={deleteDownloads} className="px-2 py-3 text-white text-base hover:text-slate-300" title={chrome.i18n.getMessage("deleteDownloads")}>{chrome.i18n.getMessage("deleteDownloads")}</button></li>
			</ul>
		</div>
	)
}

export default Downloads