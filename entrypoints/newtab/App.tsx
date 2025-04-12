import { AiOutlineSearch } from "react-icons/ai"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { dailySalutation } from "@/utils"
import iconSrc from "@/assets/icons/weather/cloudy-sunny.svg"

const App = () => {
	const todos = [
		{
			invoice: "INV001",
			paymentStatus: "Paid",
			totalAmount: "$250.00",
			deadline: "Today"
		},
		{
			invoice: "INV002",
			paymentStatus: "Pending",
			totalAmount: "$150.00",
			deadline: "Yesterday"
		}
	]
	
	const salutation = dailySalutation()
	const currentUser = userName()
	console.log(currentUser)

	return (
		<div className="min-h-screen bg-blue-fractals bg-white/30 bg-cover p-0">
			<div className="min-h-screen backdrop-blur">
				<div className="max-w-[680px] mx-auto backdrop rounded-md relative top-64">
					<h1 className="flex gap-4 text-4xl font-light text-white mb-4">
						<img src={iconSrc} className="size-12 mt-1.5" alt="Weather Icon" />
						{salutation}
					</h1>
				</div>
				<form className="max-w-[680px] mx-auto mb-2 bg-white backdrop rounded relative top-64 flex flex-row p-1 rounded">
					<input type="text" className="w-full px-4 py-4 text-xl focus:outline-none" placeholder="Search..." />
					<select className="search-engines p-4 text-xl text-slate-900 focus:outline-none">
						<option value="bing">Bing</option>
						<option value="brave">Brave</option>
						<option value="duckduckgo">DuckDuckGo</option>
						<option value="google">Google</option>
						<option value="yahoo">Yahoo</option>
					</select>
					<button className="bg-blue-500 text-white px-6 rounded-tr rounded-br">
						<AiOutlineSearch size={24} />
					</button>
				</form>
				<div className="max-w-[680px] mx-auto backdrop relative top-64 flex flex-row">
					<Tabs defaultValue="apps" className="w-full">
						<TabsList className="grid w-full grid-cols-5">
							<TabsTrigger value="apps">Apps</TabsTrigger>
							<TabsTrigger value="todos">Todos</TabsTrigger>
							<TabsTrigger value="tabs">Tabs</TabsTrigger>
							<TabsTrigger value="history">History</TabsTrigger>
							<TabsTrigger value="downloads">Downloads</TabsTrigger>
						</TabsList>
						<TabsContent value="apps">
							<Card>
								<div className="header">asd</div>
							</Card>
						</TabsContent>
						<TabsContent value="todos">
							<Card className="px-3 py-0">
								<Table>
									<TableCaption>A list of your recent todos.</TableCaption>
									<TableHeader>
										<TableRow>
											<TableHead className="w-[100px]">Done</TableHead>
											<TableHead>Task</TableHead>
											<TableHead>Deadline</TableHead>
											<TableHead className="text-right">Action</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{todos.map(invoice => (
											<TableRow key={invoice.invoice}>
												<TableCell className="font-medium">
													<input type="checkbox" />
												</TableCell>
												<TableCell>{invoice.paymentStatus}</TableCell>
												<TableCell>{invoice.deadline}</TableCell>
												<TableCell className="text-right">
													<Button>Delete</Button>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</Card>
						</TabsContent>
						<TabsContent value="tabs">
							<Card>asdasdasd</Card>
						</TabsContent>
						<TabsContent value="history">
							<Card>asdasdasd</Card>
						</TabsContent>
						<TabsContent value="downloads">
							<Card>defgdfgdfgdfg</Card>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</div>
	)
}

export default App
