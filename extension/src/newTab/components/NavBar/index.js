import React from 'react';
import DigitalClock from '../DigitalClock';
function NavBar({ name }) {
    return (React.createElement("nav", { className: "w-full" },
        React.createElement("ul", { className: "navbar-grid" },
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 block text-2xl" })),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 block text-2xl" })),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 block text-2xl" })),
            React.createElement("li", null,
                React.createElement(DigitalClock, { label: "Uhr", classes: "text-white text-2xl p-3" })),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 block text-2xl" })),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 block text-2xl" })),
            React.createElement("li", null,
                React.createElement("div", { className: "block" },
                    React.createElement("a", { href: "auth/google/", className: "text-white" }, name ? name : ''))))));
}
export default NavBar;
