import React, { useRef } from "react"
import { Button } from "@/components/ui/button"
import { useAppStore } from "@/stores/use-app-store"
import { TfiImport } from "react-icons/tfi"
export const ImportAppsButton = () => {
	const fileInputRef = useRef<HTMLInputElement | null>(null)
	const setApps = useAppStore.setState

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (!file) return

		const reader = new FileReader()
		reader.onload = event => {
			try {
				const importedApps = JSON.parse(event.target?.result as string)
				if (!Array.isArray(importedApps)) throw new Error("Invalid format")

				// Optional: einfache Validierung der Struktur
				const valid = importedApps.every(app => typeof app.id === "string" && typeof app.title === "string" && typeof app.url === "string" && typeof app.icon === "string")

				if (!valid) throw new Error("Invalid app data format")

				setApps({ apps: importedApps })
			} catch (error) {
				console.error("Import failed:", error)
				alert("Import fehlgeschlagen: Ungültiges JSON-Format.")
			}
		}
		reader.readAsText(file)
	}

	const triggerFileInput = () => {
		fileInputRef.current?.click()
	}

	return (
		<>
			<input type="file" accept="application/json" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} />
			<Button className="border border-transparent bg-white text-slate-800 hover:border-mantis-primary hover:bg-white hover:cursor-pointer" onClick={triggerFileInput}>
				<TfiImport className="mr-2 size-4" />
				{chrome.i18n.getMessage("import_apps", "Import Apps")}
			</Button>
		</>
	)
}
