import { useUserAppsStore, UserAppType } from "@/stores/use-user-apps" // Pfad anpassen!

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { AiOutlineEdit } from "react-icons/ai"
import { BsTrash } from "react-icons/bs"
import { Plus } from "lucide-react"
import { BsApp } from "react-icons/bs"
import { HiOutlineDotsVertical } from "react-icons/hi"

const UserApps = () => {
	const { userApps, addApp } = useUserAppsStore()

	const addAppLabel = chrome.i18n.getMessage("add_app")
	const addAppDescription = chrome.i18n.getMessage("add_app_description")

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const appName = formData.get("name") as string
		const appUrl = formData.get("url") as string
		if (appName === "" || appUrl === "") {
			alert("Please fill all fields")
			return
		}
		const newApp: UserAppType = {
			id: crypto.randomUUID(),
			name: appName,
			url: appUrl,
			icon: getFaviconUrl(appUrl) || ""
		}
		addApp(newApp)
		e.currentTarget.reset()
	}

	const onDelete = (id: string) => {
		useUserAppsStore.getState().removeApp(id)
	}

	const onEdit = (id: string) => {
		const app = userApps.find(app => app.id === id)
		if (app) {
			setApps(app)
		}
	}

	return (
		<ul className="w-full grid grid-cols-9 gap-2">
			{userApps.map(userApp => (
				<li key={userApp.id} className="relative bg-white p-0 rounded hover:bg-white/70 hover:cursor-pointer">
					<a href={userApp.url} target="_blank" className="flex flex-col justify-between items-center p-2 size-[70px]" rel="noopener noreferrer">
						<img src={userApp.icon} alt={userApp.name} className="size-6 mt-1 rounded-xs" />
						<span className="text-slate-800">{userApp.name}</span>
					</a>
					<DropdownMenu modal={false}>
						<DropdownMenuTrigger asChild>
							<button className="absolute top-1 right-[2px] text-slate-500 rounded-xs hover:text-slate-900 hover:bg-slate-200 hover:cursor-pointer">
								<HiOutlineDotsVertical className="size-5" />
							</button>
						</DropdownMenuTrigger>
						<DropdownMenuContent side="right" align="start">
							<DropdownMenuItem>
								<button onClick={() => onEdit(userApp.id)} className="flex justify-between">
									<AiOutlineEdit className="mt-1 mr-2" />
									bearbeiten
								</button>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<button onClick={() => onDelete(userApp.id)} className="flex justify-between text-red-500 hover:text-red-700">
									<BsTrash className="mt-1 mr-2" /> löschen
								</button>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</li>
			))}
			<li>
				<Dialog>
					<DialogTrigger className="flex flex-col gap-1 items-center place-content-center bg-white p-2 size-[70px] rounded hover:bg-white/70 hover:cursor-pointer">
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
