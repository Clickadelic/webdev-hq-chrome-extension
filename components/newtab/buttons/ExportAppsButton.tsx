import { Button } from "@/components/ui/button"
import { useAppStore } from "@/stores/use-app-store" // Pfad ggf. anpassen
import { TfiExport } from "react-icons/tfi"
export const ExportAppsButton = () => {
	const apps = useAppStore(state => state.apps)

	const handleExport = () => {
		const json = JSON.stringify(apps, null, 2)
		const blob = new Blob([json], { type: "application/json" })
		const url = URL.createObjectURL(blob)

		const link = document.createElement("a")
		link.href = url
		link.download = "webvdev-hq-newtab-apps-" + new Intl.DateTimeFormat("en-US").format(new Date()) + ".json"
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
		URL.revokeObjectURL(url)
	}

	return (
		<Button className="border border-transparent bg-white text-slate-800 hover:border-mantis-primary hover:bg-white hover:cursor-pointer" onClick={handleExport}>
			<TfiExport className="size-4" />
		</Button>
	)
}
