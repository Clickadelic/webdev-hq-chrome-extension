import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FaCircleUser } from "react-icons/fa6"
export const AccountDropdown = () => {
	return (
		<DropdownMenu modal={false}>
			<DropdownMenuTrigger className="flex justify-between p-2 hover:bg-slate-100 rounded-xs">
				{/* <Avatar className="size-8">
					<AvatarImage src={user?.profileImage || ""} alt={`${user?.name} Profilbild`} />
					<AvatarFallback>
						<FaUser className="text-neutral-400" />
					</AvatarFallback>
				</Avatar> */}
				<FaCircleUser className="text-slate-800 size-5" />
				<span className="ml-2 text-slate-900 hover:text-slate-900">Username</span>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="mr-3">
				<DropdownMenuLabel>Mein Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<a href="/mein-profil" title="Zum Profil">
						Mein Profil
					</a>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<a href="/organisationen" title="Zum Profil">
						Organisationen
					</a>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<a href="/">Logout</a>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
