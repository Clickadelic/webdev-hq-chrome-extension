import React from "react";
import { useState } from "react";
import classNames from "classnames";

const AppPanel = () => {
	const cn = classNames;
	
	const [isOpen, setIsopen] = useState(false);

	const ToggleAppPanel = () => {
		isOpen === true ? setIsopen(false) : setIsopen(true);
	};

	return (
		<div
			className={cn(
				"absolute left-96 right-96 mx-auto bg-white/10 backdrop backdrop-blur flex justify-center hover:bg-slate-200 w-96 p-2 rounded-t-md",
				isOpen == true ? "bottom-32" : " bottom-0"
			)}
			onClick={ToggleAppPanel}
			role="button"
		>
			<div>
				<span className="text-base font-medium text-white">{chrome.i18n.getMessage("apps")}</span>
			</div>
		</div>
	);
};

export default AppPanel;
