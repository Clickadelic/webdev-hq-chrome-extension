import { useState, useEffect } from "react"
import { BsTrash3 } from "react-icons/bs"
import { Button } from "@/components/ui/button"

import { getFaviconUrl, deleteUserHistory } from "@/lib/utils"

const fallbackFavicon = "/assets/icons/default-website-favicon.png" // Stelle sicher, dass dieses Bild in deinem `public`-Ordner liegt

const UserHistory = () => {
	const deleteHistoryLabel = chrome.i18n.getMessage("delete_history")
	const noHistoryFoundLabel = chrome.i18n.getMessage("no_history_found")

	const [history, setHistory] = useState<chrome.history.HistoryItem[]>([])

	useEffect(() => {
		chrome.runtime.sendMessage({ action: "getHistory" }, response => {
			if (response && response.history) {
				setHistory(response.history)
			}
		})
	}, [history])

	return (
		<>
			{history.length === 0 ? (
				<div className="bg-white/30 backdrop p-1 rounded">
					<div className="bg-white rounded p-2">
						<p className="text-center text-md text-slate-500">{noHistoryFoundLabel}</p>
					</div>
				</div>
			) : (
				<div className="bg-white/30 backdrop p-1 rounded">
					<ul className="w-full space-y-2">
						{history.map(entry => (
							<li key={entry.id} className="p-3 border rounded flex flex-col gap-2 bg-white md:flex-row md:items-center md:justify-between">
								<a href={entry.url} className="flex items-center gap-2 p-1 rounded text-md w-full truncate" target="_blank" rel="noopener noreferrer">
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
									className="p-2 rounded text-rose-500 hover:cursor-pointer hover:text-rose-600"
								>
									<BsTrash3 className="size-3" />
								</button>
							</li>
						))}
					</ul>
					<Button
						onClick={async () => {
							await deleteUserHistory()
							setHistory([]) // UI leeren
						}}
						variant="ghost"
						className="w-full mt-4 rounded hover:cursor-pointer"
					>
						{deleteHistoryLabel}
					</Button>
				</div>
			)}
		</>
	)
}

export default UserHistory
