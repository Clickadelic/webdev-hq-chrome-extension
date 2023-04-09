import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../assets/css/tailwind.css';
import History from './components/History';
import About from './components/About';
import SearchBox from './components/SearchBox';
function NewTab() {
    return (React.createElement("div", { className: "App flex h-screen bg-slate-100 bg-window-wall" },
        React.createElement("div", { className: "m-auto px-4 md:w-full" },
            React.createElement(SearchBox, null),
            React.createElement("div", { className: "tab-box md:w-[800px] m-auto p-4 rounded bg-white/30 backdrop-blur-md" },
                React.createElement("nav", { className: "tab-nav" },
                    React.createElement("ul", { className: "flex bg-white list-none" },
                        React.createElement("li", null,
                            React.createElement("a", { href: "#/", className: "inline-block m-2 p-2 text-2xl text-slate-500" }, "History")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "#/about", className: "inline-block m-2 p-2 text-2xl text-slate-500" }, "About")))),
                React.createElement("main", { className: "md:w-full bg-white" },
                    React.createElement(Routes, null,
                        React.createElement(Route, { path: "/", element: React.createElement(History, null) }),
                        React.createElement(Route, { path: "/about", element: React.createElement(About, null) })))))));
}
export default NewTab;
