import React from 'react';
function Logo() {
    return (React.createElement("h1", { className: "text-2xl" },
        React.createElement("img", { src: "../static/icons/extension/icon-32.png", className: "logo inline mr-2 -mt-1", alt: "WebDev HQ Logo" }),
        React.createElement("span", { className: "web" }, "Web"),
        React.createElement("span", { className: "dev-hq font-medium" }, "Dev HQ")));
}
export default Logo;
