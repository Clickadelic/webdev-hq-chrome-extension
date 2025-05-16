import "./style.css"
import { isDOM } from "@/lib/utils"

export default defineContentScript({
	registration: "runtime",
	matches: [],
	cssInjectionMode: "ui",

	async main(ctx) {
		chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
			if (request.command === "injectStylesheet") {
				const link = document.createElement("link")
				link.id = "webdev-hq-debug-stylesheet"
				link.rel = "stylesheet"
				link.href = chrome.runtime.getURL(request.stylesheet)
				document.head.appendChild(link)
			} else if (request.command === "removeStylesheet") {
				document.getElementById("webdev-hq-debug-stylesheet")?.remove()
			}
		})
	}
})
