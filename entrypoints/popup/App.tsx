import { Button } from "@/components/ui/button"

const App = () => {
<<<<<<< HEAD
  return (
    <div className="size-[600px] bg-slate-100 p-3 pt-8 text-center">
      <Logo classes="text-3xl" />
    </div>
  );
};
=======
	return (
		<div className="bg-transparent w-96 rounded-md p-6 mx-auto">
			<Button className="w-full" onClick={() => chrome.runtime.openOptionsPage()}>
				Inspect
			</Button>
		</div>
	)
}
>>>>>>> 30780a54112071245a1ea0008a78d32bfcf7d2cd

export default App
