import React from 'react';
function GoogleApps({ classes }) {
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
    return (React.createElement("div", { className: classes },
        React.createElement("ul", { className: "flex justify-between align-center p-2 rounded-b" },
            React.createElement("li", null,
                React.createElement("a", { href: "https://docs.google.com/", className: "", target: "_self" },
                    React.createElement("img", { src: "../../static/icons/google-apps/google-docs.svg", width: "16", alt: "Google Docs" }))),
            React.createElement("li", null,
                React.createElement("a", { href: "https://docs.google.com/spreadsheets/", className: "", target: "_self" },
                    React.createElement("img", { src: "../../static/icons/google-apps/google-sheets.svg", width: "16", alt: "Google Sheets" }))),
            React.createElement("li", null,
                React.createElement("a", { href: "https://docs.google.com/slides/", className: "", target: "_self" },
                    React.createElement("img", { src: "../../static/icons/google-apps/google-slides.svg", width: "16", alt: "Google Slides" }))),
            React.createElement("li", null,
                React.createElement("a", { href: "https://docs.google.com/forms/u/0/?tgif=d", className: "", target: "_self" },
                    React.createElement("img", { src: "../../static/icons/google-apps/google-forms.svg", width: "16", alt: "Google Slides" }))),
            React.createElement("li", null,
                React.createElement("a", { href: "https://mail.google.com/", className: "", target: "_self" },
                    React.createElement("img", { src: "../../static/icons/google-apps/google-gmail.svg", width: "22", alt: "G-Mail" }))),
            React.createElement("li", null,
                React.createElement("a", { href: "https://drive.google.com/drive/my-drive", className: "", target: "_self" },
                    React.createElement("img", { src: "../../static/icons/google-apps/google-drive.svg", width: "22", alt: "Google Drive" }))),
            React.createElement("li", null,
                React.createElement("a", { href: "https://calendar.google.com/calendar/u/0/r", className: "", target: "_self" },
                    React.createElement("img", { src: "../../static/icons/google-apps/google-calendar.svg", width: "22", alt: "Google Calendar" }))),
            React.createElement("li", null,
                React.createElement("a", { href: "https://www.youtube.com/", className: "", target: "_self" },
                    React.createElement("img", { src: "../../static/icons/google-apps/youtube-color-icon.svg", width: "22", alt: "YouTube" }))),
            React.createElement("li", null,
                React.createElement("a", { href: "https://search.google.com/search-console/about", className: "", target: "_self" },
                    React.createElement("img", { src: "../../static/icons/google-apps/google-search-console.svg", width: "22", alt: "Google Search Console" }))),
            React.createElement("li", null,
                React.createElement("a", { href: "https://domains.google/", className: "", target: "_self" },
                    React.createElement("img", { src: "../../static/icons/google-apps/google-domains.svg", width: "22", alt: "Google Domains" }))))));
}
export default GoogleApps;
