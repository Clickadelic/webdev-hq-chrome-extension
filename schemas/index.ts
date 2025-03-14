import * as z from "zod";

export const SearchInputSchema = z.object({
  query: z.string().min(1, "Minimum 1 character"),
});
