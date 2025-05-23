import { HiOutlineCog8Tooth } from "react-icons/hi2"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const NewTabSettings = () => {
	const testClick = () => {
		console.log("test")
	}
	return (
		<Dialog>
			<DialogTrigger className="p-2 hover:cursor-pointer">
				<HiOutlineCog8Tooth className="size-5" />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{chrome.i18n.getMessage("settings")}</DialogTitle>
					<DialogDescription>Adjust your settings here</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default NewTabSettings
