import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { LoginSchema } from "@/schemas"

import { FormError } from "@/components/global/forms/form-error"
import { FormSuccess } from "@/components/global/forms/form-success"
import { Switch } from "@/components/ui/switch"

import { useState } from "react"

import { cn } from "@/lib/utils"

const LoginForm = () => {

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [isEditing, setIsEditing] = useState<boolean>(false)
	const [error, setError] = useState<string | undefined>("")
	const [success, setSuccess] = useState<string | undefined>("")

	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: { email: "", password: "" }
	})

    const handleSubmit = (values: z.infer<typeof LoginSchema>) => {
        console.log(values)
    }

	return (
        <div className="bg-white/30 dark:bg-slate-800/30 rounded p-1 backdrop-blur flex flex-col gap-2">
            <div className="bg-white dark:bg-slate-800 rounded p-1 backdrop-blur">
                <Form {...form}>
                    <form onSubmit={handleSubmit} className="flex flex-row w-full gap-1">
                        <div className="flex flex-row w-full gap-1">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem className="w-full flex flex-col">
                                        <FormLabel className="hidden">{chrome.i18n.getMessage("email", "E-Mail")}:</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                {...field}
                                                className="border-0 shadow-none"
                                                disabled={isLoading}
                                                placeholder={chrome.i18n.getMessage("new_todo_placeholder", "New todo")}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem className="w-full flex flex-col">
                                        <FormLabel className="hidden">{chrome.i18n.getMessage("message", "message")}:</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                className="border-0 shadow-none"
                                                disabled={isLoading}
                                                placeholder={chrome.i18n.getMessage("new_todo_placeholder", "New todo")}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem> 
                                )}
                            />

                            <Button
                                type="submit"
                                className="bg-mantis-primary hover:bg-mantis-primary-hover text-white dark:bg-mantis-primary dark:hover:bg-mantis-primary-hover dark:text-slate-200 rounded py-2 px-3 hover:cursor-pointer"
                                disabled={isLoading}
                            >
                                Login
                            </Button>
                        </div>
                        {loginFormError && <FormError message={loginFormError} />}
                        {loginFormSuccess && <FormSuccess message={loginFormSuccess} />}
                    </form>
                </Form>
            </div>
        </div>
	)
}

export default LoginForm
