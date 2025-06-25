import * as React from "react"
import { Frame, Map, PieChart, SquareTerminal } from "lucide-react"

// TODO: rename these
import { NavMain } from "@/components/dashboard/nav-main"
import { NavProjects } from "@/components/dashboard/nav-projects"
import { NavUser } from "@/components/dashboard/nav-user"

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"
import Logo from "../global/Logo"

const data = {
	user: {
		name: "shadcn",
		email: "shadcn@vercel.com",
		avatar: "/avatars/shadcn.jpg"
	},
	navMain: [
		{
			title: "Dashboard",
			url: "#",
			icon: SquareTerminal,
			isActive: true,
			items: [
				{
					title: "Overview",
					url: "/"
				}
			]
		}
	],
	projects: [
		{
			name: "Design Engineering",
			url: "#",
			icon: Frame
		},
		{
			name: "Sales & Marketing",
			url: "#",
			icon: PieChart
		},
		{
			name: "Travel",
			url: "#",
			icon: Map
		}
	]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader className="flex items-center justify-center p-0">
				<Logo />
			</SidebarHeader>
			<SidebarContent className="pt-8">
				<NavMain items={data.navMain} />
				<NavProjects projects={data.projects} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	)
}
