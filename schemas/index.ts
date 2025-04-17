import * as z from "zod"

export const SearchInputSchema = z.object({
	query: z.string().min(1, "Minimum 1 character")
})

export const AppSchema = z.object({
	title: z.string().min(1, "Minimum 1 character"),
	url: z.string().min(1, "A valid url is required")
})
