import { defineConfig } from "wxt"
import tailwindcss from "@tailwindcss/vite"

// See https://wxt.dev/api/config.html
export default defineConfig({
	extensionApi: "chrome",
	modules: ["@wxt-dev/module-react", "@wxt-dev/i18n/module"],
	vite: () => ({
		plugins: [tailwindcss()]
	}),
	manifest: {
		default_locale: "en",
		permissions: [
			"activeTab",
			"bookmarks",
			"contextMenus",
			"cookies",
			"downloads",
			"history",
			"identity",
			"identity.email",
			"management",
			"tabs",
			"tabGroups",
			"storage",
			"scripting",
			"system.cpu",
			"system.memory",
			"system.storage"
		],
		content_scripts: [
			{
				css: ["content-scripts/content.css"],
				js: ["content-scripts/content.js"],
				matches: ["*://*/*"]
			}
		],
		host_permissions: ["<all_urls>"],
		background: {
			service_worker: "background.js"
		},
		web_accessible_resources: [
			{
				resources: ["assets/pesticide.css"],
				matches: ["<all_urls>"]
			}
		]
	}
})
