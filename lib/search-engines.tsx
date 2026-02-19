import googleSearchIconUrl from "@/assets/icons/search-engines/google-logo.svg"
import bingSearchIconUrl from "@/assets/icons/search-engines/bing-logo.svg"
import braveSearchIconUrl from "@/assets/icons/search-engines/brave-logo.svg"
import duckduckgoSearchIconUrl from "@/assets/icons/search-engines/duck-duck-go-logo.svg"
import yahooSearchIconUrl from "@/assets/icons/search-engines/yahoo-logo.svg"
import youtubeSearchIconUrl from "@/assets/icons/search-engines/youtube-logo.svg"

export const engines = [
	{ name: "Bing", url: "https://www.bing.com/search?q=", icon: <img src={bingSearchIconUrl} className="size-5" alt="Bing Logo" /> },
	{ name: "Brave", url: "https://search.brave.com/search?q=", icon: <img src={braveSearchIconUrl} className="size-5" alt="Brave Logo" /> },
	{ name: "DuckDuckGo", url: "https://www.duckduckgo.com/?q=", icon: <img src={duckduckgoSearchIconUrl} className="size-5" alt="DuckDuckGo Logo" /> },
	{ name: "Google", url: "https://www.google.com/search?q=", icon: <img src={googleSearchIconUrl} className="size-5" alt="Google Logo" /> },
	{ name: "Yahoo", url: "https://search.yahoo.com/search?p=", icon: <img src={yahooSearchIconUrl} className="size-5" alt="Yahoo Logo" /> },
	{ name: "YouTube", url: "https://www.youtube.com/results?search_query=", icon: <img src={youtubeSearchIconUrl} className="size-5" alt="YouTube Logo" /> }
]
