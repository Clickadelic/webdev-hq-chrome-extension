import { create } from "zustand"
import { persist } from "zustand/middleware"

export type UserAppType = {
	id: string
	name: string
	url: string
	icon: string
}

type UserAppsStore = {
	userApps: UserAppType[]
	addApp: (app: UserAppType) => void
	removeApp: (id: string) => void
}

export const useUserAppsStore = create<UserAppsStore>()(
	persist(
		set => ({
			userApps: [],
			addApp: app =>
				set(state => ({
					userApps: [...state.userApps, app]
				})),
			removeApp: id =>
				set(state => ({
					userApps: state.userApps.filter(app => app.id !== id)
				}))
		}),
		{
			name: "user-apps-storage" // LocalStorage key
		}
	)
)
