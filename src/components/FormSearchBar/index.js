import React from "react";
import { useState } from "react";
function FormSearchBar() {
    const [engine, setEngine] = useState("https://www.google.com/search");
    function handleChange(e) {
        setEngine(e.target.value);
        chrome.storage.sync.set(["engine", engine]);
    }
    return (React.createElement("form", { method: "GET", className: "flex justify-between", action: engine, id: "multi-search" },
        React.createElement("input", { type: "text", className: "w-full text-2xl pl-3 focus-visible:outline-0", name: "q", id: "q", placeholder: chrome.i18n.getMessage("search") }),
        React.createElement("select", { onChange: e => {
                handleChange(e);
            }, value: engine, name: "search-engine", id: "search-engine", className: "p-3 text-2xl text-slate-400" },
            React.createElement("option", { value: "https://search.brave.com/search", className: "brave" }, "Brave"),
            React.createElement("option", { value: "https://www.google.com/search", className: "google" }, "Google"),
            React.createElement("option", { value: "https://www.bing.com/search", className: "bing" }, "Bing"),
            React.createElement("option", { value: "https://duckduckgo.com/search", className: "duck" }, "Duck")),
        React.createElement("button", { className: "px-5 ml-3 rounded-md bg-blue-500 hover:bg-blue-600 text-white", type: "submit" },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-search", viewBox: "0 0 16 16" },
                React.createElement("path", { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" })))));
}
export default FormSearchBar;
