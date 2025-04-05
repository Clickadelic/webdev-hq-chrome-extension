import { AiOutlineSearch } from "react-icons/ai"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const App = () => {
	return (
		<div className="min-h-screen bg-blue-fractals bg-white/30 bg-cover p-0">
			<div className="min-h-screen backdrop-blur">
				<div className="max-w-[680px] mx-auto mb-2 bg-white/30 backdrop rounded-md relative top-64 flex flex-row">
					<input type="text" className="w-full px-3 py-4 text-xl rounded-tl-md rounded-bl-md" placeholder="Search..." />
					<select className="p-4 rounded-tr-md rounded-br-md text-slate-900">
						<option value="bing">Bing</option>
						<option value="brave">Brave</option>
						<option value="duckduckgo">DuckDuckGo</option>
						<option value="google">Google</option>
						<option value="yahoo">Yahoo</option>
					</select>
					<button className="bg-blue-500 text-white px-6 rounded">
						<AiOutlineSearch size={24} />
					</button>
				</div>
				<div className="max-w-[680px] mx-auto backdrop rounded-md relative top-64 flex flex-row">
					<Tabs defaultValue="apps" className="w-full">
						<TabsList className="grid w-full grid-cols-5">
							<TabsTrigger value="apps">Apps</TabsTrigger>
							<TabsTrigger value="todos">Todos</TabsTrigger>
							<TabsTrigger value="tabs">Tabs</TabsTrigger>
							<TabsTrigger value="history">History</TabsTrigger>
							<TabsTrigger value="downloads">Downloads</TabsTrigger>
						</TabsList>
						<TabsContent value="apps">app icon</TabsContent>
						<TabsContent value="todos">
							<Card>
								<CardHeader>
									<CardTitle>Password</CardTitle>
									<CardDescription>Change your password here. After saving, you'll be logged out.</CardDescription>
								</CardHeader>
								<CardContent className="space-y-2">
									<div className="space-y-1">
										<Label htmlFor="current">Current password</Label>
										<Input id="current" type="password" />
									</div>
									<div className="space-y-1">
										<Label htmlFor="new">New password</Label>
										<Input id="new" type="password" />
									</div>
								</CardContent>
								<CardFooter>
									<Button>Save password</Button>
								</CardFooter>
							</Card>
						</TabsContent>
						<TabsContent value="tabs">
							<Card>
								<CardHeader>
									<CardTitle>Password</CardTitle>
									<CardDescription>Change your password here. After saving, you'll be logged out.</CardDescription>
								</CardHeader>
								<CardContent className="space-y-2">
									<div className="space-y-1">
										<Label htmlFor="current">Current password</Label>
										<Input id="current" type="password" />
									</div>
									<div className="space-y-1">
										<Label htmlFor="new">New password</Label>
										<Input id="new" type="password" />
									</div>
								</CardContent>
								<CardFooter>
									<Button>Save password</Button>
								</CardFooter>
							</Card>
						</TabsContent>
						<TabsContent value="history">
							<Card>
								<CardHeader>
									<CardTitle>Password</CardTitle>
									<CardDescription>Change your password here. After saving, you'll be logged out.</CardDescription>
								</CardHeader>
								<CardContent className="space-y-2">
									<div className="space-y-1">
										<Label htmlFor="current">Current password</Label>
										<Input id="current" type="password" />
									</div>
									<div className="space-y-1">
										<Label htmlFor="new">New password</Label>
										<Input id="new" type="password" />
									</div>
								</CardContent>
								<CardFooter>
									<Button>Save password</Button>
								</CardFooter>
							</Card>
						</TabsContent>
						<TabsContent value="downloads">
							<Card>
								<CardHeader>
									<CardTitle>Password</CardTitle>
									<CardDescription>Change your password here. After saving, you'll be logged out.</CardDescription>
								</CardHeader>
								<CardContent className="space-y-2">
									<div className="space-y-1">
										<Label htmlFor="current">Current password</Label>
										<Input id="current" type="password" />
									</div>
									<div className="space-y-1">
										<Label htmlFor="new">New password</Label>
										<Input id="new" type="password" />
									</div>
								</CardContent>
								<CardFooter>
									<Button>Save password</Button>
								</CardFooter>
							</Card>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</div>
	)
}

export default App
