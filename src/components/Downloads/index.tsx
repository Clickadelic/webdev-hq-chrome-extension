import React from 'react'
import {useState, useEffect} from 'react'

function Downloads({classes}) {

	const [userDownloads, setUserDownloads] = useState([])
	
	function getDownloads(){
		chrome.downloads.search({limit: 10}, (downloads) => {
			const downloadList = downloads.map((item) => {
				return <li key={item.id} className="text-white text-base">{item.filename}</li>
			})
			setUserDownloads(downloadList)
		})
	}

	function deleteDownloads(){
		alert("Deleting downloads")
	}

	function openDownloadFolder(){
		chrome.downloads.showDefaultFolder()
	}

	useEffect(() => {
		getDownloads()
	}, [userDownloads])

	return (
		<div className={`${classes}`}>
			<ul className="list-downloads p-2">
				{userDownloads}
			</ul>
			<button onClick={openDownloadFolder} className="flex text-white m-auto p-3 text-base hover:text-slate-400">{chrome.i18n.getMessage("openDownloadsFolder")}</button>
		</div>
	)
}

export default Downloads