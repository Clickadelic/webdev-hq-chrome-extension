import { useEffect, useState } from "react"
import { getUserInfo } from "@/lib/utils"
import { cn } from "@/lib/utils"

interface AccountMenuProps {
	classNames?: string
}

const AccountMenu = ({ classNames }: AccountMenuProps) => {
	const [user, setUser] = useState<chrome.identity.UserInfo | null>(null)

	useEffect(() => {
		getUserInfo().then(userInfo => setUser(userInfo))
	}, [])

	return <div className={cn("font-semibold", classNames)}>{user?.email ? user.email : "Incognito"}</div>
}

export default AccountMenu
