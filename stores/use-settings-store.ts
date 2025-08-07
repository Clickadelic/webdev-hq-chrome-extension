import { create } from "zustand"
import { persist } from "zustand/middleware"

interface SettingsStore {
	searchQuery: string
	searchEngine: string
	setSearchQuery: (query: string) => void
	setSearchEngine: (engineUrl: string) => void
	defaultTab: string
	setDefaultTab: (tab: string) => void
}

export const useSettingsStore = create<SettingsStore>()(
	persist(
		set => ({
			// Search Engine Einstellungen
			searchQuery: "",
			searchEngine: "https://www.google.com/search?q=",
			setSearchQuery: query => set({ searchQuery: query }),
			setSearchEngine: engineUrl => set({ searchEngine: engineUrl }),
			// Standard-Tab Einstellungen
			defaultTab: "apps", // Standard-Tab setzen
			setDefaultTab: tab => set({ defaultTab: tab })
		}),
		{
			name: "wdhq-settings-store" // Name im localStorage (oder IndexedDB)
		}
	)
)
