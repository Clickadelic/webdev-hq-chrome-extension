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
				<AppIcon url={`${import.meta.env.WXT_HOMEPAGE_URL}`} classNames="absolute top-4 left-4 text-white z-50" target="_blank" />
				<Clock classNames="mt-4 mx-auto gap-3 dark:text-slate-800" digitStyle="text-4xl text-light font-light" />
				<AccountMenu classNames="absolute top-4 right-4 text-white" />
				<Salutation classNames="w-[680px] mt-12 md:mt-20 xl:mt-24 mb-4 mx-auto text-white text-4xl font-light dark:text-slate-800" />
				<MultiSearch classNames="w-[680px] my-3 mx-auto bg-white/30 p-1 rounded backdrop-blur dark:bg-slate-800/30" />
				<TabsModule classNames="w-[680px] mx-auto flex flex-row" />
				<ButtonBar classNames="w-[680px] absolute bottom-3 left-24 right-24 p-1 mx-auto flex items-center justify-center bg-white/30 rounded backdrop-blur" />
				<Toaster />
			</BackgroundImage>
		</ThemeProvider>
	)
}

export default App
