import * as React from "react"
import { useState } from "react"


import { BsTextIndentRight } from "react-icons/bs"
import { BsTextIndentLeft } from "react-icons/bs"
import { HiMenuAlt3 } from "react-icons/hi"

import { Button } from "@/components/ui/button"
import { AccountDropdown } from "../dashboard/AccountDropdown"
import { SidebarSheet } from "../dashboard/SidebarSheet"
import { MegaMenu } from "../dashboard/MegaMenu"
import { NotificationButton } from "../dashboard/NotificationButton"
import { InboxButton } from "../dashboard/InboxButton"
import { FullscreenButton } from "../dashboard/FullscreenButton"
import { LangSwitch } from "../dashboard/LangSwitch"
import { Grip, Map, PieChart, SquareTerminal } from "lucide-react"

import { NavMain } from "@/components/dashboard/nav-main"
import { NavCommunityItems } from "@/components/dashboard/nav-community-items"
import { NavUser } from "@/components/dashboard/nav-user"

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"

import { SidebarTrigger } from "@/components/ui/sidebar"

import Logo from "../global/Logo"
import { cn } from "@/lib/utils"
import { is } from "date-fns/locale"

const HeaderSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
	const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false)
	const data = {
		user: {
			name: "shadcn",
			email: "shadcn@vercel.com",
			avatar: "/avatars/shadcn.jpg"
		},
		navMain: [
			{
				title: "Dashboard",
				url: "/",
				icon: SquareTerminal,
				isActive: true,
				items: [
					{
						title: "Overview",
						url: "#"
					},
					{
						title: "Apps",
						url: "#apps"
					},
					{
						title: "Todos",
						url: "#todos"
					},
					{
						title: "Projects",
						url: "#projects"
					}
				]
			}
		],
		communityItems: [
			{
				name: "News",
				url: "#",
				icon: Grip
			},

		]
	}
	useEffect(() => {
		const handleResize = () => {
			setSidebarOpen(false)
		}
		window.addEventListener("resize", handleResize)
		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [isSidebarOpen])
	return (
		<>
			<aside className={cn("App-sidebar hidden fixed md:block top-0 left-0 min-h-screen bg-white")}>
				<Sidebar collapsible="icon" {...props}>
					<SidebarHeader className="flex items-center justify-center p-0">
						<Logo isSidebarOpen={isSidebarOpen} />
					</SidebarHeader>
					<SidebarContent className="pt-8">
						<NavMain items={data.navMain} />
						<NavCommunityItems communityItems={data.communityItems} />
					</SidebarContent>
					<SidebarFooter>
						<NavUser user={data.user} />
					</SidebarFooter>
					<SidebarRail />
				</Sidebar>
			</aside>
			<header className={cn("App-header flex fixed top-0 md:ml-64 w-screen h-[60px] p-3 border-b bg-white z-50")}>
				<nav className="header-nav flex justify-between w-max">
					<div className="inline-flex gap-3">
						<SidebarTrigger variant="ghost" size="sm" className="rounded-xs">
							<BsTextIndentRight className="text-2xl" />
						</SidebarTrigger>
						<form>
							<input type="search" placeholder="Search" />
						</form>
					</div>
					<ul className="hidden md:space-x-1 md:fixed md:right-5 md:mt-[-2px] md:inline-flex md:mr-1 mb-1">
						<li>
							<MegaMenu />
						</li>
						<li>
							<LangSwitch />
						</li>
						<li>
							<NotificationButton />
						</li>
						<li>
							<InboxButton />
						</li>
						<li>
							<FullscreenButton />
						</li>
						<li>
							<SidebarSheet />
						</li>
						<li>
							<AccountDropdown />
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
}

export default HeaderSidebar
