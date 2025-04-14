export default defineBackground(() => {
	;(browser.action ?? browser.browserAction).onClicked.addListener(async tab => {
		console.log("Hello from the background script.")
	})
})
