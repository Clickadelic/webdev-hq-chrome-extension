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
		host_permissions: ["<all_urls>"],
		permissions: [
			"activeTab",
			"tabs",
			"management",
			"cookies",
			"identity",
			"identity.email",
			"storage",
			"contextMenus",
			"history",
			"downloads",
			"scripting",
			"system.cpu",
			"system.memory",
			"system.storage"
		]
	}
})
