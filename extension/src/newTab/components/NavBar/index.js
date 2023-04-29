import React from 'react';
import Clock from 'react-digital-clock';
function NavBar() {
    return (React.createElement("nav", { className: "w-full mb-16 bg-slate-500" },
        React.createElement("ul", { className: "grid grid-cols-7 gap-[1px] justify-center justify-items-stretch" },
            React.createElement("li", { className: "bg-white/10" },
                React.createElement("a", { href: "/", className: "text-2xl text-slate-800 p-1" }, "Widget")),
            React.createElement("li", { className: "bg-white/10" },
                React.createElement("a", { href: "/", className: "text-2xl text-slate-800 p-1" }, "Widget")),
            React.createElement("li", { className: "bg-white/10" },
                React.createElement("a", { href: "/", className: "text-2xl text-slate-800 p-1" }, "Widget")),
            React.createElement("li", { className: "bg-white/10" },
                React.createElement("span", { className: "text-2xl text-slate-800 p-1" },
                    React.createElement(Clock, null))),
            React.createElement("li", { className: "bg-white/10" },
                React.createElement("a", { href: "/", className: "text-2xl text-slate-800 p-1" }, "Widget")),
            React.createElement("li", { className: "bg-white/10" },
                React.createElement("a", { href: "/", className: "text-2xl text-slate-800 p-1" }, "Widget")),
            React.createElement("li", { className: "bg-white/10" },
                React.createElement("a", { href: "/", className: "text-2xl text-slate-800 p-1" }, "Widget")))));
}
export default NavBar;
