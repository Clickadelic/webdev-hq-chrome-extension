import React from 'react';
function Logo() {
    return (React.createElement("h1", null,
        React.createElement("a", { href: "https://webdev-hq.com/", className: "text-2xl text-white hover:text-slate-300" },
            React.createElement("img", { src: "../static/icons/extension/icon-32.png", className: "logo inline mr-2 -mt-1", alt: "WebDev HQ Logo" }),
            React.createElement("span", { className: "web text-medium" }, "Web"),
            React.createElement("span", { className: "dev-hq font" }, "Dev HQ"))));
}
export default Logo;
