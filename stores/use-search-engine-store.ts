import { create } from "zustand"

// TODO: rework maybe? to type
interface SearchState {
	searchQuery: string
	searchEngine: string
	setSearchQuery: (query: string) => void
	setSearchEngine: (engine: string) => void
}

export const useSearchEngineStore = create<SearchState>(set => ({
	searchQuery: "",
	searchEngine: "https://www.google.com/search?q=",
	setSearchQuery: query => set({ searchQuery: query }),
	setSearchEngine: engine => set({ searchEngine: engine })
}))
