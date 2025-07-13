import BackgroundImage from "@/components/global/BackgroundImage"

import AppIcon from "@/components/global/AppIcon"
import Clock from "@/components/newtab/Clock"
import Salutation from "@/components/newtab/Salutation"
import MultiSearch from "@/components/newtab/MultiSearch"
import AccountMenu from "@/components/newtab/AccountMenu"
import TabsModule from "@/components/newtab/TabsModule"
import ButtonBar from "@/components/newtab/ButtonBar"
import { ThemeProvider } from "@/components/global/ThemeProvider"
import { Toaster } from "@/components/ui/sonner"

const App = () => {
	return (
		<ThemeProvider>
			<BackgroundImage>
				<div className="flex justify-between gap-1 p-1">
					<AppIcon url={import.meta.env.WXT_HOMEPAGE_URL} classNames="flex justify-center items-center size-[64px]" />
					<nav>
						<ul className="flex justify-between space-y-2 space-x-4 items-center">
							<li>
								<a href="#" className="size-5 bg-slate-800/30 dark:bg-white/30 rounded-full flex items-center justify-center">
									Link
								</a>
							</li>
							<li>
								<a href="#" className="size-5">
									Link
								</a>
							</li>
						</ul>
					</nav>
					<AccountMenu />
				</div>
				<Salutation classNames="max-w-[890px] mt-12 md:mt-20 xl:mt-24 mb-4 mx-auto text-white text-4xl font-light dark:text-slate-300" />
				<MultiSearch classNames="max-w-[890px] my-3 mx-auto bg-white/30 p-1 rounded backdrop-blur dark:bg-slate-800/30" />
				<TabsModule classNames="w-full max-w-[890px] mx-auto flex flex-row" />
				<ButtonBar classNames="w-[316px] absolute bottom-3 left-24 right-24 p-1 mx-auto flex items-center justify-center bg-white/30 dark:bg-slate-800/30 rounded backdrop-blur" />
				<Toaster className="dark:bg-slate-800" />
			</BackgroundImage>
		</ThemeProvider>
	)
}

export default App
