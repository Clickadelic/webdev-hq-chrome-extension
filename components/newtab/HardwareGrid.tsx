import React, { useEffect, useState } from "react"

type StorageUnitInfo = {
	name: string
	id: string
	type: string
	capacity: number
}

type StorageUnit = StorageUnitInfo & {
	availableCapacity: number
}

export const HardwareGrid = () => {
	const [cpuInfo, setCpuInfo] = useState<string>("")
	const [memoryCapacity, setMemoryCapacity] = useState<number>(0)
	const [memoryAvailable, setMemoryAvailable] = useState<number>(0)
	const [storageInfo, setStorageInfo] = useState<StorageUnit[]>([])

	// Hilfsfunktion, um StorageInfos zu holen und "availableCapacity" hinzuzufügen
	const fetchStorage = (): Promise<StorageUnit[]> => {
		return new Promise(resolve => {
			chrome.system.storage.getInfo((infos: StorageUnitInfo[]) => {
				const enriched: StorageUnit[] = infos.map(info => ({
					...info,
					// Falls availableCapacity nicht existiert, als fallback capacity setzen
					availableCapacity: (info as any).availableCapacity ?? info.capacity
				}))
				resolve(enriched)
			})
		})
	}

	useEffect(() => {
		const fetchHardwareInfo = async () => {
			try {
				const cpu = await chrome.system.cpu.getInfo()
				const memory = await chrome.system.memory.getInfo()
				const storage = await fetchStorage()

				setCpuInfo(`${cpu.modelName} (${cpu.numOfProcessors} Kerne)`)
				setMemoryCapacity(memory.capacity)
				setMemoryAvailable(memory.availableCapacity)
				setStorageInfo(storage)
			} catch (error) {
				console.error("Fehler beim Auslesen der Hardwaredaten:", error)
			}
		}
		fetchHardwareInfo()
	}, [])

	const formatGB = (bytes: number) => (bytes / 1024 ** 3).toFixed(2)

	const renderBar = (used: number, total: number, color: string) => {
		const usedPercent = total ? Math.min((used / total) * 100, 100) : 0
		return (
			<div className="w-full h-5 bg-gray-300 rounded overflow-hidden">
				<div style={{ width: `${usedPercent}%` }} className={`h-full ${color} rounded transition-all duration-500`} />
			</div>
		)
	}

	return (
		<div className="space-y-6 p-4 bg-white text-sm font-medium">
			<div>
				<span className="block mb-1 text-gray-700">CPU:</span>
				<span>{cpuInfo}</span>
			</div>

			<div>
				<span className="block mb-1 text-gray-700">RAM:</span>
				<span className="block mb-1 text-gray-500">
					{formatGB(memoryCapacity)} GB gesamt, {formatGB(memoryAvailable)} GB frei
				</span>
				{renderBar(memoryCapacity - memoryAvailable, memoryCapacity, "bg-blue-500")}
			</div>

			<div>
				<span className="block mb-1 text-gray-700">Storage:</span>
				<div className="space-y-3">
					{storageInfo.map(unit => {
						const used = unit.capacity - unit.availableCapacity
						return (
							<div key={unit.id}>
								<span className="block text-gray-500 mb-1">{unit.name}</span>
								<span className="block text-xs text-gray-400 mb-1">
									{formatGB(unit.capacity)} GB gesamt, {formatGB(unit.availableCapacity)} GB frei
								</span>
								{renderBar(used, unit.capacity, "bg-green-500")}
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
