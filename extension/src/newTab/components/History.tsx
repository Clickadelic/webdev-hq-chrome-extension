import React from 'react'
import {useState, useEffect} from 'react'

 
function History({classes}) {

	const [userHistory, setUserHistory] = useState([])

	function saveItem(page){
		console.log("Save:", page)
	}

	function deleteItem(url){
		chrome.history.deleteUrl(url)
		
	}

	function onRemoved(removeInfo) {
		if (removeInfo.urls.length) {
			console.log(`Removed: ${removeInfo.urls[0]}`);
		}
	}
	  
	chrome.history.onVisitRemoved.addListener(onRemoved);
	  
	function onGot(results) {
		if (results.length) {
		  console.log(`Removing: ${results[0].url}`);
		  chrome.history.deleteUrl({url: results[0].url});
		}
	}
	  
	  let searching = chrome.history.search({
		text: "",
		startTime: 0,
		maxResults: 1
	  });
	  
	  searching.then(onGot);
	
	function getHistory(){
		chrome.history.search({text: '', maxResults: 10}, (data) => {
			const history = data.map((page) => {
				let faviconUrl = "https://s2.googleusercontent.com/s2/favicons?domain="+page.url
				return (
					<li key={page.id} className="flex justify-between overflow-ellipsis">
						<a href={page.url} className="text-base text-white hover:text-slate-400 mb-1 truncate" target="_self" title={page.title}>
							<img src={faviconUrl} className="favicon inline-block mr-2" alt={page.title} />
							{page.title}
						</a>
						<span>
							<button onClick={() => {
								// console.log("This is to be deleted:", page.url)
								deleteItem(page.url)
							}} className="text-slate-400 hover:text-rose-600 mr-4">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
									<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
								</svg>
							</button>
							<button onClick={() => {
								console.log("This is to be saved:", page.url)
							}} className="text-blue-600 mr-4">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
									<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
								</svg>
							</button>
						</span>
					</li>
				)
			})
			setUserHistory(history)
			// console.log("History is:", history);
			// console.table(history);
		})
	}

	useEffect(() => {
		getHistory()
	}, [userHistory])

	return (
		<div className={`${classes}`}>
			<ul className="list-history p-4">
				{userHistory}
			</ul>
		</div>
	)
}

export default History