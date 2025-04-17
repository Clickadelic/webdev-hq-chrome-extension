import { useEffect, useState } from "react"

import { Plus } from "lucide-react"
import { BsApp } from "react-icons/bs"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

import { useUserAppsStore, UserAppType } from "@/stores/use-user-apps" // Pfad anpassen!

const UserApps = () => {
	const { userApps, addApp } = useUserAppsStore()

	const addAppLabel = chrome.i18n.getMessage("add_app")
	const addAppDescription = chrome.i18n.getMessage("add_app_description")

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const appName = formData.get("name") as string
		const appUrl = formData.get("url") as string
		const newApp: UserAppType = {
			id: crypto.randomUUID(),
			name: appName,
			url: appUrl,
			icon: "https://www.google.com/s2/favicons?domain=" + appUrl + "&sz=64" // Beispiel für favicon
		}
		addApp(newApp)
		e.currentTarget.reset()
	}

	return (
		<ul className="w-full grid grid-cols-9 gap-2">
			{userApps.map(userApp => (
				<li key={userApp.id} className="bg-white p-0 rounded hover:bg-white/70 hover:cursor-pointer">
					<a href={userApp.url} target="_blank" className="flex flex-col justify-between items-center p-2 size-[70px]" rel="noopener noreferrer">
						<img src={userApp.icon} alt={userApp.name} className="size-6 mt-1" />
						<span className="text-slate-800">{userApp.name}</span>
					</a>
				</li>
			))}
			<li>
				<Dialog>
					<DialogTrigger className="flex flex-col gap-1 items-center place-content-center bg-white p-2 size-[70px] rounded hover:bg-white/70 hover:cursor-pointer">
						<Plus />
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle className="flex items-start gap-2">
								<BsApp />
								{addAppLabel}
							</DialogTitle>
							<DialogDescription>{addAppDescription}</DialogDescription>
						</DialogHeader>
						<div className="flex">
							<form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
								<Input name="name" placeholder="AppName" />
								<Input name="url" placeholder="https://" />
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
