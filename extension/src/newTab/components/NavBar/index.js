import React from 'react';
import DigitalClock from '../DigitalClock';
function NavBar() {
    return (React.createElement("nav", { className: "flex justify-between mb-16 p-4" },
        React.createElement("ul", { className: "flex" },
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 text-white text-base hover:text-slate-300" }, "Link")),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 text-white text-base hover:text-slate-300" }, "Link")),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 text-white text-base hover:text-slate-300" }, "Link"))),
        React.createElement(DigitalClock, null),
        React.createElement("ul", { className: "flex" },
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 text-white text-base hover:text-slate-300" }, "Link")),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 text-white text-base hover:text-slate-300" }, "Link")),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 text-white text-base hover:text-slate-300" }, "Link")),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 text-white text-base hover:text-slate-300" }, "Link")),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 text-white text-base hover:text-slate-300" }, "Login")))));
}
export default NavBar;
