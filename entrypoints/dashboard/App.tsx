import { Routes, Route } from "react-router-dom"

import HeaderSidebar from "@/components/dashboard/HeaderSidebar"

import IndexPage from "./pages/IndexPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import BackgroundImage from "@/components/global/BackgroundImage"
const App = () => {
	return (
		<div className="min-h-dvh bg-slate-100">
			<BackgroundImage>
				<HeaderSidebar />
				<main className="md:ml-64 pt-16 p-2">
					<div>
						<Routes>
							<Route path="/" element={<IndexPage />} />
							<Route path="/about" element={<AboutPage />} />
							<Route path="/contact" element={<ContactPage />} />
						</Routes>
					</div>
				</main>
			</BackgroundImage>
		</div>
	)
}

export default App
