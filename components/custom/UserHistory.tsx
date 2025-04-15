import { useState, useEffect } from "react"
import { BsTrash3 } from "react-icons/bs"

import { getFaviconUrl } from "@/utils"

const fallbackFavicon = "/assets/icons/default-website-favicon.png" // Stelle sicher, dass dieses Bild in deinem `public`-Ordner liegt

const UserHistory = () => {
	const [history, setHistory] = useState<chrome.history.HistoryItem[]>([])

	useEffect(() => {
		// Abrufen der Historie von der Chrome-Erweiterung
		chrome.runtime.sendMessage({ action: "getHistory" }, response => {
			if (response && response.history) {
				setHistory(response.history)
			}
		})
	}, [])

	return (
		<>
			{history.length === 0 ? (
				<p>Loading...</p>
			) : (
				<ul className="w-full space-y-3">
					{history.map(entry => (
						<li key={entry.id} className="flex items-center justify-between gap-2">
							<a href={entry.url} className="flex items-center gap-2 p-1 rounded text-md w-full hover:bg-slate-200" target="_blank" rel="noopener noreferrer">
								{entry.url && (
									<img
										src={getFaviconUrl(entry.url)}
										onError={e => {
											e.currentTarget.src = fallbackFavicon
										}}
										alt="Favicon"
										className="size-4 rounded-sm"
										referrerPolicy="no-referrer"
									/>
								)}
								{entry.title || entry.url}
							</a>
							<button
								onClick={() => {
									if (entry.url) {
										chrome.history.deleteUrl({ url: entry.url }, () => {
											setHistory(prev => prev.filter(item => item.url !== entry.url))
										})
									}
								}}
								className="p-2 rounded bg-rose-500 text-white hover:cursor-pointer hover:bg-rose-600"
							>
								<BsTrash3 className="size-3" />
							</button>
						</li>
					))}
				</ul>
			)}
		</>
	)
}

export default UserHistory
