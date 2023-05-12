import React from 'react';
function GoogleApps({ classes }) {
    const appList = [
        {
            id: 'gmail',
            name: 'g-mail',
            url: 'https://mail.google.com/',
            icon: 'google-svg.svg'
        },
        {
            id: 'docs',
            name: 'docs',
            url: 'https://docs.google.com/document/u/0/',
            icon: 'google-svg.svg'
        }
    ];
    return (React.createElement("div", { className: classes },
        React.createElement("div", { className: "flex justify-between p-2 rounded-b" },
            React.createElement("a", { href: "/", className: "asd", title: "asd" }, "Link"))));
}
export default GoogleApps;
