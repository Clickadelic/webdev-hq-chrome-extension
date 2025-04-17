import { useState } from "react"
import { useSearchEngineStore } from "@/stores/use-search-engine-store"
import { Button } from "@/components/ui/button"
import { AiOutlineSearch } from "react-icons/ai"

import googleSearchIconUrl from "@/assets/icons/search-engines/google-logo.svg"
import bingSearchIconUrl from "@/assets/icons/search-engines/bing-logo.svg"
import braveSearchIconUrl from "@/assets/icons/search-engines/brave-logo.svg"
import duckduckgoSearchIconUrl from "@/assets/icons/search-engines/duck-duck-go-logo.svg"
import yahooSearchIconUrl from "@/assets/icons/search-engines/yahoo-logo.svg"

const googleIcon = <img src={googleSearchIconUrl} className="size-7" alt="Google Logo" />
const bingIcon = <img src={bingSearchIconUrl} className="size-7" alt="Bing Logo" />
const braveIcon = <img src={braveSearchIconUrl} className="size-7" alt="Brave Logo" />
const duckduckgoIcon = <img src={duckduckgoSearchIconUrl} className="size-7" alt="DuckDuckGo Logo" />
const yahooIcon = <img src={yahooSearchIconUrl} className="size-7" alt="Yahoo Logo" />

const engines = [
	{ name: "Google", url: "https://www.google.com/search?q=", icon: googleIcon },
	{ name: "Bing", url: "https://www.bing.com/search?q=", icon: bingIcon },
	{ name: "Brave", url: "https://www.brave.com/search?q=", icon: braveIcon },
	{ name: "DuckDuckGo", url: "https://www.duckduckgo.com/?q=", icon: duckduckgoIcon },
	{ name: "Yahoo", url: "https://search.yahoo.com/search?p=", icon: yahooIcon }
]

const UserSearch = () => {
	const searchPlaceholder: string = chrome.i18n.getMessage("search_placeholder")
	const { searchQuery, searchEngine, setSearchQuery, setSearchEngine } = useSearchEngineStore()
	const [dropdownOpen, setDropdownOpen] = useState(false)

	const currentEngine = engines.find(e => e.url === searchEngine)

	const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value)
	}

	const handleEngineChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSearchEngine(e.target.value)
		setDropdownOpen(false)
	}

	useEffect(() => {
		document.addEventListener("click", () => {
			setDropdownOpen(false)
		})
	})

	return (
		<form
			method="GET"
			action={`${searchEngine}${encodeURIComponent(searchQuery)}`}
			className="max-w-[680px] mx-auto mb-3 bg-white backdrop relative top-64 flex flex-row gap-3 p-1 rounded items-center"
		>
			<input type="text" name="q" value={searchQuery} onChange={handleQueryChange} className="w-full px-4 py-2 text-xl focus:outline-none" placeholder={searchPlaceholder} />

			{/* 🔽 Custom Dropdown */}
			<div className="relative">
				<Button type="button" className="hover:cursor-pointer" variant="ghost" onClick={() => setDropdownOpen(!dropdownOpen)}>
					{currentEngine?.icon}
					<span className="hidden md:inline">{currentEngine?.name}</span>
				</Button>
				{dropdownOpen && (
					<div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
						{engines.map(engine => (
							<button
								key={engine.name}
								type="button"
								className={`flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100 hover:cursor-pointer ${engine.url === searchEngine ? "bg-gray-100" : ""}`}
								onClick={() => {
									handleEngineChange()
									setDropdownOpen(false)
								}}
							>
								{engine.icon}
								{engine.name}
							</button>
						))}
					</div>
				)}
			</div>

			<Button variant="primary" className="size-12">
				<AiOutlineSearch />
			</Button>
		</form>
	)
}

export default UserSearch
