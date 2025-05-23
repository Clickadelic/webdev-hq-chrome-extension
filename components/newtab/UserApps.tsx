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

import { FormError } from "@/components/global/forms/form-error"
import { FormSuccess } from "@/components/global/forms/form-success"

import { getFaviconUrl } from "@/lib/utils"

const UserApps = () => {
	const { apps, addApp, editApp, removeApp } = useAppStore()
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const [loading, setLoading] = useState<boolean>(false)
	const [isEditing, setIsEditing] = useState<boolean>(false)
	const [error, setError] = useState<string | undefined>("")
	const [success, setSuccess] = useState<string | undefined>("")

	let form = useForm<z.infer<typeof AppSchema>>({
		resolver: zodResolver(AppSchema),
		defaultValues: { title: "", url: "" }
	})
	const onSubmit = (values: z.infer<typeof AppSchema>) => {
		setError("")
		setSuccess("")
		setLoading(true)
		const newApp = { id: crypto.randomUUID(), ...values, icon: getFaviconUrl(values.url) }
		addApp(newApp)
		setIsModalOpen(false)
		form.reset()
	}

	const onDelete = (id: string) => {
		useAppStore.getState().removeApp(id)
	}

	const onEdit = (id: string) => {
		setIsModalOpen(true)
		const currentApp = apps.find(app => app.id === id)
		if (currentApp) {
			const { title, url, icon } = currentApp
			console.log("Editing app", title, url, icon)
		}
	}

	return (
		<ul className="w-full grid grid-cols-9 gap-1 p-1 bg-white/30 rounded">
			{apps.map(app => (
				<li
					key={app.id}
					className="relative bg-white pt-1 rounded border-1 transition-colors duration-150 ease-in-out border-transparent hover:border-mantis-primary hover:text-mantis-primary hover:cursor-pointer"
				>
					<a href={app.url} target="_self" className="flex flex-col justify-between items-center p-2 gap-2" rel="noopener noreferrer">
						<img src={app.icon} alt={app.title} className="size-6 rounded-xs" />
						<span className="text-slate-800 text-xs inline-block truncate max-w-[56px]">{app.title}</span>
					</a>
					<DropdownMenu modal={false}>
						<DropdownMenuTrigger asChild>
							<button className="absolute top-1 right-[1px] text-slate-500 rounded-xs hover:text-slate-900 hover:bg-slate-200 hover:cursor-pointer">
								<HiOutlineDotsVertical className="size-4" />
							</button>
						</DropdownMenuTrigger>
						<DropdownMenuContent side="right" align="start" className="rounded">
							<DropdownMenuItem>
								<button onClick={() => onEdit(app.id)} className="flex justify-between">
									<AiOutlineEdit className="mt-1 mr-2" />
									{chrome.i18n.getMessage("edit")}
								</button>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<button onClick={() => onDelete(app.id)} className="flex justify-between text-red-500 hover:text-red-700">
									<BsTrash className="text-red-500 hover:text-red-700 size-3 mt-1 mr-2" /> {chrome.i18n.getMessage("delete")}
								</button>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</li>
			))}
			<li>
				<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
					<DialogTrigger
						onClick={() => setIsModalOpen(true)}
						className="flex flex-col gap-1 items-center place-content-center text-slate-400 bg-white p-2 size-[70px] rounded border-1 transition-colors duration-150 ease-in-out border-transparent hover:border-mantis-primary hover:text-mantis-primary hover:cursor-pointer"
					>
						<Plus />
					</DialogTrigger>
					<DialogContent className="rounded">
						<DialogHeader>
							<DialogTitle className="flex items-start gap-2">
								<BsApp />
								{chrome.i18n.getMessage("add_app")}
							</DialogTitle>
							<DialogDescription>{chrome.i18n.getMessage("add_app_description")}</DialogDescription>
						</DialogHeader>
						<div className="flex">
							<Form {...form}>
								<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
									<div className="space-y-4">
										<FormField
											control={form.control}
											name="title"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Title:</FormLabel>
													<FormControl>
														<Input type="text" {...field} placeholder="My App" />
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
													<FormLabel>Url:</FormLabel>
													<FormControl>
														<Input type="url" {...field} placeholder="My App" />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
									<FormError message={error} />
									<FormSuccess message={success} />
									<Button variant="primary" type="submit" className="w-full rounded">
										{chrome.i18n.getMessage("add_app")}
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
