import BackgroundImage from "@/components/global/BackgroundImage"

import AppIcon from "@/components/global/AppIcon"
import Clock from "@/components/newtab/Clock"
import UserInfoBox from "@/components/newtab/UserInfoBox"
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
				<div className="flex justify-between gap-1 p-1 pr-4">
					<AppIcon url={import.meta.env.WXT_HOMEPAGE_URL} classNames="flex justify-center items-center size-[64px]" />
					<Clock classNames="text-white mt-2 font-light dark:text-slate-100 text-shadow-lg text-3xl space-x-2" />
					<AccountMenu classNames="flex justify-center items-center text-shadow-lg" />
				</div>
				<UserInfoBox classNames="w-full max-w-[890px] mt-12 mx-auto md:mt-20 xl:mt-24 mb-3 flex justify-between gap-1 p-1 pr-4" />
				<MultiSearch classNames="w-full max-w-[890px] my-3 mx-auto bg-white/30 p-1 rounded backdrop-blur dark:bg-slate-800/30" />
				<TabsModule classNames="w-full max-w-[890px] mx-auto flex flex-row" />
				<ButtonBar classNames="w-[227px] absolute bottom-3 left-24 right-24 p-1 mx-auto flex items-center justify-center bg-white/30 dark:bg-slate-800/30 rounded backdrop-blur" />
				<Toaster className="dark:bg-slate-800" />
			</BackgroundImage>
		</ThemeProvider>
	)
}

export default App
