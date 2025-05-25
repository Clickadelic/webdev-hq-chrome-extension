import { create } from "zustand"
import { persist } from "zustand/middleware"

export type ProjectType = {
	id: string
	title: string
	description?: string
	projectUrl?: string
	gitUrl?: string
	done?: boolean
	expiryDate?: Date
}

type ProjectStore = {
	projects: ProjectType[]
	addProject: (app: ProjectType) => void
	getProject: (id: string) => ProjectType
	editProject: (app: ProjectType) => void
	removeProject: (id: string) => void
	resetProjects: () => void
}

export const useProjectStore = create<ProjectStore>()(
	persist(
		(set, get) => ({
			projects: [],
			addProject: project =>
				set(state => ({
					projects: [...state.projects, project]
				})),
			getProject: id => get().projects.find(project => project.id === id)!,
			editProject: project =>
				set(state => ({
					projects: state.projects.map(a => (a.id === project.id ? project : a))
				})),
			removeProject: id =>
				set(state => ({
					projects: state.projects.filter(project => project.id !== id)
				})),
			resetProjects: () =>
				set(() => ({
					projects: []
				}))
		}),
		{
			name: "projects-storage"
		}
	)
)
