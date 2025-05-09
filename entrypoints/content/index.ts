import "./style.css"

export default defineContentScript({
	// Set "registration" to runtime so this file isn't listed in manifest
	registration: "runtime",
	// Use an empty array for matches to prevent any host_permissions be added
	//  when using `registration: "runtime"`.
	matches: [],
	// Put the CSS in the shadow root
	cssInjectionMode: "ui",

	async main(ctx) {
		console.log(ctx)
	}
})
