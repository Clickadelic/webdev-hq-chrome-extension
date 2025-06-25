import { Routes, Route } from "react-router-dom"

import BackgroundImage from "@/components/global/BackgroundImage"
import HeaderSidebar from "@/components/dashboard/HeaderSidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import DashboardPage from "./pages/DashboardPage"

const App = () => {
	return (
		<div className="min-h-dvh bg-slate-100">
			<BackgroundImage creditsPosition="center">
				<SidebarProvider>
					<HeaderSidebar />
					<main className="container mx-auto mt-32">
						<Routes>
							{/* Hashrouter is ready, just add routes */}
							<Route path="/" element={<DashboardPage />} />
						</Routes>
					</main>
				</SidebarProvider>
			</BackgroundImage>
		</div>
	)
}

export default App
