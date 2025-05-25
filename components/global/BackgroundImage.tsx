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
					<p className="text-xs text-white dark:text-slate-800">
						{chrome.i18n.getMessage("photo_by", "Photo by")}{" "}
						<a href={credit.authorUrl} target="_blank" rel="noreferrer" className="underline hover:text-mantis-primary">
							{credit.author}
						</a>{" "}
						{chrome.i18n.getMessage("on", "on")}{" "}
						<a href={credit.unsplashUrl} target="_blank" rel="noreferrer" className="underline text-white dark:text-slate-800 hover:text-mantis-primary">
							Unsplash
						</a>
					</p>
				</div>
			)}
		</div>
	)
}

export default BackgroundImage
