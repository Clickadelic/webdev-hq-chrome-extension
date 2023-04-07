import React from 'react'
import {useState, useEffect} from 'react'

function History() {

	
	const history = () => {

		chrome.history.search({text: '', maxResults: 20}, (data) => {

			data.forEach(function(page) {
				// console.log({page})
				return <li><a href={page.url}>{page.title}</a></li>
			})

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