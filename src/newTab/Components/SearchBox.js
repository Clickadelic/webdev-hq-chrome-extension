import React from 'react';
import { useState } from 'react';
function SearchBox() {
    // TODO improve this
    const [engine, setEngine] = useState("https://search.brave.com/search");
    return (React.createElement("div", { className: "searchbox flex md:w-[800px] m-auto justify-center p-4 mb-4 rounded bg-white/30 backdrop-blur-md" },
        React.createElement("form", { method: "GET", className: "flex md:w-[800px]", action: engine, id: "action-search" },
            React.createElement("input", { type: "text", className: "p-3 text-2xl w-full rounded-tl rounded-bl mx-auto", name: "q", id: "q", placeholder: chrome.i18n.getMessage("search") }),
            React.createElement("select", { onChange: (e) => {
                    const selected = e.target.value;
                    setEngine(selected);
                }, value: engine, name: "search-engine", id: "search-engine", className: "p-3 text-2xl" },
                React.createElement("option", { value: "https://search.brave.com/search" }, "Brave"),
                React.createElement("option", { value: "https://www.google.com/search" }, "Google"),
                React.createElement("option", { value: "https://www.bing.com/search" }, "Bing"),
                React.createElement("option", { value: "https://duckduckgo.com/search" }, "Duck")),
            React.createElement("button", { className: "bg-white text-slate-500 hover:text-blue-500 rounded-br rounded-tr p-6", type: "submit" },
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-search", viewBox: "0 0 16 16" },
                    React.createElement("path", { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" })))),
        engine));
}
export default SearchBox;
