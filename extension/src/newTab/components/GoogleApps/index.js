import React from 'react';
function GoogleApps() {
    return (React.createElement("div", { className: "flex justify-between p-2 rounded-b" },
        React.createElement("a", { href: "https://mail.google.com/mail/u/0/", className: "rounded-full backdrop backdrop-blur bg-white/10 hover:bg-slate-300 px-2 py-3", target: "_blank", title: "G-Mail" },
            React.createElement("img", { src: "../../../../static/icons/google-apps/set2/google-gmail-icon.svg", width: "24", height: "24", className: "gmail", alt: "G-Mail" }))));
}
export default GoogleApps;
