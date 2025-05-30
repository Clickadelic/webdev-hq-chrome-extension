import { useEffect } from "react"
import { useImageStore } from "@/stores/use-image-store"
import { toast } from "sonner"

interface BackgroundImageProps {
	children: React.ReactNode
	creditsPosition?: "left" | "center" | "right"
}

const BackgroundImage = ({ children, creditsPosition }: BackgroundImageProps) => {
	const { imageUrl, credit, setImage } = useImageStore()

	useEffect(() => {
		chrome.runtime.sendMessage({ action: "getRandomImage" }, response => {
			console.log("Image response:", response)
			if (!response || response.error) {
				console.error("Error loading image:", response?.error)
				return
			}

			// Aus dem kompletten Response-Objekt die wichtigen Felder extrahieren:
			const url = response.response?.urls?.regular || response.urls?.regular
			if (!url) {
				console.error("No valid image URL received.")
				return
			}

			const author = response.response?.user?.name || response.user?.name || "Unbekannt"
			const authorUrl = response.response?.user?.links?.html || response.user?.links?.html || "#"
			const unsplashUrl = response.response?.links?.html || response.links?.html || "#"

			setImage(url, {
				author,
				authorUrl,
				unsplashUrl
			})
		})
	}, [setImage])

	return (
		<div
			className="min-h-screen relative flex flex-col flex-start bg-slate-900 bg-cover transition-opacity duration-1000 ease-in-out"
			style={{
				backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
				backgroundPosition: "center"
			}}
		>
			{children}
			{credit && (
				<div className={creditsPosition === "center" ? "absolute bottom-4 left-1/2 -translate-x-1/2" : "absolute bottom-4 left-4"}>
					<p className="text-xs text-white">
						{chrome.i18n.getMessage("photo_by", "Photo by")}{" "}
						<a href={credit.authorUrl} target="_blank" rel="noreferrer" className="underline hover:text-blue-600">
							{credit.author}
						</a>{" "}
						{chrome.i18n.getMessage("on", "on")}{" "}
						<a href={credit.unsplashUrl} target="_blank" rel="noreferrer" className="underline hover:text-blue-600">
							Unsplash
						</a>
					</p>
				</div>
			)}
		</div>
	)
}

export default BackgroundImage
