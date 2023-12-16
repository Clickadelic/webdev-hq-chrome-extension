import React from "react";
import { apps } from "../../constants";
function GoogleApps() {
    const currentApps = apps.map(app => {
        return (React.createElement("li", { key: app.id },
            React.createElement("a", { href: app.href, title: app.title, target: app.target, className: "w-16 h-16 flex justify-center items-center bg-slate-200 hover:bg-white hover:glow rounded-lg" },
                React.createElement("img", { src: app.icon, className: "w-8 h-8", alt: app.title }))));
    });
    return (React.createElement("div", { className: "m-auto md:w-[760px] justify-between" },
        React.createElement("ul", { className: "grid grid-cols-10 gap-4 content-center items-center rounded-b" }, currentApps)));
}
export default GoogleApps;
