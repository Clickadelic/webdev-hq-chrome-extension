import React from 'react';
function SearchBox() {
    function handleSearchEngineChange() {
        const [searchEngine, setSearchEngine] = ('');
    }
    return (React.createElement("div", { className: "searchbox flex md:w-[800px] m-auto mt-12 mb-48 justify-center p-4 rounded bg-white/40 backdrop backdrop-blur-0" },
        React.createElement("form", { method: "GET", className: "flex md:w-[800px]", action: "https://search.brave.com/search", id: "action-search" },
            React.createElement("input", { type: "text", className: "p-3 text-2xl w-full rounded-tl rounded-bl mx-auto", name: "q", id: "q", placeholder: chrome.i18n.getMessage("search") }),
            React.createElement("select", { onChange: handleSearchEngineChange, name: "search-engine", id: "search-engine", className: "p-3 text-2xl" },
                React.createElement("option", { value: "https://search.brave.com/search" }, "Brave"),
                React.createElement("option", { value: "https://search.brave.com/search" }, "Google")),
            React.createElement("button", { className: "bg-sky-600 text-white rounded-br rounded-tr px-6", type: "submit" },
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-search", viewBox: "0 0 16 16" },
                    React.createElement("path", { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" }))))));
}
export default SearchBox;
