import * as z from "zod"

export const LoginSchema = z.object({
	email: z.string().min(1, chrome.i18n.getMessage("min_3_character", "Min 3 character")),
	password: z.string().min(1, chrome.i18n.getMessage("min_6_character", "Min 6 character"))
})

export const SearchInputSchema = z.object({
	query: z.string().min(1, chrome.i18n.getMessage("min_1_character", "Min 1 character"))
})

export const AppSchema = z.object({
	title: z.string().min(1, chrome.i18n.getMessage("min_1_character", "Min 1 character")),
	url: z.string().min(1, chrome.i18n.getMessage("valid_url_required", "Valid URL required"))
})

export const TodoSchema = z.object({
	title: z.string().min(1, chrome.i18n.getMessage("min_1_character", "Min 1 character")),
	description: z.string().optional(),
	done: z.boolean(),
	expiryDate: z.date().optional()
})

export const ProjectSchema = z.object({
	title: z.string().min(1, chrome.i18n.getMessage("min_1_character", "Min 1 character")),
	description: z.string().optional(),
	projectUrl: z.string().optional(),
	gitUrl: z.string().optional(),
	done: z.boolean(),
	expiryDate: z.date().optional()
})
