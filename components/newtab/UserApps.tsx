import { useAppStore, AppType } from "@/stores/use-app-store"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { getFaviconUrl } from "@/lib/utils"
import { AiOutlineEdit } from "react-icons/ai"
import { BsTrash } from "react-icons/bs"
import { Plus } from "lucide-react"
import { BsApp } from "react-icons/bs"
import { HiOutlineDotsVertical } from "react-icons/hi"
import { googleApps } from "@/lib/googleApps"

const UserApps = () => {
	const { apps, addApp, editApp, removeApp } = useAppStore()
	const deleteLabel = chrome.i18n.getMessage("delete")
	const editLabel = chrome.i18n.getMessage("edit")
	const addAppLabel = chrome.i18n.getMessage("add_app")
	const addAppDescription = chrome.i18n.getMessage("add_app_description")
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const name = formData.get("name") as string
		const url = formData.get("url") as string
		if (name === "" || url === "") {
			alert("Please fill all fields")
			return
		}
		const newApp: AppType = {
			id: crypto.randomUUID(),
			title: name,
			url: url,
			icon: getFaviconUrl(url) || ""
		}
		addApp(newApp)
		e.currentTarget.reset()
		setIsModalOpen(false)
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
			{googleApps.map(app => (
				<li
					key={app.id}
					className="relative bg-white rounded pt-1 rounded border-1 transition-colors delay-150 duration-300 ease-in-out border-transparent hover:border-mantis-primary hover:text-mantis-primary hover:cursor-pointer"
				>
					<a href={app.url} target="_blank" className="flex flex-col justify-between items-center p-2 gap-2" rel="noopener noreferrer">
						<img src={app.icon} alt={app.title} className="size-6 rounded-xs" />
						<span className="text-slate-800 text-xs inline-block truncate max-w-[56px]">{app.title}</span>
					</a>
				</li>
			))}
			{apps.map(app => (
				<li
					key={app.id}
					className="relative bg-white rounded pt-1 rounded border-1 transition-colors delay-150 duration-300 ease-in-out border-transparent hover:border-mantis-primary hover:text-mantis-primary hover:cursor-pointer"
				>
					<a href={app.url} target="_blank" className="flex flex-col justify-between items-center p-2 gap-2" rel="noopener noreferrer">
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
									{editLabel}
								</button>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<button onClick={() => onDelete(app.id)} className="flex justify-between text-red-500 hover:text-red-700">
									<BsTrash className="text-red-500 hover:text-red-700 size-3 mt-1 mr-2" /> {deleteLabel}
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
						className="flex flex-col gap-1 items-center place-content-center text-slate-400 bg-white p-2 size-[70px] rounded border-1 transition-colors delay-150 duration-300 ease-in-out border-transparent hover:border-mantis-primary hover:text-mantis-primary hover:cursor-pointer"
					>
						<Plus />
					</DialogTrigger>
					<DialogContent className="rounded">
						<DialogHeader>
							<DialogTitle className="flex items-start gap-2">
								<BsApp />
								{addAppLabel}
							</DialogTitle>
							<DialogDescription>{addAppDescription}</DialogDescription>
						</DialogHeader>
						<div className="flex">
							<form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
								<Input name="name" className="rounded" placeholder="Name" />
								<Input name="url" className="rounded" placeholder="Url" />
								<Button type="submit" variant="primary">
									{addAppLabel}
								</Button>
							</form>
						</div>
					</DialogContent>
				</Dialog>
			</li>
		</ul>
	)
}

export default UserApps
