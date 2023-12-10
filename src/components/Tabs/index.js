import React from 'react';
function Tabs() {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url = tabs[0].url;
        // use `url` here inside the callback because it's asynchronous!
        console.log("Tabs are:", Tabs, "Urls are:", url);
    });
    return (React.createElement("div", { className: "m-auto md:w-[760px] justify-between rounded bg-white/10 backdrop backdrop-blur p-2" },
        React.createElement("ul", { className: "list-tabs p-4" },
            React.createElement("li", null,
                React.createElement("input", { type: "checkbox", name: "tabname" }),
                React.createElement("a", { href: "/" }, "Tabs")))));
}
export default Tabs;
