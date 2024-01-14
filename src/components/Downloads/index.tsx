import React from "react";
import { useState, useEffect } from "react";

function Downloads() {
	const [userDownloads, setUserDownloads] = useState([]);

	function getDownloads() {
		chrome.downloads.search({ limit: 10 }, downloads => {
			const downloadList = downloads.map(item => {
				return (
					<li key={item.id} className="text-white text-base hover:text-slate-400">
						{item.filename}
					</li>
				);
			});
			setUserDownloads(downloadList);
		});
	}

	function openDownloadFolder() {
		chrome.downloads.showDefaultFolder();
	}

	useEffect(() => {
		getDownloads();
	}, [userDownloads]);

	return (
		<div className="flex flex-col m-auto md:w-[760px] rounded bg-white/10 backdrop backdrop-blur p-2">
			<h2 className="text-base text-white m-auto p-2">{chrome.i18n.getMessage("downloads")}</h2>
			<hr className="mx-2" />
			<ul className="list-downloads p-2">{userDownloads}</ul>
			<button onClick={openDownloadFolder} className="flex text-white m-auto p-3 text-base hover:text-slate-400">
				{chrome.i18n.getMessage("openDownloadsFolder")}
			</button>
		</div>
	);
}

export default Downloads;
