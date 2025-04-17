import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

interface DownloadItem {
	id: number
	filename: string
	url: string
	state: string
	bytesReceived: number
	totalBytes: number
}

const UserDownloads = () => {
	const [downloads, setDownloads] = useState<DownloadItem[]>([])

	const fetchDownloads = () => {
		if (!chrome?.downloads?.search) return

		chrome.downloads.search({ limit: 10, orderBy: ["-startTime"] }, items => {
			const mapped = items.map(item => ({
				id: item.id,
				filename: item.filename.split("/").pop() || "Unbenannt",
				url: item.url,
				state: item.state,
				bytesReceived: item.bytesReceived,
				totalBytes: item.totalBytes
			}))
			setDownloads(mapped)
		})
	}

	useEffect(() => {
		fetchDownloads()
	}, [])

	const handleDelete = (id: number) => {
		chrome.downloads.erase({ id }, () => {
			setDownloads(prev => prev.filter(d => d.id !== id))
		})
	}

	const handleShowInFolder = (id: number) => {
		chrome.downloads.show(id)
	}

	return (
		<div className="max-w-[680px] mx-auto p-1 bg-white/30 rounded">
			{downloads.length === 0 ? (
				<p className="text-gray-500 text-sm">Keine Downloads gefunden.</p>
			) : (
				<ul className="space-y-2">
					{downloads.map(d => (
						<li key={d.id} className="p-3 border rounded flex flex-col gap-2 bg-white md:flex-row md:items-center md:justify-between">
							<div className="flex flex-col md:max-w-[75%] overflow-hidden">
								<button className="font-medium text-sm text-left text-mantis-primary hover:cursor-pointer hover:underline truncate" onClick={() => handleShowInFolder(d.id)}>
									{d.filename}
								</button>
								<p className="text-xs text-gray-500 truncate">{d.url}</p>
							</div>

							<div className="flex items-center justify-between md:gap-4 md:justify-end w-full md:w-auto">
								<p className="text-xs text-gray-600 whitespace-nowrap">
									{d.state === "in_progress" ? `${Math.round((d.bytesReceived / d.totalBytes) * 100)}%` : d.state === "complete" ? "✅ Abgeschlossen" : "❌ Fehler"}
								</p>

								<Button variant="delete" size="icon" className="text-red-500 hover:text-red-700" onClick={() => handleDelete(d.id)}>
									<Trash2 className="w-4 h-4" />
								</Button>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default UserDownloads
