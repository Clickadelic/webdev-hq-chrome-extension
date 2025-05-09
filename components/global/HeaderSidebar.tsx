import { useState } from "react"
import { cn } from "@/lib/utils"

import { BsTextIndentRight } from "react-icons/bs"
import { BsTextIndentLeft } from "react-icons/bs"
import { HiMenuAlt3 } from "react-icons/hi"

import { Button } from "@/components/ui/button"
import { AccountDropdown } from "./AccountDropdown"
import { SidebarSheet } from "./SidebarSheet"
import { MegaMenu } from "./MegaMenu"
import { NotificationButton } from "./NotificationButton"
import { InboxButton } from "./InboxButton"
import { FullscreenButton } from "./FullscreenButton"
import { LangSwitch } from "./LangSwitch"

import Logo from "./Logo"

const HeaderSidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	return (
		<>
			<aside className={cn("App-sidebar hidden fixed md:block top-0 left-0 min-h-screen border-r bg-white", isSidebarOpen ? "w-16" : "w-64")}>
				<div className="sidebar-logo hidden md:flex justify-center px-2 py-3">
					<Logo href="https://webdev-hq.com" isOpen={isSidebarOpen} />
				</div>
				<section className="sidebar-accordion mt-[18px] mb-6 overflow-y-auto">MenuLeft</section>
			</aside>
			<header className={cn("App-header flex fixed top-0 md:ml-64 w-screen p-3 border-b bg-white z-50", isSidebarOpen ? "md:ml-16" : "md:ml-64")}>
				<nav className="header-nav flex justify-between w-max">
					<div className="inline-flex gap-3">
						<Button variant="ghost" size="sm" className="rounded-xs" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
							{isSidebarOpen ? <BsTextIndentLeft /> : <BsTextIndentRight />}
						</Button>
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
