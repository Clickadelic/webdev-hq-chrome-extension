import { useEffect, useRef, useState } from "react"
import { useSearchEngineStore } from "@/stores/use-search-engine-store"

import { Button } from "@/components/ui/button"
import { AiOutlineSearch } from "react-icons/ai"

import googleSearchIconUrl from "@/assets/icons/search-engines/google-logo.svg"
import bingSearchIconUrl from "@/assets/icons/search-engines/bing-logo.svg"
import braveSearchIconUrl from "@/assets/icons/search-engines/brave-logo.svg"
import duckduckgoSearchIconUrl from "@/assets/icons/search-engines/duck-duck-go-logo.svg"
import yahooSearchIconUrl from "@/assets/icons/search-engines/yahoo-logo.svg"

const engines = [
	{ name: "Brave", url: "https://www.brave.com/search?q=", icon: <img src={braveSearchIconUrl} className="size-6" alt="Brave Logo" /> },
	{ name: "Bing", url: "https://www.bing.com/search?q=", icon: <img src={bingSearchIconUrl} className="size-6" alt="Bing Logo" /> },
	{ name: "DuckDuckGo", url: "https://www.duckduckgo.com/?q=", icon: <img src={duckduckgoSearchIconUrl} className="size-6" alt="DuckDuckGo Logo" /> },
	{ name: "Google", url: "https://www.google.com/search?q=", icon: <img src={googleSearchIconUrl} className="size-6" alt="Google Logo" /> },
	{ name: "Yahoo", url: "https://search.yahoo.com/search?p=", icon: <img src={yahooSearchIconUrl} className="size-6" alt="Yahoo Logo" /> }
]

const UserSearch = () => {
	const searchPlaceholder: string = chrome.i18n.getMessage("search_placeholder")
	const { searchQuery, searchEngine, setSearchQuery, setSearchEngine } = useSearchEngineStore()
	const [dropdownOpen, setDropdownOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

	const currentEngine = engines.find(e => e.url === searchEngine) ?? engines[0]

	const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value)
	}

	const handleEngineChange = (url: string) => {
		setSearchEngine(url)
		setDropdownOpen(false)
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setDropdownOpen(false)
			}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [])

	return (
		<form
			method="GET"
			action={`${searchEngine}${encodeURIComponent(searchQuery)}`}
			className="max-w-[680px] mx-auto mb-3 bg-white backdrop relative top-64 flex flex-row gap-3 p-1 rounded items-center"
		>
			<input type="text" name="q" value={searchQuery} onChange={handleQueryChange} className="w-full px-4 py-2 text-xl focus:outline-none" placeholder={searchPlaceholder} />

			<div className="relative" ref={dropdownRef}>
				<Button type="button" className="flex items-center gap-2 hover:cursor-pointer" variant="ghost" onClick={() => setDropdownOpen(prev => !prev)}>
					{currentEngine.icon}
					<span className="hidden md:inline">{currentEngine.name}</span>
				</Button>

				{dropdownOpen && (
					<div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
						{engines.map(engine => (
							<button key={engine.name} type="button" className="flex items-center gap-2 w-full py-2 px-4 text-left hover:bg-gray-200" onClick={() => handleEngineChange(engine.url)}>
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
