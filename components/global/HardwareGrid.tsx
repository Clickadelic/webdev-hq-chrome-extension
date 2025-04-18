import { useEffect, useState } from "react"

interface InfoProps {
	cpu: chrome.system.cpu.CpuInfo
	memory: chrome.system.memory.MemoryInfo
	storage: chrome.system.storage.StorageUnitInfo[]
}

const HardwareGrid = () => {
	const [info, setInfo] = useState<InfoProps | null>(null)

	useEffect(() => {
		chrome.runtime.sendMessage({ type: "getHardwareGrid" }, res => {
			setInfo(res)
		})
	}, [])

	if (!info) return <div className="p-4 text-sm">Lade Daten...</div>

	const { cpu, memory, storage } = info

	return (
		<div className="grid grid-cols-2 gap-4 p-4 w-[300px] text-sm bg-white/30 backdrop-blur">
			<div className="rounded bg-white p-2 shadow-md">
				<h2 className="font-semibold mb-1">CPU</h2>
				<p>{cpu.modelName}</p>
				<p>{cpu.numOfProcessors} Kerne</p>
			</div>
			<div className="rounded bg-white p-4 shadow-md">
				<h2 className="font-semibold mb-1">RAM</h2>
				<p>{(memory.capacity / 1024 ** 3).toFixed(2)} GB</p>
				<p>{(memory.availableCapacity / 1024 ** 3).toFixed(2)} GB frei</p>
			</div>
			{storage.map((s, i) => (
				<div key={i} className="rounded-2xl bg-white p-4 shadow-md col-span-2">
					<h2 className="font-semibold mb-1">Speicher {i + 1}</h2>
					<p>Typ: {s.type}</p>
					<p>Kapazität: {(s.capacity / 1024 ** 3).toFixed(2)} GB</p>
				</div>
			))}
		</div>
	)
}

export default HardwareGrid
