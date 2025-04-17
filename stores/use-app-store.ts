import { create } from "zustand"
import { persist } from "zustand/middleware"

export type AppType = {
	id: string
	title: string
	url: string
	icon: string
}

type AppStore = {
	apps: AppType[]
	addApp: (app: AppType) => void
	removeApp: (id: string) => void
}

export const useAppStore = create<AppStore>()(
	persist(
		set => ({
			apps: [],
			addApp: app =>
				set(state => ({
					apps: [...state.apps, app]
				})),
			removeApp: id =>
				set(state => ({
					apps: state.apps.filter(app => app.id !== id)
				}))
		}),
		{
			name: "app-storage"
		}
	)
)
