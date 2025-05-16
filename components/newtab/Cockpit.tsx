import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Button } from "../ui/button"
import { MdMenu } from "react-icons/md"
const Cockpit = () => {
	return (
		<div className="absolute bottom-4 left-0 right-0 flex items-center justify-center">
			<Drawer>
				<DrawerTrigger className=" bg-white/30 rounded p-1 font-semibold text-sm text-white backdrop-blur hover:cursor-pointer hover:text-mantis-primary">
					<MdMenu className="size-5" />
				</DrawerTrigger>
				<DrawerContent>
					<div className="placeholder h-48">
						Placeholder
					</div>
				</DrawerContent>
			</Drawer>
		</div>
	)
}

export default Cockpit
