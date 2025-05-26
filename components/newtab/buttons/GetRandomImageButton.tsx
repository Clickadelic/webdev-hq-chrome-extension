import { Button } from "@/components/ui/button"
import { useImageStore } from "@/stores/use-image-store"
import { toast } from "sonner"
import { RefreshCcw } from "lucide-react"

export const GetRandomImageButton = () => {
	const { setImage } = useImageStore()

	const handleClick = () => {
		chrome.runtime.sendMessage({ action: "getRandomImage" }, response => {
			console.log("Image response:", response)

			if (!response || response.error) {
				console.error("Error loading image:", response?.error)
				toast.error(chrome.i18n.getMessage("error_loading_background_image", "An error occurred while loading the background image."))
				return
			}

			setImage(response.url, {
				author: response.author,
				authorUrl: response.authorUrl,
				unsplashUrl: response.link
			})

			toast.success(chrome.i18n.getMessage("background_image_updated", "Background image updated."))
		})
	}

	return (
		<Button onClick={handleClick} variant="secondary" className="flex gap-2 items-center shadow-md hover:scale-105 transition-transform duration-200">
			<RefreshCcw className="size-4" />
		</Button>
	)
}
