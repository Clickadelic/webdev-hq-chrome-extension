import React from "react";
import { useState } from "react";
function MiniDashboard() {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
        console.log(toggle);
    };
    return (React.createElement("div", { className: "absolute bottom-0 left-96 right-96 mx-auto bg-white/10 backdrop backdrop-blur flex justify-center hover:bg-slate-200 w-96 p-2 rounded-t-md", role: "button", onClick: () => {
            chrome.tabs.create({ url: "dashboard.html" });
        } },
        React.createElement("span", { className: "text-base font-medium text-white" }, "Mini-Dashboard")));
}
export default MiniDashboard;
