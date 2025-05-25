import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

import { FormError } from "@/components/global/forms/form-error"
import { FormSuccess } from "@/components/global/forms/form-success"
import { useState } from "react"

import { Plus } from "lucide-react"
import { TbEdit } from "react-icons/tb"
import { AiOutlineFundProjectionScreen } from "react-icons/ai"

import { useProjectStore } from "@/stores/use-project-store"
import { ProjectSchema } from "@/schemas"

const UserProjects = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isEditing, setIsEditing] = useState(false)

	const [success, setSuccess] = useState("")
	const [error, setError] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [editingProjectId, setEditingProjectId] = useState<string | null>(null)

	let form = useForm<z.infer<typeof ProjectSchema>>({
		resolver: zodResolver(ProjectSchema),
		defaultValues: {
			title: "",
			description: "",
			projectUrl: "",
			gitUrl: "",
			done: false
		}
	})

	const { projects, addProject, getProject, editProject, removeProject } = useProjectStore()

	const onAddSubmit = (values: z.infer<typeof ProjectSchema>) => {
		setError("")
		setSuccess("")
		setIsLoading(true)
		const newProject = { id: crypto.randomUUID(), ...values }
		addProject(newProject)
		setSuccess(chrome.i18n.getMessage("project_added") || "Project added successfully.")
		form.reset()
		setTimeout(() => {
			setIsLoading(false)
			setIsModalOpen(false)
			setSuccess("")
		}, 1250)
	}

	const onDelete = (id: string) => {
		useProjectStore.getState().removeProject(id)
	}

	const onEdit = (id: string) => {
		setIsEditing(true)
		setIsModalOpen(true)
		setEditingProjectId(id)

		const currentApp = projects.find(project => project.id === id)
		if (currentApp) {
			form.setValue("title", currentApp.title)
			form.setValue("description", currentApp.description)
			form.setValue("projectUrl", currentApp.projectUrl)
			form.setValue("gitUrl", currentApp.gitUrl)
		}
	}

	const onEditSubmit = (values: z.infer<typeof ProjectSchema>) => {
		if (!editingProjectId) return

		setError("")
		setSuccess("")
		setIsLoading(true)

		const currentProject = projects.find(project => project.id === editingProjectId)
		if (currentProject) {
			const updatedProject = {
				id: currentProject.id,
				title: values.title,
				description: values.description,
				projectUrl: values.projectUrl,
				gitUrl: values.gitUrl,
				done: values.done
			}
			editProject(updatedProject)
		}

		setSuccess(chrome.i18n.getMessage("app_edited"))
		form.reset()
		setEditingProjectId(null)
		setIsEditing(false)
		setTimeout(() => {
			setIsLoading(false)
			setIsModalOpen(false)
			setSuccess("")
		}, 1250)
	}

	return (
		<div className="bg-white/30 p-1 rounded backdrop-blur">
			<ul className="grid grid-cols-3 gap-1">
				{projects &&
					projects.map(project => (
						<li key={project.id}>
							<h3>{project.title}</h3>
							<p>{project.description}</p>
							<p>{project.projectUrl}</p>
							<p>{project.gitUrl}</p>
						</li>
					))}
				<li>
					<Dialog
						open={isModalOpen}
						onOpenChange={open => {
							setIsModalOpen(open)
							if (!open) {
								setIsEditing(false)
								setEditingProjectId(null)
								form.reset()
							}
						}}
					>
						<DialogTrigger
							onClick={() => setIsModalOpen(true)}
							className="flex flex-col gap-1 items-center place-content-center w-full h-24 text-slate-400 bg-white p-2 rounded border-1 transition-colors duration-150 ease-in-out border-transparent hover:border-mantis-primary hover:text-mantis-primary hover:cursor-pointer"
						>
							<Plus />
						</DialogTrigger>
						<DialogContent className="rounded">
							<DialogHeader>
								<DialogTitle className="flex items-start gap-2">
									<AiOutlineFundProjectionScreen />
									{isEditing ? chrome.i18n.getMessage("edit_project_title") : chrome.i18n.getMessage("add_project_title")}
								</DialogTitle>
								<DialogDescription>{isEditing ? chrome.i18n.getMessage("edit_project_description") : chrome.i18n.getMessage("add_project_description")}</DialogDescription>
							</DialogHeader>
							<div className="flex">
								<Form {...form}>
									<form onSubmit={form.handleSubmit(isEditing ? onEditSubmit : onAddSubmit)} className="w-full space-y-6">
										<div className="space-y-4">
											<FormField
												control={form.control}
												name="title"
												render={({ field }) => (
													<FormItem>
														<FormLabel>{chrome.i18n.getMessage("project_title_label")}:</FormLabel>
														<FormControl>
															<Input type="text" {...field} placeholder={chrome.i18n.getMessage("project_title_input_placeholder")} />
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name="description"
												render={({ field }) => (
													<FormItem>
														<FormLabel>{chrome.i18n.getMessage("project_description_label")}:</FormLabel>
														<FormControl>
															<Input type="text" {...field} placeholder={chrome.i18n.getMessage("project_description_input_placeholder")} />
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name="projectUrl"
												render={({ field }) => (
													<FormItem>
														<FormLabel>{chrome.i18n.getMessage("project_url_label")}:</FormLabel>
														<FormControl>
															<Input type="url" {...field} placeholder={chrome.i18n.getMessage("project_url_input_placeholder")} />
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name="gitUrl"
												render={({ field }) => (
													<FormItem>
														<FormLabel>{chrome.i18n.getMessage("project_giturl_label")}:</FormLabel>
														<FormControl>
															<Input type="url" {...field} placeholder={chrome.i18n.getMessage("project_giturl_input_placeholder")} />
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
										</div>
										<FormError message={error} />
										<FormSuccess message={success} />
										<Button variant="primary" type="submit" className="w-full rounded" disabled={isLoading}>
											{isEditing ? <TbEdit /> : <Plus />}
											{isEditing ? chrome.i18n.getMessage("edit_project") : chrome.i18n.getMessage("add_project")}
										</Button>
									</form>
								</Form>
							</div>
						</DialogContent>
					</Dialog>
				</li>
			</ul>
		</div>
	)
}

export default UserProjects
