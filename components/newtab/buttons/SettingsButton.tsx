import { HiOutlineCog } from "react-icons/hi"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export const SettingsButton: React.FC = () => {
	const handleClick = () => {
		const url = new URL(chrome.runtime.getURL("/dashboard.html"))
		chrome.tabs.create({ url: url.toString() })
	}

	return (
		<Dialog>
			<DialogTrigger className="border border-transparent bg-white text-slate-800 rounded py-2 px-3 hover:border-mantis-primary hover:bg-white hover:cursor-pointer" title="Settings">
				<HiOutlineCog className="size-4" />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{chrome.i18n.getMessage("settings")}</DialogTitle>
					<DialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</DialogDescription>
				</DialogHeader>
				<div>Some Content settings</div>
				<DialogFooter>
					<button className="border border-transparent bg-white text-slate-800 rounded py-2 px-3 hover:border-mantis-primary hover:bg-white hover:cursor-pointer" onClick={handleClick}>
						{chrome.i18n.getMessage("cancel")}
					</button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
