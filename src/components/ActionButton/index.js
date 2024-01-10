import React from "react";
function ActionButton() {
    // chrome.readingList.addEntry({
    // 	title: "New to the web platform in September | web.dev",
    // 	url: "https://developer.chrome.com/",
    // 	hasBeenRead: false
    // })
    // const items = await chrome.readingList.query({})
    // for (const item of items) {
    // 	// Do something do display the item
    // 	console.log(item)
    // }
    return (React.createElement("div", { role: "button", className: "absolute right-12 bottom-12 text-white" },
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", className: "h-4 w-4 bi bi-plus-circle", viewBox: "0 0 16 16" },
            React.createElement("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" }),
            React.createElement("path", { d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" }))));
}
export default ActionButton;
