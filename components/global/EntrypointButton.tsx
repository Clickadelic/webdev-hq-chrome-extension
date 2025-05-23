import { Button } from "@/components/ui/button"

interface OpenEntrypointButtonProps {
	path: string // z.B. "dashboard.html"
	translationLabel: string // z.B. "Dashboard"
	params?: Record<string, string> // z.B. { page: "stats" }
}

const OpenEntrypointButton: React.FC<OpenEntrypointButtonProps> = ({ path, translationLabel, params }) => {
	const handleClick = () => {
		const url = new URL(chrome.runtime.getURL(path))

		if (params) {
			Object.entries(params).forEach(([key, value]) => {
				url.searchParams.set(key, value)
			})
		}

		chrome.tabs.create({ url: url.toString() })
	}

	return (
		<Button onClick={handleClick} className="w-36 mt-4 mx-auto px-4 py-2 bg-mantis-primary text-white rounded hover:cursor-pointer hover:border-mantis-primary-hover">
			{chrome.i18n.getMessage(translationLabel)}
		</Button>
	)
}

export default OpenEntrypointButton
