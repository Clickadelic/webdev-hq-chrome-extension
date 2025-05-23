import BackgroundImage from "@/components/newtab/BackgroundImage"

import AppIcon from "@/components/global/AppIcon"
import Clock from "@/components/newtab/Clock"
import Salutation from "@/components/newtab/Salutation"
import MultiSearch from "@/components/newtab/MultiSearch"
import AccountMenu from "@/components/newtab/AccountMenu"
import TabsModule from "@/components/newtab/TabsModule"
import Cockpit from "@/components/newtab/Cockpit"

const App = () => {
	return (
		<BackgroundImage>
			<AppIcon url={`${import.meta.env.WXT_HOMEPAGE_URL}`} classNames="absolute top-4 left-4 text-white z-50" target="_blank" />
			<Clock classNames="mt-4 mx-auto gap-3" digitStyle="text-4xl text-white font-light" />
			<AccountMenu classNames="absolute top-4 right-4 text-white" />
			<Salutation classNames="w-[680px] mt-32 mb-4 mx-auto text-white text-4xl font-light" />
			<MultiSearch classNames="w-[680px] my-3 mx-auto" />
			<TabsModule classNames="w-[680px] mx-auto flex flex-row" />
			<Cockpit classNames="w-[188px] absolute bottom-3 left-24 right-24 p-1 mx-auto flex items-center justify-center bg-white/30 rounded" />
		</BackgroundImage>
	)
}

export default App
