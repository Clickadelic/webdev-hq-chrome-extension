import React from 'react';
function GoogleApps() {
    return (React.createElement("div", { className: "flex justify-between p-2 rounded-b" },
        React.createElement("a", { href: "https://mail.google.com/mail/u/0/", className: "rounded-full backdrop backdrop-blur bg-white/10 hover:bg-slate-300 px-2 py-3", target: "_blank", title: "G-Mail" },
            React.createElement("img", { src: "../../../../static/icons/google-apps/set2/google-gmail-icon.svg", width: "24", height: "24", className: "gmail", alt: "G-Mail" })),
        React.createElement("a", { href: "https://www.google.com/business/", className: "rounded-full backdrop backdrop-blur bg-white/10 hover:bg-slate-300 px-2 py-3", target: "_blank", title: "My Busyness" },
            React.createElement("img", { src: "../../../../static/icons/google-apps/set2/google-my-business-icon.svg", width: "24", height: "24", className: "my-business", alt: "My Business" })),
        React.createElement("a", { href: "https://drive.google.com/", className: "rounded-full backdrop backdrop-blur bg-white/10 hover:bg-slate-300 px-2 py-3", target: "_blank", title: "Drive" },
            React.createElement("img", { src: "../../../../static/icons/google-apps/set2/google-drive-color-icon.svg", width: "24", height: "24", className: "drive", alt: "Drive" })),
        React.createElement("a", { href: "https://calendar.google.com/", className: "rounded-full backdrop backdrop-blur bg-white/10 hover:bg-slate-300 px-2 py-3", target: "_blank", title: "Drive" },
            React.createElement("img", { src: "../../../../static/icons/google-apps/set2/google-calendar-icon.svg", width: "24", height: "24", className: "calendar", alt: "Calendar" })),
        React.createElement("a", { href: "https://youtube.com/", className: "rounded-full backdrop backdrop-blur bg-white/10 hover:bg-slate-300 px-2 py-3", target: "_blank", title: "Drive" },
            React.createElement("img", { src: "../../../../static/icons/google-apps/set2/youtube-color-icon.svg", width: "24", height: "24", className: "calendar", alt: "Calendar" }))));
}
export default GoogleApps;
