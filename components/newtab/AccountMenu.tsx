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

	return (
		<div className={cn("font-semibold", classNames)}>
			<div className="bg-white/30 dark:bg-slate-800/30 p-1 rounded backdrop-blur mb-3">
				<div className="bg-white dark:bg-slate-800 rounded p-2">{user?.email ? user.email : "Incognito"}</div>
			</div>
		</div>
	)
}

export default AccountMenu
