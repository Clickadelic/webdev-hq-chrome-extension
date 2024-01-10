import React from "react";
import "../../assets/css/tailwind.css";
import Logo from "../../components/Logo";
const Onboarding = () => {
	return (
		<div className="bg-slate-800 p-4 h-screen w-full">
			<div className="rounded-lg bg-slate-100 h-96" style={{ height: "100%" }}>
				<Logo classes="text-red-300" headingClasses="text-center" />
			</div>
		</div>
	);
};

export default Onboarding;
