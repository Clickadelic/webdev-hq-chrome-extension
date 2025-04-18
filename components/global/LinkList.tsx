import React, { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface LinkItemProps {
	url?: string
	title?: string
}

const LinkList: React.FC = () => {
	const [links, setLinks] = useState<LinkItemProps[]>([])
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		chrome.runtime.sendMessage({ action: "getLinks" }, (response: LinkItemProps[]) => {
			try {
				setLinks(response)
			} catch (error) {
				if (error instanceof Error) {
					setError(error.message)
				}
			}
		})
		console.log(links)
	}, [links])

	if (error) {
		return <div className="text-red-500 p-4">{error}</div>
	}

	return (
		<div className="w-96 mx-auto p-4 grid grid-cols-3 gap-4">
			{links.length === 0 ? (
				<p className="text-muted-foreground">Keine Links vorhanden.</p>
			) : (
				links.map((link, index) => (
					<Card key={index}>
						<CardHeader>
							<CardTitle className="text-lg font-semibold">
								<a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
									{link.title || link.url}
								</a>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-sm text-muted-foreground">{link.url}</p>
						</CardContent>
					</Card>
				))
			)}
		</div>
	)
}

export default LinkList
