import * as React from "react"
import { AudioWaveform, BookOpen, Bot, Command, Frame, GalleryVerticalEnd, Map, PieChart, Settings2, SquareTerminal } from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"
import Logo from "../global/Logo"
// This is sample data.

const userData = chrome.identity.getProfileUserInfo()
console.log(userData)

const data = {
	user: {
		name: "shadcn",
		email: "userData@email.com",
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
				},
				{
					title: "About",
					url: "/about"
				},
				{
					title: "Contact",
					url: "/about"
				}
			]
		},
		{
			title: "Models",
			url: "#",
			icon: Bot,
			items: [
				{
					title: "Genesis",
					url: "#"
				},
				{
					title: "Explorer",
					url: "#"
				},
				{
					title: "Quantum",
					url: "#"
				}
			]
		},
		{
			title: "Documentation",
			url: "#",
			icon: BookOpen,
			items: [
				{
					title: "Introduction",
					url: "#"
				},
				{
					title: "Get Started",
					url: "#"
				},
				{
					title: "Tutorials",
					url: "#"
				},
				{
					title: "Changelog",
					url: "#"
				}
			]
		},
		{
			title: "Settings",
			url: "#",
			icon: Settings2,
			items: [
				{
					title: "General",
					url: "#"
				},
				{
					title: "Team",
					url: "#"
				},
				{
					title: "Billing",
					url: "#"
				},
				{
					title: "Limits",
					url: "#"
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
			<SidebarHeader className="flex items-center justify-center">
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
