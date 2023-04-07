import React from 'react';
function History() {
    const history = () => {
        chrome.history.search({ text: '', maxResults: 20 }, (data) => {
            data.forEach(function (page) {
                // console.log({page})
                return React.createElement("li", null,
                    React.createElement("a", { href: page.url }, page.title));
            });
        });
    };
    return (React.createElement("div", { className: "de" },
        React.createElement("ul", null)));
}
export default History;
