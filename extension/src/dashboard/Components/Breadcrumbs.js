import React from 'react';
function Breadcrumbs() {
    return (React.createElement("div", { className: "breadcrumb-navigation mb-6 p-4 rounded bg-white/40 backdrop backdrop-blur-0" },
        React.createElement("ul", { className: "flex font-medium text-1xl" },
            React.createElement("li", null,
                React.createElement("a", { href: "/" }, "WebDev HQ")),
            React.createElement("li", null,
                React.createElement("a", { href: "#" }, "Todos")))));
}
export default Breadcrumbs;
