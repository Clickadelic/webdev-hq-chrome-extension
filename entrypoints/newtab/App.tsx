import { Button } from "@/components/ui/button"
import { GoGear } from "react-icons/go"

import AppIcon from "@/components/global/AppIcon"
import Clock from "@/components/newtab/Clock"
import Salutation from "@/components/newtab/Salutation"
import MultiSearch from "@/components/newtab/MultiSearch"
import AccountMenu from "@/components/newtab/AccountMenu"
import TabGroupBadges from "@/components/newtab/TabGroupBadges"
import TabsModule from "@/components/newtab/TabsModule"

const App = () => {
	return (
		<div className="min-h-screen relative flex flex-col flex-start bg-rotterdam bg-slate-900 bg-cover">
			<AppIcon url="https://webdev-hq.com" classNames="absolute top-4 left-4 text-white z-50" target="_blank" />
			<Clock classNames="mt-4 mx-auto" digitStyle="text-4xl text-white font-light" />
			<AccountMenu classNames="absolute top-4 right-4 text-white" />
			<Salutation classNames="w-[680px] mb-4 mx-auto text-white text-4xl font-light" />
			<MultiSearch classNames="w-[680px] my-4 mx-auto" />
			<TabsModule classNames="w-[680px] mx-auto flex flex-row" />
			<TabGroupBadges />
			<div className="right-4 bottom-4 absolute text-white">
				<Button className="w-full" onClick={() => chrome.runtime.openOptionsPage()}>
					<GoGear />
				</Button>
			</div>
		</div>
	)
}

export default App
