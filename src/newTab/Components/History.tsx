import React from 'react'
import {useState, useEffect} from 'react'

function History() {

	const [userHistory, setUserHistory] = useState([])

	function readHistory() {
		chrome.history.search({text: '', maxResults: 20}, (data) => {
		console.log(data);
		return data
		// data.forEach(function(page) {
		// 	// console.log({page})
		// 	return <li><a href={page.url}>{page.title}</a></li>
		// })
		})
	}

	return (
		<div className="de">
			<ul>
				
			</ul>
		</div>
	)
	
}

export default History