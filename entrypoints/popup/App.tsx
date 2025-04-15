import { Button } from "@/components/ui/button"

const App = () => {
	return (
		<div className="bg-transparent w-96 rounded-md p-6 mx-auto">
			<Button className="w-full" onClick={() => chrome.runtime.openOptionsPage()}>
				Inspect
			</Button>
		</div>
	)
}

export default App
