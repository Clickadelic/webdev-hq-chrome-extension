import { defineConfig } from "wxt"
import tailwindcss from "@tailwindcss/vite"

// See https://wxt.dev/api/config.html
export default defineConfig({
<<<<<<< HEAD
  extensionApi: "chrome",
  modules: ["@wxt-dev/module-react", "@wxt-dev/auto-icons"],
  vite: () => ({
    plugins: [tailwindcss()],
  }),
});
=======
	extensionApi: "chrome",
	modules: ["@wxt-dev/module-react", "@wxt-dev/i18n/module"],
	vite: () => ({
		plugins: [tailwindcss()]
	}),
	manifest: {
		default_locale: "en",
		host_permissions: ["<all_urls>"],
		permissions: ["identity", "identity.email", "tabs", "storage", "contextMenus", "history", "downloads", "scripting"]
	}
})
>>>>>>> 30780a54112071245a1ea0008a78d32bfcf7d2cd
