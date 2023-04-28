import React from 'react';
function GoogleApps() {
    return (React.createElement("div", { className: "flex justify-between p-2 rounded-b" },
        React.createElement("a", { href: "/", className: "bg-white rounded-full p-2", target: "_blank" },
            React.createElement("img", { src: "../../../../static/icons/google-apps/google-gmail-icon.svg", className: "gmail", alt: "G-Mail" })),
        React.createElement("a", { href: "/", className: "bg-white rounded-full p-2", target: "_blank" }, "Sheets"),
        React.createElement("a", { href: "/", className: "bg-white rounded-full p-2", target: "_blank" }, "Presentations"),
        React.createElement("a", { href: "/", className: "bg-white rounded-full p-2", target: "_blank" }, "Drive"),
        React.createElement("a", { href: "/", className: "bg-white rounded-full p-2", target: "_blank" }, "Mail"),
        React.createElement("a", { href: "/", className: "bg-white rounded-full p-2", target: "_blank" }, "YouTube")));
}
export default GoogleApps;
