import React from "react";
function Tabs() {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url = tabs[0].url;
        // use `url` here inside the callback because it's asynchronous!
        console.log(url);
    });
    return (React.createElement("div", { className: "m-auto md:w-[760px] justify-between rounded bg-white/10 backdrop backdrop-blur p-2" },
        React.createElement("h2", { className: "text-base text-white m-auto p-2" }, chrome.i18n.getMessage("tabs")),
        React.createElement("hr", { className: "mx-2" }),
        React.createElement("ul", { className: "list-tabs p-4" }, "asd")));
}
export default Tabs;
