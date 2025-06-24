import { create } from "zustand"
import { persist } from "zustand/middleware"
import defaultApps from "@/lib/default-apps"

export type AppType = {
	id: string
	title: string
	url: string
	icon: string
}

type AppStore = {
	apps: AppType[]
	addApp: (app: AppType) => void
	getApp: (id: string) => AppType
	editApp: (app: AppType) => void
	removeApp: (id: string) => void
	resetApps: () => void
	reorderApps: (apps: AppType[]) => void
}

export const useAppStore = create<AppStore>()(
	persist(
		(set, get) => ({
			apps: [],
			addApp: app =>
				set(state => ({
					apps: [...state.apps, app]
				})),
			getApp: id => get().apps.find(app => app.id === id)!,
			editApp: app =>
				set(state => ({
					apps: state.apps.map(a => (a.id === app.id ? app : a))
				})),
			removeApp: id =>
				set(state => ({
					apps: state.apps.filter(app => app.id !== id)
				})),
			resetApps: () =>
				set(() => ({
					apps: [...defaultApps]
				})),
			reorderApps: newOrder => set({ apps: newOrder })
		}),
		{
			name: "wdhq-app-store"
		}
	)
)
