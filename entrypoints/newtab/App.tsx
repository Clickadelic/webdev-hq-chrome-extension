import { useEffect, useState } from "react"

import AppIcon from "@/components/global/AppIcon"
import Clock from "@/components/newtab/Clock"
import Salutation from "@/components/newtab/Salutation"
import MultiSearch from "@/components/newtab/MultiSearch"
import AccountMenu from "@/components/newtab/AccountMenu"
import TabGroupBadges from "@/components/newtab/TabGroupBadges"
import TabsModule from "@/components/newtab/TabsModule"

interface CreditsProps {
	author: string
	authorUrl: string
	unsplashUrl: string
}

const App = () => {
	const [image, setImage] = useState<string | null>(null)
	const [credit, setCredit] = useState<CreditsProps | null>(null)

	useEffect(() => {
		chrome.runtime.sendMessage({ action: "getDailyImage" }, response => {
			setImage(response.url || null)
			chrome.storage.local.get(["author", "authorUrl", "unsplashUrl"], data => {
				setCredit({
					author: data.author,
					authorUrl: data.authorUrl,
					unsplashUrl: data.unsplashUrl
				})
			})
		})
	}, [])

	return (
		<div
			className="min-h-screen relative flex flex-col flex-start bg-slate-900 bg-cover"
			style={{
				backgroundImage: image ? `url(${image})` : undefined,
				backgroundSize: "cover",
				backgroundPosition: "center"
			}}
		>
			<AppIcon url="https://webdev-hq.com" classNames="absolute top-4 left-4 text-white z-50" target="_blank" />
			<Clock classNames="mt-4 mx-auto" digitStyle="text-4xl text-white font-light" />
			<AccountMenu classNames="absolute top-4 right-4 text-white" />
			<Salutation classNames="w-[680px] mt-32 mb-4 mx-auto text-white text-4xl font-light" />
			<MultiSearch classNames="w-[680px] my-3 mx-auto" />
			<TabsModule classNames="w-[680px] mx-auto flex flex-row" />
			<TabGroupBadges />
			{credit && (
				<div className="absolute bottom-4 left-4 text-white text-sm">
					<p className="text-xs mt-4">
						{chrome.i18n.getMessage("photo_by")}{" "}
						<a href={credit.authorUrl} target="_blank" rel="noreferrer" className="underline hover:text-blue-600">
							{credit.author}
						</a>{" "}
						{chrome.i18n.getMessage("on")}{" "}
						<a href={credit.unsplashUrl} target="_blank" rel="noreferrer" className="underline hover:text-blue-600">
							Unsplash
						</a>
					</p>
				</div>
			)}
		</div>
	)
}

export default App
