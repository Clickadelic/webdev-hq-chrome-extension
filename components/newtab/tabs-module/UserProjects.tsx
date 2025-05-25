import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

import { FormError } from "@/components/global/forms/form-error"
import { FormSuccess } from "@/components/global/forms/form-success"

import { AiOutlineEdit } from "react-icons/ai"
import { BsTrash } from "react-icons/bs"
import { Plus } from "lucide-react"
import { BsApp } from "react-icons/bs"
import { HiOutlineDotsVertical } from "react-icons/hi"
import { TbEdit } from "react-icons/tb"

import { useProjectStore, ProjectType } from "@/stores/use-project-store"
import { ProjectSchema } from "@/schemas"

const UserProjects = () => {
	const { projects, addProject, getProject, editProject, removeProject } = useProjectStore()
	const project = getProject("1")

	const onEdit = (id: string) => {
		//
	}

	const onAddSubmit = (values: z.infer<typeof ProjectSchema>) => {
		//
	}

	const onDelete = (id: string) => {
		//
	}

	return (
		<div className="bg-white/30 p-1 rounded backdrop-blur">
			<ul className="grid grid-cols-3 gap-1">
				<li>
					<div className="bg-white rounded p-2 h-24 border border-transparent flex flex-col justify-center items-center hover:border-mantis-primary hover:cursor-pointer">
						<Plus className="size-6" />
					</div>
				</li>
			</ul>
		</div>
	)
}

export default UserProjects
