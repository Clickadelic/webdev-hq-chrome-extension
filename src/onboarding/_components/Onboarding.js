import React from "react";
import "../../assets/css/tailwind.css";
import Logo from "../../components/Logo";
const Onboarding = () => {
    return (React.createElement("div", { className: "bg-sky-600 p-4 h-screen w-full" },
        React.createElement("div", { className: "rounded-lg bg-slate-100 pt-12", style: { height: "100%" } },
            React.createElement(Logo, { classes: "text-2xl text-slate-900 hover:text-slate-300", headingClasses: "flex items-center justify-center" }),
            React.createElement("h1", null, "OnBoarding"))));
};
export default Onboarding;
