import { useState } from "react"
import * as z from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

import { Plus } from "lucide-react"
import { BsApp, BsLink } from "react-icons/bs"
import { TbEdit } from "react-icons/tb"
import { HyperlinkSchema } from "@/schemas"
import { FormError } from "@/components/global/forms/form-error"
import { FormSuccess } from "@/components/global/forms/form-success"

import { toast } from "sonner"
import { BsTrash } from "react-icons/bs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { TooltipArrow } from "@radix-ui/react-tooltip"
import { TbSalt } from "react-icons/tb"
import { FiPlus } from "react-icons/fi"
import { BsLink45Deg } from "react-icons/bs"

import { cn } from "@/lib/utils"

/**
 * A circular menu that appears on the bottom right of the screen when the user has the user role.
 * It contains buttons to create a new recipe and to view all ingredients.
 */
export function CircularMenu() {
	const [showCircularMenu, setShowCircularMenu] = useState<boolean>(false)
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const [isEditing, setIsEditing] = useState<boolean>(false)
	const [editingAppId, setEditingAppId] = useState<string | null>(null)
	const [isDeleting, setIsDeleting] = useState<boolean>(false)

	const [error, setError] = useState<string | undefined>(undefined)
	const [success, setSuccess] = useState<string | undefined>(undefined)

	const [isLoading, setIsLoading] = useState<boolean>(false)

	const form = useForm<z.infer<typeof HyperlinkSchema>>({
		resolver: zodResolver(HyperlinkSchema),
		defaultValues: { title: "", url: "" }
	})

	const { handleSubmit } = form

	const openCircularMenu = () => {
		setShowCircularMenu(true)
	}

	const closeCircularMenu = () => {
		setShowCircularMenu(false)
	}

	const onEditSubmit = (values: z.infer<typeof HyperlinkSchema>) => {
		alert("Yo")
	}

	const onAddSubmit = (values: z.infer<typeof HyperlinkSchema>) => {
		alert("Yo")
	}
	return (
		<div className="fixed right-4 bottom-4 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 max-w-12 z-20">
			<div className={cn("absolute -top-24 left-1 flex flex-col items-center space-y-2 transition-all", showCircularMenu ? "opacity-100" : "opacity-0 pointer-events-none")}>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild data-state="instant-open">
							<Dialog
								open={isModalOpen}
								onOpenChange={open => {
									setIsModalOpen(open)
									if (!open) {
										setIsEditing(false)
										setEditingAppId(null)
										form.reset()
									}
								}}
							>
								<DialogTrigger onClick={() => setIsModalOpen(true)} className="rounded-full bg-primary hover:bg-primary/90 text-white p-2 hover:cursor-pointer shadow-lg">
									<BsLink45Deg />
								</DialogTrigger>
								<DialogContent className="rounded">
									<DialogHeader>
										<DialogTitle className="flex items-start gap-2">
											<BsLink45Deg />
											{isEditing ? chrome.i18n.getMessage("edit_hyperlink_title", "Edit Hyperlink") : chrome.i18n.getMessage("add_hyperlink_title", "Add Hyperlink")}
										</DialogTitle>
										<DialogDescription>
											{isEditing
												? chrome.i18n.getMessage("edit_hyperlink_description")
												: chrome.i18n.getMessage("add_hyperlink_description", "Add a new hyperlink to your list.")}
										</DialogDescription>
									</DialogHeader>
									<div className="flex">
										<Form {...form}>
											<form onSubmit={form.handleSubmit(isEditing ? onEditSubmit : onAddSubmit)} className="w-full space-y-6">
												<div className="space-y-4">
													<FormField
														control={form.control}
														name="title"
														render={({ field }) => (
															<FormItem>
																<FormLabel>{chrome.i18n.getMessage("hyperlink_title", "Title")}</FormLabel>
																<FormControl>
																	<Input type="text" {...field} placeholder={chrome.i18n.getMessage("hyperlink_title_placeholder", "Title")} />
																</FormControl>
																<FormMessage />
															</FormItem>
														)}
													/>
													<FormField
														control={form.control}
														name="url"
														render={({ field }) => (
															<FormItem>
																<FormLabel>{chrome.i18n.getMessage("hyperlink_url", "Url")}:</FormLabel>
																<FormControl>
																	<Input type="url" {...field} placeholder={chrome.i18n.getMessage("hyperlink_url_placeholder", "https://...")} />
																</FormControl>
																<FormMessage />
															</FormItem>
														)}
													/>
												</div>
												<FormError message={error} />
												<FormSuccess message={success} />
												<Button variant="primary" type="submit" className="w-full rounded" disabled={isLoading}>
													{isEditing ? <TbEdit /> : <Plus />}
													{isEditing ? chrome.i18n.getMessage("edit_hyperlink", "Edit hyperlink") : chrome.i18n.getMessage("add_app", "Add hyperlink")}
												</Button>
											</form>
										</Form>
									</div>
								</DialogContent>
							</Dialog>
						</TooltipTrigger>
						<TooltipContent side="left" className="text-white">
							<p>{chrome.i18n.getMessage("create_new_hyperlink", "Create new hyperlink")}</p>
							<TooltipArrow className="fill-primary dark:fill-primary" />
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>

			{/* Haupt-Button */}
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild data-state="instant-open">
						<button
							aria-label={chrome.i18n.getMessage("create_new_content", "Create new content")}
							onClick={() => setShowCircularMenu(prev => !prev)}
							className="bg-primary hover:bg-primary-hover hover:cursor-pointer text-white p-4 text-lg rounded-full transition shadow-lg"
						>
							<FiPlus className={cn("transition-transform", showCircularMenu ? "rotate-45" : "")} />
						</button>
					</TooltipTrigger>
					<TooltipContent side="left" className="bg-primary text-white">
						<p>{chrome.i18n.getMessage("create_new_content", "Create new content")}</p>
						<TooltipArrow className="fill-primary" />
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	)
}

export default CircularMenu
