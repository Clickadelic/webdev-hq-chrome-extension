import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getFaviconUrl } from "@/lib/utils"
import { BsTrash3 } from "react-icons/bs"

type TopSite = {
	title: string
	url: string
}

const TopSitesList = () => {
	const [topSites, setTopSites] = useState<TopSite[]>([])
	const [filter, setFilter] = useState("")

	useEffect(() => {
		chrome.topSites.get(sites => {
			setTopSites(sites)
		})
	}, [])

	const filteredSites = topSites.filter(site => site.title.toLowerCase().includes(filter.toLowerCase()) || site.url.toLowerCase().includes(filter.toLowerCase()))

	return (
		<div className="flex flex-col bg-white/30 backdrop-blur p-1 space-y-2 rounded shadow-md">
			<div className="bg-white rounded p-1">
				<Input placeholder="Suchen..." value={filter} onChange={e => setFilter(e.target.value)} className="border rounded px-2 py-1 text-sm" />
			</div>

			<ul className="space-y-1 bg-white rounded p-2">
				{filteredSites.length === 0 ? (
					<p className="text-center text-slate-500">Keine häufig besuchten Seiten gefunden.</p>
				) : (
					filteredSites.map((site, idx) => (
						<li key={idx} className="flex flex-row justify-between items-start p-1">
							<a href={site.url} className="flex justify-between gap-2 p-2 rounded text-md w-full truncate hover:text-mantis-primary" target="_blank" rel="noopener noreferrer">
								<div className="flex w-full justify-start gap-2">
									{site.url && (
										<img
											src={getFaviconUrl(site.url)}
											onError={e => {
												e.currentTarget.src = fallbackFavicon
											}}
											alt="Favicon"
											className="size-4 rounded-sm"
											referrerPolicy="no-referrer"
										/>
									)}
									{site.title || site.url}
								</div>
								{site.lastVisitTime && (
									<span className="text-xs text-slate-500">
										{new Intl.DateTimeFormat("de-DE", {
											dateStyle: "medium",
											timeStyle: "short"
										}).format(site.lastVisitTime)}
										&nbsp;{chrome.i18n.getMessage("o_clock", "o' clock")}
									</span>
								)}
							</a>
							<Button
								onClick={() => {
									if (site.url) {
										chrome.history.deleteUrl({ url: site.url }, () => {
											setHistory(prev => prev.filter(item => item.url !== site.url))
										})
									}
								}}
								variant="ghost"
								size="sm"
								className="text-slate-400 hover:text-rose-400"
							>
								<BsTrash3 className="size-4" />
							</Button>
						</li>
					))
				)}
			</ul>
		</div>
	)
}

export default TopSitesList
