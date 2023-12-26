import React, { useEffect } from "react";
import Logo from "../components/Logo";
import FormRegister from "../components/FormRegister";

const Popup = () => {
	return (
		<div className="w-[480px] h-[460px] m-auto p-3">
			<Logo headingClasses="md:block w-56 m-auto pt-6" classes="text-2xl text-slate-900 hover:text-slate-300" />
			<FormRegister />
		</div>
	);
};

export default Popup;
