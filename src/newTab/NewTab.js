import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../assets/css/tailwind.css';
import History from './components/History';
import About from './components/About';
import SearchBox from './components/SearchBox';
function NewTab() {
    return (React.createElement("div", { className: "App h-screen bg-slate-100 bg-color-fog" },
        React.createElement("div", { className: "m-auto px-4 pt-24 md:w-full" },
            React.createElement(SearchBox, null),
            React.createElement("div", { className: "tab-box md:w-[800px] m-auto" },
                React.createElement("nav", { className: "tab-nav p-4 mb-4 rounded-full bg-white/30 backdrop-blur-md" },
                    React.createElement("ul", { className: "flex rounded-full bg-white list-none" },
                        React.createElement("li", null,
                            React.createElement("a", { href: "#/", className: "inline-block m-2 ml-6 p-2 text-base text-slate-500" }, "History")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "#/about", className: "inline-block m-2 p-2 text-base text-slate-500" }, "About")))),
                React.createElement("main", { className: "md:w-full p-4 mb-4" },
                    React.createElement(Routes, null,
                        React.createElement(Route, { path: "/", element: React.createElement(History, null) }),
                        React.createElement(Route, { path: "/about", element: React.createElement(About, null) })))))));
}
export default NewTab;
