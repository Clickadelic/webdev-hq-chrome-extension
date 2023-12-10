import React from "react";
function GoogleApps() {
    const path = "../../static/icons/google-apps/";
    const apps = [
        {
            id: "gmail",
            title: "G-Mail",
            href: "https://mail.google.com/"
        },
        {
            id: "docs",
            title: "Docs",
            href: "https://docs.google.com/document/u/0/"
        }
    ];
    const currentApps = apps.map(app => {
        return (React.createElement("li", { key: app.id, className: "bg-slate-100 rounded p-3 w-[32px]" },
            React.createElement("a", { href: app.href }, app.title)));
    });
    return (React.createElement("div", { className: "m-auto md:w-[760px] justify-between rounded bg-white/10 backdrop backdrop-blur p-2" },
        React.createElement("ul", { className: "grid grid-cols-12 gap-4 content-center items-center p-2 rounded-b" }, currentApps)));
}
export default GoogleApps;
