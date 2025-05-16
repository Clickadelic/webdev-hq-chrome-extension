import { Button } from "@/components/ui/button"
import { AiOutlineBug } from "react-icons/ai"
const App = () => {
	const injectCSS = () => {
		if (!chrome?.tabs) {
			console.error("chrome.tabs is not available.")
			return
		}

		chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
			const activeTab = tabs[0]
			if (activeTab?.id) {
				chrome.tabs.sendMessage(activeTab.id, {
					command: "injectStylesheet",
					stylesheet: "assets/pesticide.css"
				})
			}
		})
	}

	return (
		<div className="p-4">
			<Button variant="primary" size="sm" onClick={injectCSS}>
				<AiOutlineBug />
			</Button>
		</div>
	)
}

export default App
