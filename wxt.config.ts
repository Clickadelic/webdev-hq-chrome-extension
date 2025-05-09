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
		key: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEABwIAAACkAABSU0EyAAgAAAEAAQBpmdrJKHLsyBjZiGQuPwawClrbwotOmNLWa+aJ7IL/J32Uw2ic2+F3p/q+Wp7i218utDy6nAsQV77rz135+6AFkSM+CLABpD7F1RQXHfd7FBLFiy/WHpkuQhUlvNtbWdID896K065vFSD9EIQVzm/dzPTy+/jyDR+UoSeDkCoTB4H4Q1W+x5FfN1ISPVq8Fj2J4dj75CLK8qj911u1duEIUCfMOi+5WPI1sKl4J5R9VnievR+IkVJ01vvChsIHMQ3bGuLObZwDyHzRI4SHWzdQI3liuW4cXslZfrUg+WGUGp5Ij7BZhPTJ1XuVjMkdrJkVNLDT6c51BEbdS9QDSMfc58oCJltNq1GEtZGkHdqW4fwCVLPXddRFMmacg+itqdHK1TdzCAn02E0VCpFe9LFJUSO17FVpOJkfYZExLYQohrDBTVCq0DNWqRgzUTT8Y5d31s7U8MEZQUMbpavhQSziaUynNG8mJVo3iuwAupFg/UWiMCNxaQpFFwHZek8aAOMvv8P0lN44gRNKGIf08fVXafsDM6Pdk5JyKnfiSK7ltriWUZshKG+uCLubRkhBdpAgmuVRPLDb2RkgMu/u52ZHrM32AkCdeO6p1suPai9bevvTbrq5G337TUs/beItU6DHAapr9IJayopzpCRBxiXeBI/qQuWOHJ0OOfiLibH7+CVmgRJPeBWCzbe294o1mg/odHMazmy3A3oUFOOB9E6KCmi3Rb6TKRPNMgVTEwbjvg6hUEi23O6gPisrWUGw/0AI5wIaHG+HvjIwtQgq74w4JR464LJos+abHP5hdmSqUTJ1UgbRsRu33jtGIJy5/I2fT8VZeONgc5Ke9glOdoVDO0uE6Sm1BpKJ8bApmsKYkIUCqfemdo/MoO2kMlcUc6C0TXBBI7OIWHcGUL0YJqY1HtS7Hsks4jxJKghuPkc/vWPuCdVRBivnX8F1IODXY6FqhpdbZjZkFsMT71PP2UcpZRWgZMiT5feW6adf5bumjZFb2IKuP5Bei+ISaaS1G4da1A/KM67G28rCjdEaCxr/9wGwB700A6PGSdfUMzBKzvvakXwr47+rYqlCTXLxkum1onMAVtMSDxXavEsMvMMbbyDCTK8FlV18Y+pej7zO45VPfJfp4Kl03LBt3cFDpP6P/V+r/gbiKLPYnzusg2uwTmO/i6d1xOuoH3Fz77iI3xW8oA/Oxig5DoeJ7+ezu4Z+IF7OoA68fNTrxvmI3OxBk3QDWj9Ufss9fJjYDfAIDJesvCqDx+a3FhXHdxgm7S59n01L8Nii+QHm5OmlhhO0OgjWImhf/jFKxV9RUy14nh/M4EnvqzdSmQ5pp1HfE4rJT6q1/qvP2/MOL6f5EZkG3QRWMKAwNr8lX4fBiS0tX6ZThZVX7N6VfA0LiwsgSi3oE53GtX6uGZJnnhkh0+N6H4skIH5lg88dOLsSXc5H8JxW9tuEHhD2tgQfA+YzVAVNw9s6ZvUhtz6Al0+snpngvnWqS3t+0MTAPgJtsJtSWBFa/l7yzxZGRI1c1YbqIqs=",
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
				css: ["content/style.css"],
				js: ["content/index.ts"],
				matches: ["*://*/*"]
			}
		],
		host_permissions: ["<all_urls>"],
		background: {
			service_worker: "background.js"
		}
	}
})
