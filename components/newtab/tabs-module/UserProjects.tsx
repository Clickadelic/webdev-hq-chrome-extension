import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

import { FormError } from "@/components/global/forms/form-error"
import { FormSuccess } from "@/components/global/forms/form-success"

import { AiOutlineEdit } from "react-icons/ai"
import { BsTrash } from "react-icons/bs"
import { Plus } from "lucide-react"
import { BsApp } from "react-icons/bs"
import { HiOutlineDotsVertical } from "react-icons/hi"
import { TbEdit } from "react-icons/tb"

import { useProjectStore, ProjectType } from "@/stores/use-project-store"
import { ProjectSchema } from "@/schemas"

const UserProjects = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isEditing, setIsEditing] = useState(false)
	const [editingAppId, setEditingAppId] = useState<string | null>(null)
	const [success, setSuccess] = useState("")
	const [error, setError] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	let form = useForm<z.infer<typeof ProjectSchema>>({
		resolver: zodResolver(ProjectSchema),
		defaultValues: {
			title: "",
			description: "",
			projectUrl: "",
			gitUrl: ""
		}
	})

	const { projects, addProject, getProject, editProject, removeProject } = useProjectStore()
	const project = getProject("1")

	const onEdit = (id: string) => {
		//
	}

	const onAddSubmit = (values: z.infer<typeof ProjectSchema>) => {
		//
	}

	const onEditSubmit = (values: z.infer<typeof ProjectSchema>) => {
		//
	}

	const onDelete = (id: string) => {
		//
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
								setEditingAppId(null)
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
									<BsApp />
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
