import { useEffect, useRef, useState } from "react"
import { useSearchEngineStore } from "@/stores/use-search-engine-store"

import { Button } from "@/components/ui/button"
import { AiOutlineSearch } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"

import { cn } from "@/lib/utils"

import { engines } from "@/lib/search-engines"

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
			className="max-w-[680px] mx-auto mb-3 bg-white backdrop relative top-64 flex flex-row gap-1 p-1 rounded items-center"
		>
			<input type="text" name="q" value={searchQuery} onChange={handleQueryChange} className="w-full pl-3 pr-2 py-1 text-xl focus:outline-none" placeholder={searchPlaceholder} />

			<div className="relative" ref={dropdownRef}>
				<Button type="button" className="flex items-center gap-2 hover:cursor-pointer" variant="ghost" onClick={() => setDropdownOpen(prev => !prev)}>
					{currentEngine.icon}
					<span className="hidden md:inline">{currentEngine.name}</span>
					<span className={cn("ml-2 transition-transform ease-in-out duration-300", dropdownOpen ? "rotate-180" : "")} data-rotate={dropdownOpen ? "rotate-180" : ""}>
						<BsChevronDown />
					</span>
				</Button>

				{dropdownOpen && (
					<div className="absolute -left-3 mt-1 w-48 bg-white border rounded shadow-lg z-10">
						{engines.map(engine => (
							<button
								key={engine.name}
								type="button"
								className="flex items-center gap-2 w-full py-2 px-4 text-left hover:bg-gray-200 hover:cursor-pointer"
								onClick={() => handleEngineChange(engine.url)}
							>
								{engine.icon}
								{engine.name}
							</button>
						))}
					</div>
				)}
			</div>

			<Button variant="primary" className="size-9">
				<AiOutlineSearch />
			</Button>
		</form>
	)
}

export default UserSearch
