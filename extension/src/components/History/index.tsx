import React from 'react';
import { useState, useEffect } from 'react';

function History({ classes }) {
    const [userHistory, setUserHistory] = useState([]);

    function saveItem(url) {
        console.log("Save:", url);
    }

    function deleteItem(url) {
        chrome.history.deleteUrl({url}, () => {
            return;
        });
    }
    function getHistory() {
        chrome.history.search({ text: '', maxResults: 10 }, (data) => {
            const history = data.map((page) => {
                let faviconUrl = "https://s2.googleusercontent.com/s2/favicons?domain=" + page.url;
                return <li className="flex justify-between">
                    		<a href={page.url} className="block w-full text-base text-white hover:text-slate-400 mb-1 whitespace-nowrap overflow-hidden" target="_self" title={page.title}>
                        	<img src="faviconUrl" className="favicon inline-flex mr-6" alt={page.title} title={page.title} />
                    		<span  className="inline-flex ml-2 pl-2">
                        		<button onClick={() => {deleteItem(page.url)}} className="text-slate-400 hover:text-rose-600 mr-4">{page.title}</button>
							</span>
							</a>
						</li>
			})
		})
	}
}
export default History;          
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
							
