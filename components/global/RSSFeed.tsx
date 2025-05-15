import React, { useEffect, useState } from "react"

interface FeedItem {
	title: string
	link: string
	pubDate: string
	description: string
}

const RSSFeed: React.FC = () => {
	const [items, setItems] = useState<FeedItem[]>([])
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchRSS = async () => {
			try {
				const proxyUrl = "https://corsproxy.io/?"

				const feedUrl = encodeURIComponent("https://www.w3.org/news/feed/")
				const response = await fetch(`${proxyUrl}${feedUrl}`)
				const data = await response.json()

				const parser = new DOMParser()
				const xml = parser.parseFromString(data.contents, "text/xml")
				const itemElements = Array.from(xml.querySelectorAll("item"))

				const parsedItems: FeedItem[] = itemElements.map(item => ({
					title: item.querySelector("title")?.textContent || "Kein Titel",
					link: item.querySelector("link")?.textContent || "#",
					pubDate: item.querySelector("pubDate")?.textContent || "",
					description: item.querySelector("description")?.textContent || ""
				}))

				setItems(parsedItems)
			} catch (err) {
				console.error("Fehler beim Laden des Feeds:", err)
				setError("Feed konnte nicht geladen werden.")
			}
		}

		fetchRSS()
	}, [])

	if (error) return <div className="text-red-600">{error}</div>

	return (
		<div className="p-6 max-w-3xl mx-auto">
			<h1 className="text-3xl font-bold mb-6">🌐 W3C News Feed</h1>
			<ul className="space-y-6">
				{items.map((item, index) => (
					<li key={index} className="p-4 rounded-xl shadow-md bg-white border border-gray-200">
						<a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-blue-600 hover:underline">
							{item.title}
						</a>
						<p className="text-sm text-gray-500">{new Date(item.pubDate).toLocaleString()}</p>
						<p className="mt-2 text-gray-700">{item.description}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default RSSFeed
