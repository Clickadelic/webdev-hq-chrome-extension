import "./style.css"
import { isDOM } from "@/lib/utils"

export default defineContentScript({
	registration: "runtime",
	matches: [],
	cssInjectionMode: "ui",

	async main(ctx) {
		chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
			console.log(sender)

			if (message.command === "injectStylesheet") {
				if (!isDOM(document.getElementById("webdev-hq-debug-stylesheet"))) {
					const url = browser.runtime.getURL(message.stylesheet)
					// console.log("Stylesheet URL:", url) // Add this line to check URL
					const style = document.createElement("link")
					style.rel = "stylesheet"
					style.href = url
					style.id = "webdev-hq-debug-stylesheet"
					document.head.appendChild(style)
				}
			}
		})
	}
})
