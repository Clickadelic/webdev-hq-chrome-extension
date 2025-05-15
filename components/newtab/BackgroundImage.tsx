import { useEffect, useState } from "react"

interface RandomBackgroundImageProps {
	children: React.ReactNode
}

interface CreditsProps {
	author: string
	authorUrl: string
	unsplashUrl: string
}

const RandomBackgroundImage = ({ children }: RandomBackgroundImageProps) => {
	const [imageUrl, setImageUrl] = useState<string | null>(null)
	const [credit, setCredit] = useState<CreditsProps | null>(null)

	useEffect(() => {
		chrome.runtime.sendMessage({ action: "getRandomImage" }, response => {
			if (!response || response.error) {
				console.error("Fehler beim Laden des Bildes:", response?.error)
				return
			}
			console.log("Bild geladen:", response)

			setImageUrl(response.url)

			setCredit({
				author: response.author,
				authorUrl: response.authorUrl,
				unsplashUrl: response.link
			})
		})
	}, [])

	return (
		<div
			className="min-h-screen relative flex flex-col flex-start bg-slate-900 bg-cover"
			style={{
				backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
				backgroundSize: "cover",
				backgroundPosition: "center"
			}}
		>
			{children}
			{credit && (
				<div className="absolute bottom-4 left-4 text-white text-sm">
					<p className="text-xs mt-4">
						{chrome.i18n.getMessage("photo_by")}{" "}
						<a href={credit.authorUrl} target="_blank" rel="noreferrer" className="underline hover:text-blue-600">
							{credit.author}
						</a>{" "}
						{chrome.i18n.getMessage("on")}{" "}
						<a href={credit.unsplashUrl} target="_blank" rel="noreferrer" className="underline hover:text-blue-600">
							Unsplash
						</a>
					</p>
				</div>
			)}
		</div>
	)
}

export default RandomBackgroundImage
