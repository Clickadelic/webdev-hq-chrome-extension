import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getUserInfo, dailySalutation } from "@/utils/index"

import { AiOutlineSearch } from "react-icons/ai"
import { GoGear } from "react-icons/go"
import { Plus } from "lucide-react"

import { apps } from "@/fake-data/apps"
import UserHistory from "@/components/custom/UserHistory"

interface TodosProps {
	id: string
	name: string
	done: boolean
}

const App = () => {
	// Strings
	const salutation: string = dailySalutation()
	const searchPlaceholder: string = chrome.i18n.getMessage("search_placeholder")
	const newTodoPlaceholder: string = chrome.i18n.getMessage("new_todo_placeholder")

	// Tabslabel
	const appsLabel: string = chrome.i18n.getMessage("apps")
	const todosLabel: string = chrome.i18n.getMessage("todos")
	const tabsLabel: string = chrome.i18n.getMessage("tabs")
	const historyLabel: string = chrome.i18n.getMessage("history")
	const downloadsLabel: string = chrome.i18n.getMessage("downloads")

	const [searchEngine, setSearchEngine] = useState<string>("")
	const [todos, setTodos] = useState<TodosProps[]>([])
	const [user, setUser] = useState<chrome.identity.UserInfo | null>(null)

	const handleTodoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const todoName = formData.get("todo") as string
		const newTodo = { id: crypto.randomUUID(), name: todoName, done: false }
		setTodos([...todos, newTodo])
		e.currentTarget.reset()
	}

	const renderTodoList = ({ todos }: { todos: TodosProps[] }) => {
		return todos.map(todo => (
			<li key={todo.id}>
				<input type="checkbox" />
				{todo.name}
			</li>
		))
	}

	useEffect(() => {
		getUserInfo().then(userInfo => setUser(userInfo))
	}, [todos])

	return (
		<div className="min-h-screen bg-slate-900 bg-color-fog bg-cover p-0">
			<div className="min-h-screen backdrop-blur">
				<div className="max-w-[680px] mx-auto backdrop rounded-md relative top-64 mb-4">
					<h1 className="flex gap-4 text-4xl font-light text-white mb-4">{salutation}</h1>
				</div>
				<form method="GET" action={searchEngine} className="max-w-[680px] mx-auto mb-4 bg-white backdrop relative top-64 flex flex-row gap-3 p-1 rounded">
					<input type="text" className="w-full px-4 py-4 text-xl focus:outline-none" placeholder={searchPlaceholder} />
					<select onChange={e => setSearchEngine(e.target.value)} className="search-engines p-4 text-xl text-slate-600 focus:outline-none">
						<option value="bing">Bing</option>
						<option value="brave">Brave</option>
						<option value="duckduckgo">DuckDuckGo</option>
						<option value="https://www.google.com/search">Google</option>
						<option value="yahoo">Yahoo</option>
					</select>
					<Button size="lg" className="bg-blue-500 text-white size-16 rounded hover:cursor-pointer">
						<AiOutlineSearch />
					</Button>
				</form>
				<div className="max-w-[680px] mx-auto backdrop relative top-64 flex flex-row">
					<Tabs defaultValue="apps" className="w-full">
						<TabsList className="grid w-full grid-cols-5 text-slate-600">
							<TabsTrigger value="apps">{appsLabel}</TabsTrigger>
							<TabsTrigger value="todos">{todosLabel}</TabsTrigger>
							<TabsTrigger value="tabs">{tabsLabel}</TabsTrigger>
							<TabsTrigger value="history">{historyLabel}</TabsTrigger>
							<TabsTrigger value="downloads">{downloadsLabel}</TabsTrigger>
						</TabsList>
						<TabsContent value="apps">
							<ul className="w-full grid grid-cols-1 md:grid-cols-9 gap-2">
								<li>
									<Button className="flex flex-col gap-1 items-center place-content-center bg-white p-2 size-[64px] rounded hover:bg-white/70 hover:cursor-pointer">
										<Plus className="text-slate-800" />
									</Button>
								</li>
								{apps.map(app => (
									<li key={app.id} className="bg-white p-2 w-[64px] rounded hover:bg-white/70 hover:cursor-pointer">
										<a href={app.url} target="_blank" className="flex flex-col gap-1 items-center place-content-center" rel="noopener noreferrer">
											<img src={app.icon} alt={app.name} className="size-6" />
											<span className="text-slate-800">{app.name}</span>
										</a>
									</li>
								))}
							</ul>
						</TabsContent>
						<TabsContent value="todos">
							<Card className="px-3 py-0">
								<form className="flex flex-row" onSubmit={handleTodoSubmit}>
									<input type="text" className="w-full p-2 text-md border focus:outline-none" placeholder={newTodoPlaceholder} />
									<Button size="sm" className="bg-blue-500 text-white size-16 rounded hover:cursor-pointer">
										<Plus />
									</Button>
								</form>
								<ul>{renderTodoList({ todos })}</ul>
							</Card>
						</TabsContent>
						<TabsContent value="tabs">
							<Card className="px-3 py-0">Tabslist</Card>
						</TabsContent>
						<TabsContent value="history">
							<Card className="p-3">
								<UserHistory />
							</Card>
						</TabsContent>
						<TabsContent value="downloads">
							<Card className="px-3 py-0">DownloadsList</Card>
						</TabsContent>
					</Tabs>
				</div>
				<div className="absolute top-4 right-4 text-white">{user?.email ? user.email : "Icognito"}</div>
				<div className="absolute bottom-4 right-4 text-white">
					<Button className="w-full" onClick={() => chrome.runtime.openOptionsPage()}>
						<GoGear />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default App
