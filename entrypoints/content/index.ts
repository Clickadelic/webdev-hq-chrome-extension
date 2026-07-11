export default defineContentScript({
	registration: "runtime",
	matches: [],
	cssInjectionMode: "ui",

	async main(ctx) {
		chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
			if (request.command === "toggleStylesheet") {
				const existingLink = document.getElementById("webdev-hq-debug-stylesheet");

				if (existingLink) {
					// Falls es schon da ist: Entfernen (Deaktivieren)
					existingLink.remove();
					console.log("Debug CSS deactivated.");
				} else {
					// Falls es nicht da ist: Hinzufügen (Aktivieren)
					const link = document.createElement("link");
					link.id = "webdev-hq-debug-stylesheet";
					link.rel = "stylesheet";
					link.href = chrome.runtime.getURL(request.stylesheet);
					document.head.appendChild(link);
					console.log("Debug CSS activated.");
				}
			}
		});
	}
});
