import { create } from "zustand"
import { persist } from "zustand/middleware"

interface SearchEngineStore {
	searchQuery: string
	searchEngine: string
	setSearchQuery: (query: string) => void
	setSearchEngine: (engineUrl: string) => void
}

export const useSearchEngineStore = create<SearchEngineStore>()(
	persist(
		set => ({
			searchQuery: "",
			searchEngine: "https://www.google.com/search?q=",
			setSearchQuery: query => set({ searchQuery: query }),
			setSearchEngine: engineUrl => set({ searchEngine: engineUrl })
		}),
		{
			name: "search-engine-settings"
		}
	)
)
