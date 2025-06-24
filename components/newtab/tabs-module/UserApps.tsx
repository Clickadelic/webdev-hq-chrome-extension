import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

import { useAppStore, AppType } from "@/stores/use-app-store"
import { AppSchema } from "@/schemas"

import { AiOutlineEdit } from "react-icons/ai"
import { BsTrash } from "react-icons/bs"
import { Plus } from "lucide-react"
import { BsApp } from "react-icons/bs"
import { HiOutlineDotsVertical } from "react-icons/hi"
import { TbEdit } from "react-icons/tb"

import { FormError } from "@/components/global/forms/form-error"
import { FormSuccess } from "@/components/global/forms/form-success"
import { toast } from "sonner"
import { getFaviconUrl } from "@/lib/utils"

const UserApps = () => {
	const { apps, addApp, editApp, removeApp } = useAppStore()
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isEditing, setIsEditing] = useState<boolean>(false)
	const [editingAppId, setEditingAppId] = useState<string | null>(null)
	const [error, setError] = useState<string | undefined>("")
	const [success, setSuccess] = useState<string | undefined>("")

	let form = useForm<z.infer<typeof AppSchema>>({
		resolver: zodResolver(AppSchema),
		defaultValues: { title: "", url: "" }
	})
	const onAddSubmit = (values: z.infer<typeof AppSchema>) => {
		setError("")
		setSuccess("")
		setIsLoading(true)
		const newApp = { id: crypto.randomUUID(), ...values, icon: getFaviconUrl(values.url) }
		addApp(newApp)
		setSuccess(chrome.i18n.getMessage("app_added", "App added successfully."))
		toast.success(chrome.i18n.getMessage("app_added", "App added successfully."))
		form.reset()
		setTimeout(() => {
			setIsLoading(false)
			setIsModalOpen(false)
			setSuccess("")
		}, 1250)
	}

	const onDelete = (id: string) => {
		removeApp(id)
		toast.success(chrome.i18n.getMessage("app_deleted", "App deleted successfully."))
	}

	const onEdit = (id: string) => {
		setIsEditing(true)
		setIsModalOpen(true)
		setEditingAppId(id)

		const currentApp = apps.find(app => app.id === id)
		if (currentApp) {
			form.setValue("title", currentApp.title)
			form.setValue("url", currentApp.url)
		}
	}

	const onEditSubmit = (values: z.infer<typeof AppSchema>) => {
		if (!editingAppId) return

		setError("")
		setSuccess("")
		setIsLoading(true)

		const currentApp = apps.find(app => app.id === editingAppId)
		if (currentApp) {
			const updatedApp = {
				id: currentApp.id,
				title: values.title,
				url: values.url,
				icon: getFaviconUrl(values.url)
			}
			editApp(updatedApp)
		}

		setSuccess(chrome.i18n.getMessage("app_edited", "App edited successfully."))
		toast.success(chrome.i18n.getMessage("app_edited", "App edited successfully."))
		form.reset()
		setEditingAppId(null)
		setIsEditing(false)
		setTimeout(() => {
			setIsLoading(false)
			setIsModalOpen(false)
			setSuccess("")
		}, 1250)
	}

	return (
		<ul className="w-full grid grid-cols-9 gap-1 p-1 bg-white/30 dark:bg-slate-800/30 rounded backdrop-blur">
			{apps.map(app => (
				<li
					key={app.id}
					className="relative bg-white dark:bg-slate-800 pt-1 rounded border-1 transition-colors duration-150 ease-in-out border-transparent hover:border-mantis-primary hover:text-mantis-primary hover:cursor-pointer"
				>
					<a href={app.url} target="_self" className="flex flex-col justify-between items-center p-2 gap-2" rel="noopener noreferrer">
						<img src={app.icon} alt={app.title} className="size-6 rounded-xs" />
						<span className="text-slate-800 dark:text-slate-300 text-xs inline-block truncate max-w-[56px]">{app.title}</span>
					</a>
					<DropdownMenu modal={false}>
						<DropdownMenuTrigger asChild>
							<button className="absolute top-1 right-[1px] text-slate-600 dark:text-slate-300 rounded-xs hover:text-slate-900 hover:bg-slate-200 hover:cursor-pointer dark:hover:bg-slate-600">
								<HiOutlineDotsVertical className="size-4" />
							</button>
						</DropdownMenuTrigger>
						<DropdownMenuContent side="right" align="start" className="rounded">
							<DropdownMenuItem>
								<button onClick={() => onEdit(app.id)} className="flex justify-between rounded">
									<AiOutlineEdit className="mt-1 mr-2" />
									{chrome.i18n.getMessage("edit", "Edit")}
								</button>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<button onClick={() => onDelete(app.id)} className="flex justify-between text-red-500 hover:text-red-700 rounded">
									<BsTrash className="text-red-500 hover:text-red-700 size-3 mt-1 mr-2" /> {chrome.i18n.getMessage("delete", "Delete")}
								</button>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
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
						className="flex flex-col gap-1 items-center place-content-center text-slate-400 dark:text-slate-300 bg-white dark:bg-slate-800 p-2 size-[70px] rounded border-1 transition-colors duration-150 ease-in-out border-transparent hover:border-mantis-primary hover:text-mantis-primary hover:cursor-pointer"
					>
						<Plus />
					</DialogTrigger>
					<DialogContent className="rounded">
						<DialogHeader>
							<DialogTitle className="flex items-start gap-2">
								<BsApp />
								{isEditing ? chrome.i18n.getMessage("edit_app_title", "Edit App") : chrome.i18n.getMessage("add_app_title", "Add App")}
							</DialogTitle>
							<DialogDescription>
								{isEditing ? chrome.i18n.getMessage("edit_app_description") : chrome.i18n.getMessage("add_app_description", "Add a new app to your list.")}
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
													<FormLabel>{chrome.i18n.getMessage("app_title", "Title")}:</FormLabel>
													<FormControl>
														<Input type="text" {...field} placeholder={chrome.i18n.getMessage("app_title_placeholder", "Title")} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name="url"
											render={({ field }) => (
												<FormItem>
													<FormLabel>{chrome.i18n.getMessage("app_url", "Url")}:</FormLabel>
													<FormControl>
														<Input type="url" {...field} placeholder={chrome.i18n.getMessage("app_url_placeholder", "https://...")} />
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
										{isEditing ? chrome.i18n.getMessage("edit_app", "Edit app") : chrome.i18n.getMessage("add_app", "Add app")}
									</Button>
								</form>
							</Form>
						</div>
					</DialogContent>
				</Dialog>
			</li>
		</ul>
	)
}

export default UserApps
