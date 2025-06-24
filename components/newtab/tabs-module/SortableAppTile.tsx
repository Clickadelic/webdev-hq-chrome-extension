import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { HiOutlineDotsVertical } from "react-icons/hi"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export interface SortableAppTileProps {
	app: {
		id: string
		title: string
		url: string
		icon: string
	}
	onEdit: (id: string) => void
	onDelete: (id: string) => void
	wasDragged: boolean
	setWasDragged: (val: boolean) => void
}

export const SortableAppTile = ({ app, onEdit, onDelete, wasDragged, setWasDragged }: SortableAppTileProps) => {
	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: app.id })

	const style = {
		transform: CSS.Transform.toString(transform),
		transition: transition
	}

	return (
		<li ref={setNodeRef} style={style} {...attributes} {...listeners}>
			<a
				href={wasDragged ? undefined : app.url}
				onClick={e => {
					if (wasDragged) {
						e.preventDefault()
						setWasDragged(false)
					}
				}}
				target="_self"
				rel="noopener noreferrer"
				className={cn(
					"group flex flex-col justify-between items-center p-2 gap-2 text-xs bg-white dark:bg-slate-800 border border-transparent rounded hover:border-mantis-primary hover:text-mantis-primary transition-colors duration-150 ease-in-out cursor-pointer size-[70px]",
					isDragging && "opacity-50"
				)}
			>
				<img src={app.icon} alt={app.title} className="size-5" />
				<span className="text-center leading-tight line-clamp-2">{app.title}</span>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<div className="absolute top-1.5 right-1.5 text-slate-400 hover:text-mantis-primary">
							<HiOutlineDotsVertical />
						</div>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem onClick={() => onEdit(app.id)}>{chrome.i18n.getMessage("edit")}</DropdownMenuItem>
						<DropdownMenuItem onClick={() => onDelete(app.id)}>{chrome.i18n.getMessage("delete")}</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</a>
		</li>
	)
}
