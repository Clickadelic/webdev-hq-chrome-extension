import React from 'react';
function GoogleApps() {
    const path = "../../static/icons/google-apps/";
    const apps = [
        {
            id: 'gmail',
            title: 'G-Mail',
            href: 'https://mail.google.com/',
            icon: '../../static/icons/google-icons/google-svg.svg'
        },
        {
            id: 'docs',
            title: 'Docs',
            href: 'https://docs.google.com/document/u/0/',
            icon: 'google-docs.svg'
        }
    ];
    return (React.createElement("div", { className: "m-auto md:w-[760px] justify-between rounded bg-white/10 backdrop backdrop-blur p-2" },
        React.createElement("ul", { className: "grid grid-cols-12 gap-4 content-center items-center p-2 rounded-b" }, apps.map((app, index) => {
            return React.createElement("li", { key: index, className: "bg-slate-100 rounded" },
                React.createElement("a", { href: app.href }, app.icon));
        }))));
}
export default GoogleApps;
