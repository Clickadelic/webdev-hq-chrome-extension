import { useEffect } from "react"
import { useImageStore } from "@/stores/use-image-store"

interface BackgroundImageProps {
	children: React.ReactNode
}

const BackgroundImage = ({ children }: BackgroundImageProps) => {
	const { imageUrl, credit, setImage } = useImageStore()

	useEffect(() => {
		chrome.runtime.sendMessage({ action: "getRandomImage" }, response => {
			console.log("Image response:", response) // <--- Füge das hinzu
			if (!response || response.error) {
				console.error("Error loading image:", response?.error)
				return
			}

			setImage(response.url, {
				author: response.author,
				authorUrl: response.authorUrl,
				unsplashUrl: response.link
			})
		})
	}, [setImage])
	console.log("Current credits from store:", credit)

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
				<div className="absolute bottom-4 left-4">
					<p className="text-xs text-white">
						Foto von{" "}
						<a href={credit.authorUrl} target="_blank" rel="noreferrer" className="underline hover:text-blue-600">
							{credit.author}
						</a>{" "}
						auf{" "}
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
