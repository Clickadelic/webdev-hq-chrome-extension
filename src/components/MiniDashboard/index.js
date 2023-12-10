import React from "react";
import { useState } from "react";
function MiniDashboard() {
    const [open, setOPen] = useState(false);
    const toggle = () => {
        setOPen(!open);
    };
    return (React.createElement("div", { className: "absolute bottom-2 left-0 right-0 flex justify-center" },
        React.createElement("button", { onClick: toggle }, "Actions")));
}
export default MiniDashboard;
