import React from 'react';
function GoogleApps() {
    const apps = [
        {
            id: 'gmail',
            title: 'G-Mail',
            url: 'https://mail.google.com/',
            icon: 'google-svg.svg'
        },
        {
            id: 'docs',
            title: 'Docs',
            url: 'https://docs.google.com/document/u/0/',
            icon: 'google-docs.svg'
        }
    ];
    return (React.createElement("div", { className: "m-auto md:w-[760px] justify-between rounded bg-white/10 backdrop backdrop-blur p-2" },
        React.createElement("ul", { className: "grid grid-cols-12 gap-4 content-center items-center p-2 rounded-b" },
            React.createElement("li", null,
                React.createElement("a", { href: "https://docs.google.com/", className: "block p-2 w-[32px] h-[32px] bg-white rounded-full", target: "_self" },
                    React.createElement("img", { src: "../../static/icons/google-apps/google-docs.svg", width: "16", alt: "Google Docs" }))),
            React.createElement("li", null,
                React.createElement("a", { href: "https://docs.google.com/spreadsheets/", className: "block p-2 w-[32px] h-[32px] bg-white rounded-full", target: "_self" },
                    React.createElement("img", { src: "../../static/icons/google-apps/google-sheets.svg", width: "16", alt: "Google Sheets" }))),
            React.createElement("li", null,
                React.createElement("a", { href: "https://docs.google.com/slides/", className: "block p-2 w-[32px] h-[32px] bg-white rounded-full", target: "_self" },
                    React.createElement("img", { src: "../../static/icons/google-apps/google-slides.svg", width: "16", alt: "Google Slides" }))),
            React.createElement("li", null,
                React.createElement("a", { href: "https://docs.google.com/forms/u/0/?tgif=d", className: "block p-2 w-[32px] h-[32px] bg-white rounded-full", target: "_self" },
                    React.createElement("img", { src: "../../static/icons/google-apps/google-forms.svg", width: "16", alt: "Google Slides" }))),
            React.createElement("li", null,
                React.createElement("a", { href: "https://mail.google.com/", className: "block p-2 w-[32px] h-[32px] bg-white rounded-full", target: "_self" },
                    React.createElement("img", { src: "../../static/icons/google-apps/google-gmail.svg", width: "22", alt: "G-Mail" }))),
            React.createElement("li", null,
                React.createElement("a", { href: "https://drive.google.com/drive/my-drive", className: "block p-2 w-[32px] h-[32px] bg-white rounded-full", target: "_self" },
                    React.createElement("img", { src: "../../static/icons/google-apps/google-drive.svg", width: "22", alt: "Google Drive" }))),
            React.createElement("li", null,
                React.createElement("a", { href: "https://calendar.google.com/calendar/u/0/r", className: "block p-2 w-[32px] h-[32px] bg-white rounded-full", target: "_self" },
                    React.createElement("img", { src: "../../static/icons/google-apps/google-calendar.svg", width: "22", alt: "Google Calendar" }))),
            React.createElement("li", null,
                React.createElement("a", { href: "https://www.youtube.com/", className: "block p-2 w-[32px] h-[32px] bg-white rounded-full", target: "_self" },
                    React.createElement("img", { src: "../../static/icons/google-apps/youtube-color-icon.svg", width: "22", alt: "YouTube" }))),
            React.createElement("li", null,
                React.createElement("a", { href: "https://search.google.com/search-console/about", className: "block p-2 w-[32px] h-[32px] bg-white rounded-full", target: "_self" },
                    React.createElement("img", { src: "../../static/icons/google-apps/google-search-console.svg", width: "22", alt: "Google Search Console" }))),
            React.createElement("li", null,
                React.createElement("a", { href: "https://domains.google/", className: "block p-2 w-[32px] h-[32px] bg-white rounded-full", target: "_self" },
                    React.createElement("img", { src: "../../static/icons/google-apps/google-domains.svg", width: "22", alt: "Google Domains" }))),
            React.createElement("li", null,
                React.createElement("a", { href: "https://toolbox.googleapps.com/apps/checkmx/", className: "block p-2 w-[32px] h-[32px] bg-white rounded-full", target: "_self" },
                    React.createElement("img", { src: "../../static/icons/google-apps/g-logo.svg", width: "22", alt: "Google MX Check" }))))));
}
export default GoogleApps;
