import { useEffect, useState } from "react"

import AppIcon from "@/components/global/AppIcon"
import Clock from "@/components/newtab/Clock"
import Salutation from "@/components/newtab/Salutation"
import MultiSearch from "@/components/newtab/MultiSearch"
import AccountMenu from "@/components/newtab/AccountMenu"
import TabGroupBadges from "@/components/newtab/TabGroupBadges"
import TabsModule from "@/components/newtab/TabsModule"
import { get } from "react-hook-form"

const App = () => {
	const [backgroundImage, setBackgroundImage] = useState<string | null>(null)

	useEffect(() => {
		chrome.storage.local.get("backgroundImageUrl", async result => {
			if (result.backgroundImageUrl) {
				console.log("backgroundImageUrl", result.backgroundImageUrl)
				setBackgroundImage(result.backgroundImageUrl)
			} else {
				const response = await chrome.runtime.sendMessage({ action: "fetchAndStoreImage" })
				if (response?.imageUrl) {
					setBackgroundImage(response.urls.regular)
				}
			}
		})
	}, [])

	return (
		<div
			className="min-h-screen relative flex flex-col flex-start bg-rotterdam bg-slate-900 bg-cover"
			style={{
				backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined
			}}
		>
			<AppIcon url="https://webdev-hq.com" classNames="absolute top-4 left-4 text-white z-50" target="_blank" />
			<Clock classNames="mt-4 mx-auto" digitStyle="text-4xl text-white font-light" />
			<AccountMenu classNames="absolute top-4 right-4 text-white" />
			<Salutation classNames="w-[680px] mt-32 mb-4 mx-auto text-white text-4xl font-light" />
			<MultiSearch classNames="w-[680px] my-3 mx-auto" />
			<TabsModule classNames="w-[680px] mx-auto flex flex-row" />
			<TabGroupBadges />
		</div>
	)
}

export default App
