import "./style.css"

export default defineContentScript({
	registration: "runtime",
	matches: [],
	cssInjectionMode: "ui",

	async main(ctx) {
		chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
			if (message.command === "injectStylesheet") {
				const url = browser.runtime.getURL(message.stylesheet)
				// console.log("Stylesheet URL:", url) // Add this line to check URL
				const style = document.createElement("link")
				style.rel = "stylesheet"
				style.href = url
				document.head.appendChild(style)
			}
		})
	}
})
