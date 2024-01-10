import React from "react";
import "../../assets/css/tailwind.css";
import Logo from "../../components/Logo";
const Onboarding = () => {
    return (React.createElement("div", { className: "bg-slate-800 p-4 h-screen w-full" },
        React.createElement("div", { className: "rounded-lg bg-slate-100 h-96", style: { height: "100%" } },
            React.createElement(Logo, { classes: "text-red-300", headingClasses: "text-center" }))));
};
export default Onboarding;
