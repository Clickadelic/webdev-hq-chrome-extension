import { useEffect, useState } from "react"

import { Plus } from "lucide-react"
import { BsApp } from "react-icons/bs"

import { apps } from "@/fake-data/apps"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

const UserApps = () => {
	const addAppLabel = chrome.i18n.getMessage("add_app")
	const addAppDescription = chrome.i18n.getMessage("add_app_description")

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const appName = formData.get("appName") as string
		const appUrl = formData.get("appUrl") as string
		const appIcon = formData.get("appIcon") as string
		const newApp = { id: crypto.randomUUID(), name: appName, url: appUrl, icon: appIcon }
		apps.push(newApp)
		e.currentTarget.reset()
	}

	return (
		<ul className="w-full grid grid-cols-1 md:grid-cols-9 gap-2">
			{apps.map(app => (
				<li key={app.id} className="bg-white p-2 w-[64px] rounded hover:bg-white/70 hover:cursor-pointer">
					<a href={app.url} target="_blank" className="flex flex-col gap-1 items-center place-content-center" rel="noopener noreferrer">
						<img src={app.icon} alt={app.name} className="size-6" />
						<span className="text-slate-800">{app.name}</span>
					</a>
				</li>
			))}
			<li>
				<Dialog>
					<DialogTrigger className="flex flex-col gap-1 items-center place-content-center bg-white p-2 size-[64px] rounded hover:bg-white/70 hover:cursor-pointer">
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
							<form
								onSubmit={() => {
									handleSubmit(e)
								}}
								className="w-full flex flex-col gap-2"
							>
								<Input name="name" placeholder="AppName" />
								<Input name="url" placeholder="https://" />
								<Button type="submit">{addAppLabel}</Button>
							</form>
						</div>
					</DialogContent>
				</Dialog>
			</li>
		</ul>
	)
}

export default UserApps
