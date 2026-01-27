import { useEffect, useState } from "react"
import { getUserInfo } from "@/lib/utils"
import { cn } from "@/lib/utils"
import LoginForm from "../global/forms/login-form"

interface AccountMenuProps {
	className?: string
}

const AccountMenu = ({ className }: AccountMenuProps) => {
	const [user, setUser] = useState<chrome.identity.AccountInfo | null>(null)

	useEffect(() => {
		getUserInfo().then(userInfo => setUser(userInfo))
	}, [])

	return (
		<div className="asd">
			{/* <div className={cn("font-semibold", className)}>{user?.email ? user.email : "Incognito"}</div> */}
			<LoginForm className="w-84" />
		</div>
	)
}

export default AccountMenu
