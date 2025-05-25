import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

import { FormError } from "@/components/global/forms/form-error"
import { FormSuccess } from "@/components/global/forms/form-success"
import { useState } from "react"
import { RxExternalLink } from "react-icons/rx"
import { BsApp, BsHouse } from "react-icons/bs"
import { FaGitAlt } from "react-icons/fa"
import { Plus } from "lucide-react"
import { TbEdit } from "react-icons/tb"
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { AiOutlineEdit } from "react-icons/ai"
import { BsTrash } from "react-icons/bs"
import { HiOutlineDotsVertical } from "react-icons/hi"
import { useProjectStore } from "@/stores/use-project-store"
import { ProjectSchema } from "@/schemas"
import { RxHome } from "react-icons/rx"
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
		setSuccess(chrome.i18n.getMessage("project_added", "Project added successfully.") || "Project added successfully.")
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
							<Popover>
								<PopoverTrigger className="relative flex flex-col flex-start items-start w-full h-24 bg-white rounded p-2 border border-transparent hover:border-mantis-primary hover:cursor-pointer">
									<h3 className="block text-[14px] font-semibold">{project.title}</h3>
									<h4 className="block text-muted-foreground">{project.description}</h4>
								</PopoverTrigger>
								<PopoverContent className="h-56 rounded" side="top" align="center">
									<h3 className="w-full text-[14px] font-semibold">{project.title}</h3>
									<h4 className="w-full text-muted-foreground mb-3">{project.description}</h4>
									<div className="flex flex-start gap-2 truncate">
										<ul className="space-y-2">
											<li>
												<a href={project.projectUrl} className="flex flex-row flex-start gap-2 text-[14px] hover:text-mantis-primary" target="_blank">
													<BsHouse className="mt-[2px] size-4" />
													{chrome.i18n.getMessage("website", "Website")}
													<RxExternalLink className="mt-[2px] size-4 text-slate-400" />
												</a>
											</li>
											<li>
												<a href={project.gitUrl} className="flex flex-row flex-start gap-2 text-[14px] hover:text-mantis-primary" target="_blank">
													<FaGitAlt className="mt-[2px] size-4" />
													{chrome.i18n.getMessage("git_url", "Repository")}
													<RxExternalLink className="mt-[2px] size-4 text-slate-400" />
												</a>
											</li>
										</ul>
									</div>
									<div className="absolute bottom-2 right-2">
										<Button variant="ghost" className="text-slate-400 p-.5" size="sm" onClick={() => onEdit(project.id)} title={chrome.i18n.getMessage("edit", "Edit")}>
											<TbEdit />
										</Button>
										<Button
											onClick={() => {
												onDelete(project.id)
											}}
											variant="ghost"
											size="sm"
											className="text-slate-400 hover:text-rose-400"
										>
											<BsTrash className="size-4" />
										</Button>
									</div>
								</PopoverContent>
							</Popover>
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
									{isEditing ? chrome.i18n.getMessage("edit_project_title", "Edit project") : chrome.i18n.getMessage("add_project_title", "Add project")}
								</DialogTitle>
								<DialogDescription>
									{isEditing ? chrome.i18n.getMessage("edit_project_description", "Edit project") : chrome.i18n.getMessage("add_project_description", "Add project")}
								</DialogDescription>
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
														<FormLabel>{chrome.i18n.getMessage("project_title_label", "Title")}:</FormLabel>
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
														<FormLabel>{chrome.i18n.getMessage("project_description_label", "Description")}:</FormLabel>
														<FormControl>
															<Input type="text" {...field} placeholder={chrome.i18n.getMessage("project_description_input_placeholder", "Description")} />
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
														<FormLabel>{chrome.i18n.getMessage("project_giturl_label", "Git-url")}:</FormLabel>
														<FormControl>
															<Input type="url" {...field} placeholder={chrome.i18n.getMessage("project_giturl_input_placeholder", "https://...")} />
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
											{isEditing ? chrome.i18n.getMessage("edit_project", "Edit project") : chrome.i18n.getMessage("add_project", "Add project")}
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
