import React from "react";
import "../../assets/css/tailwind.css";
import Logo from "../../components/Logo";

const Onboarding = () => {
	return (
		<div className="bg-emerald-600 p-4 h-screen w-full">
			<div className="rounded-lg bg-slate-200 pt-12 h-full">
				<Logo classes="text-2xl text-slate-900 hover:text-slate-300" headingClasses="flex items-center justify-center" />
				<h1 className="text-2xl text-center">Welcome to WebDev HQ</h1>
			</div>
		</div>
	);
};

export default Onboarding;
