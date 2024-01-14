import React from "react";
import "../../assets/css/tailwind.css";
import Logo from "../../components/Logo";
const Onboarding = () => {
	return (
		<div className="bg-sky-600 p-4 h-screen w-full">
			<div className="rounded-lg bg-slate-100 pt-12" style={{ height: "100%" }}>
				<Logo classes="text-2xl text-slate-900 hover:text-slate-300" headingClasses="flex items-center justify-center" />
				<h1>OnBoarding</h1>
			</div>
		</div>
	);
};

export default Onboarding;
