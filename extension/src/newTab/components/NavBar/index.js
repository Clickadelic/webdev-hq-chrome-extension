import React from 'react';
import DigitalClock from '../DigitalClock';
function NavBar() {
    return (React.createElement("nav", { className: "w-full" },
        React.createElement("ul", { className: "navbar-grid" },
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 block text-2xl" }, "Link")),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 block text-2xl" }, "Link")),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 block text-2xl" }, "Link")),
            React.createElement("li", null,
                React.createElement(DigitalClock, { label: "Uhr", textClasses: "text-slate-400 text-2xl", backgroundClasses: "bg-white/10 backdrop backdrop-blur rounded p-3" })),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 block text-2xl" }, "Link")),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 block text-2xl" }, "Link")),
            React.createElement("li", null,
                React.createElement("div", { className: "block" },
                    React.createElement("a", { href: "auth/google/" }, "Login with Google"))))));
}
export default NavBar;
