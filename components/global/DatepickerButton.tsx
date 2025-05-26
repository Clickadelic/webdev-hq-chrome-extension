import React, { useState, useRef, useEffect } from "react"
import { format } from "date-fns"
import { enUS, de, fr, es } from "date-fns/locale"
import { Calendar as CalendarIcon } from "lucide-react"
import { Locale } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useTodoStore } from "@/stores/use-todo-store"

const localeMap: Record<string, Locale> = {
	en: enUS,
	de: de,
	fr: fr,
	es: es
}

function getLocale(): Locale {
	const lang = chrome?.i18n?.getUILanguage?.() || navigator.language || "en"
	const shortLang = lang.split("-")[0]
	return localeMap[shortLang] || enUS
}

interface DatePickerButtonProps {
	id?: string
	selectedDate?: Date | undefined
}

export function DatePickerButton({ id, selectedDate }: DatePickerButtonProps) {
	const [date, setDate] = useState<Date | undefined>()
	const locale = getLocale()
	const { setTodoExpiryDate } = useTodoStore()
	const calendarRef = useRef<HTMLDivElement>(null)
	const [open, setOpen] = useState(false)

	const onDateSelect = (selectedDate: Date) => {
		setDate(selectedDate)
		setTodoExpiryDate(id, selectedDate)
		setOpen(false) // Popover schließen beim Datumsauswahl
	}

	// Fokus auf Kalender legen, wenn Popover geöffnet wird
	useEffect(() => {
		if (open && calendarRef.current) {
			calendarRef.current.focus()
		}
	}, [open])

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="ghost"
					aria-haspopup="dialog"
					aria-expanded={open}
					className={cn(
						"w-[150px] justify-start text-left font-normal border text-slate-800 border-slate-200 dark:border-slate-700 hover:border-mantis-primary hover:text-mantis-primary",
						!date && "text-muted-foreground"
					)}
				>
					<CalendarIcon className="mr-1.5 h-4 w-4" aria-hidden="true" />
					{date ? format(date, "PPP", { locale }) : <span>{chrome.i18n.getMessage("select_date", "Select date")}</span>}
				</Button>
			</PopoverTrigger>

			<PopoverContent
				className="border-transparent w-auto bg-white/30 dark:bg-slate-800/30 p-1"
				role="dialog"
				aria-modal="true"
				aria-label={chrome.i18n.getMessage("select_date", "Select date")}
			>
				<div className="bg-white rounded dark:bg-slate-800 p-2 outline-none" tabIndex={-1} ref={calendarRef}>
					<Calendar
						mode="single"
						selected={date}
						onSelect={() => {
							onDateSelect(date || new Date())
						}}
						locale={locale}
						// Keyboard-Navigation sollte der Calendar selbst unterstützen
					/>
				</div>
			</PopoverContent>
		</Popover>
	)
}
