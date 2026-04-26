import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { LoginSchema } from "@/schemas"
import { FormError } from "@/components/global/forms/form-error"
import { FormSuccess } from "@/components/global/forms/form-success"
import { cn } from "@/lib/utils"

interface LoginFormProps {
	className?: string
}

/**
 * JWT Payload Struktur (relevant für UI)
 */
type JwtPayload = {
	id: string
	username: string
	email: string
	role?: string
	exp: number
}

/**
 * Minimaler JWT Decoder (ohne Library)
 * Falls Token kein JWT ist (z.B. Sanctum), return null
 */
const decodeJwt = (token: string): JwtPayload | null => {
	try {
		// Sanctum tokens have format "number|random" - not a JWT
		if (!token.includes(".")) {
			return null
		}
		const base64 = token.split(".")[1]
		const json = atob(base64.replace(/-/g, "+").replace(/_/g, "/"))
		return JSON.parse(json)
	} catch {
		return null
	}
}

const LoginForm = ({ className }: LoginFormProps) => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string>()
	const [success, setSuccess] = useState<string>()
	const [user, setUser] = useState<JwtPayload | null>(null)

	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: ""
		}
	})

	/**
	 * Beim Mount: Token aus Storage laden & validieren
	 */
	useEffect(() => {
		chrome.storage.local.get(["authToken"], result => {
			if (!result.authToken) return

			const token = result.authToken as string
			const payload = decodeJwt(token)

			if (payload) {
				// Standard JWT - check expiration
				if (payload.exp * 1000 < Date.now()) {
					chrome.storage.local.remove("authToken")
					return
				}
				setUser(payload)
			} else {
				// Sanctum token - assume valid for 7 days
				setUser({
					id: "0",
					username: "User",
					email: "",
					exp: Date.now() + 60 * 60 * 24 * 7 * 1000
				})
			}
		})
	}, [])

	/**
	 * Login
	 */
	const handleSubmit = async (values: z.infer<typeof LoginSchema>) => {
		setError(undefined)
		setSuccess(undefined)
		setIsLoading(true)

		try {
			const response = await fetch(`${import.meta.env.WXT_HOMEPAGE_URL}/api/login`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values)
			})

			const data = await response.json()
			if (!response.ok) {
				throw new Error(data.message || chrome.i18n.getMessage("login_failed", "Login failed"))
			}

			// Handle Sanctum token (format: "number|random") or JWT
			const token = data.token
			const payload = decodeJwt(token)

			await chrome.storage.local.set({ authToken: token })

			if (payload) {
				// Standard JWT
				setUser(payload)
			} else {
				// Sanctum token - use user data from response
				setUser({
					id: String(data.user?.id || "0"),
					username: data.user?.name || "User",
					email: values.email,
					exp: Date.now() + 60 * 60 * 24 * 7 * 1000 // 7 days default
				})
			}

			setSuccess(chrome.i18n.getMessage("login_success", "Login successful"))
			form.reset()
		} catch (err: any) {
			setError(err.message || chrome.i18n.getMessage("unknown_error", "Unknown error"))
		} finally {
			setIsLoading(false)
		}
	}

	/**
	 * Logout
	 */
	const handleLogout = async () => {
		await chrome.storage.local.remove("authToken")
		setUser(null)
	}

	if (user) {
		return (
			<div className={cn("bg-white dark:bg-slate-800 rounded p-2", className)}>
				<ul className="text-sm">
					<li>
						<strong>{user.username}</strong>
					</li>
					<li>{user.email}</li>
					<li>
						{chrome.i18n.getMessage("role", "Role")}: {user.role}
					</li>
					<li>
						<Button variant="link" className="asd" onClick={handleLogout}>
							{chrome.i18n.getMessage("logout", "Logout")}
						</Button>
					</li>
				</ul>
			</div>
		)
	}

	return (
		<div className="bg-white/30 dark:bg-slate-800/30 rounded p-1 backdrop-blur">
			<div className={cn("bg-white dark:bg-slate-800 rounded p-3", className)}>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-2">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="hidden">{chrome.i18n.getMessage("email", "E-Mail")}</FormLabel>
									<FormControl>
										<Input type="email" placeholder={chrome.i18n.getMessage("email", "E-Mail")} disabled={isLoading} autoComplete="email" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="hidden">{chrome.i18n.getMessage("password", "Password")}</FormLabel>
									<FormControl>
										<Input type="password" placeholder={chrome.i18n.getMessage("password", "Password")} disabled={isLoading} autoComplete="password" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type="submit" variant="primary" disabled={isLoading} className="bg-mantis-primary hover:bg-mantis-primary-hover text-white rounded">
							{isLoading ? chrome.i18n.getMessage("loading", "Loading...") : chrome.i18n.getMessage("login", "Login")}
						</Button>

						{error && <FormError message={error} />}
						{success && <FormSuccess message={success} />}
					</form>
				</Form>
			</div>
		</div>
	)
}

export default LoginForm
