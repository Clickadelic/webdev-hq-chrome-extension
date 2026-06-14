import { Button } from "@/components/ui/button"
import { AiOutlineBug } from "react-icons/ai"
import Logo from "@/components/global/Logo"
import LoginForm from "@/components/global/forms/login-form"
import { ThemeProvider } from "@/components/global/ThemeProvider"
const App = () => {
	// const injectCSS = () => {
	// 	if (!chrome?.tabs) {
	// 		console.error("chrome.tabs is not available.")
	// 		return
	// 	}

	// 	chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
	// 		const activeTab = tabs[0]
	// 		if (activeTab?.id) {
	// 			chrome.tabs.sendMessage(activeTab.id, {
	// 				command: "injectStylesheet",
	// 				stylesheet: "assets/pesticide.css"
	// 			})
	// 		}
	// 	})
	// }

	return (
		<ThemeProvider>
			<div className="p-4 w-64 bg-white dark:bg-slate-800">
				{/* <Button variant="primary" size="sm" onClick={injectCSS}>
				<AiOutlineBug />
			</Button> */}
				<div className="flex flex-col items-center gap-4">
					<Logo url={import.meta.env.WXT_HOMEPAGE_URL} />
					<span className="sr-only">{chrome.i18n.getMessage("login")}</span>
					<div className="space-y-2 text-center">
						<h1 className="text-xl font-medium">{chrome.i18n.getMessage("login")}</h1>
						<p className="text-center text-sm text-muted-foreground">Welcome back</p>
					</div>
				</div>
				<LoginForm className="flex" />
			</div>
		</ThemeProvider>
	)
}

export default App
