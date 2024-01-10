import React from "react";
const Logo = ({ headingClasses, classes }) => {
    return (React.createElement("h1", { className: headingClasses },
        React.createElement("a", { href: "https://webdev-hq.com/", className: classes },
            React.createElement("img", { src: "../static/icons/extension/icon-32.png", className: "logo inline mr-2 -mt-1", alt: "WebDev HQ Logo" }),
            React.createElement("span", { className: "font-light" },
                React.createElement("span", { className: "web" }, "Web"),
                React.createElement("span", { className: "dev-hq font-medium" }, "Dev HQ")))));
};
export default Logo;
