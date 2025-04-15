import { Plus } from "lucide-react"
import { BsApp } from "react-icons/bs"
import { apps } from "@/fake-data/apps"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const UserApps = () => {
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
					<DialogTrigger className="flex flex-col gap-1 items-center place-content-center bg-white p-2 w-[64px] rounded hover:bg-white/70 hover:cursor-pointer">
						<Plus />
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>
								<BsApp />
								New App
							</DialogTitle>
							<DialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</DialogDescription>
						</DialogHeader>
					</DialogContent>
				</Dialog>
			</li>
		</ul>
	)
}

export default UserApps
