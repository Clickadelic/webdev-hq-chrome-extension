import * as z from "zod"

export const SearchInputSchema = z.object({
	query: z.string().min(1, chrome.i18n.getMessage("min_1_character"))
})

export const AppSchema = z.object({
	title: z.string().min(1, chrome.i18n.getMessage("min_1_character")),
	url: z.string().min(1, chrome.i18n.getMessage("valid_url_required"))
})
