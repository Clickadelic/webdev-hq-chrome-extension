import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../assets/css/tailwind.css';
import NavBar from './components/NavBar';
import Logo from '../Logo';
import FormSearchBar from './components/FormSearchBar';
import History from './components/History';
import About from './components/About';
import Downloads from './components/Downloads';
import Settings from './components/Settings';
import SettingsButton from './components/SettingsButton';
import { Link } from 'react-router-dom';
function NewTab() {
    return (React.createElement("div", { className: "App h-screen bg-slate-900 bg-mountain-beach" },
        React.createElement("div", { className: "flex m-auto mb-24" },
            React.createElement(NavBar, null)),
        React.createElement("div", { className: "flex m-auto md:w-[600px] justify-center mb-12" },
            React.createElement(Logo, null)),
        React.createElement("div", { className: "flex m-auto md:w-[600px] justify-center mb-4 rounded bg-white/10 backdrop backdrop-blur p-2" },
            React.createElement("div", { className: "bg-white p-3 w-full rounded" },
                React.createElement(FormSearchBar, null))),
        React.createElement("div", { className: "flex m-auto mb-4 md:w-[600px] justify-center rounded bg-white/10 backdrop backdrop-blur p-2" },
            React.createElement("nav", { className: "w-full p-3" },
                React.createElement("ul", { className: "flex justify-between" },
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/", className: "flex justify-between text-white text-base hover:text-slate-300", target: "_self" },
                            React.createElement("span", { className: "mt-1 mr-2" },
                                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-clock-history", viewBox: "0 0 16 16" },
                                    React.createElement("path", { d: "M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" }),
                                    React.createElement("path", { d: "M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" }),
                                    React.createElement("path", { d: "M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" }))),
                            React.createElement("span", null, chrome.i18n.getMessage("history")))),
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/downloads", className: "flex justify-between text-white text-base hover:text-slate-300", target: "_self" },
                            React.createElement("span", { className: "mt-1 mr-2" },
                                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-download", viewBox: "0 0 16 16" },
                                    React.createElement("path", { d: "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" }),
                                    React.createElement("path", { d: "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" }))),
                            React.createElement("span", null, chrome.i18n.getMessage("downloads")))),
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/bookmarks", className: "flex justify-between text-white text-base hover:text-slate-300", target: "_self" },
                            React.createElement("span", { className: "mt-1 mr-2" },
                                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-gear", viewBox: "0 0 16 16" },
                                    React.createElement("path", { d: "M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" }),
                                    React.createElement("path", { d: "M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" }))),
                            React.createElement("span", null, chrome.i18n.getMessage("Tabgroups")))),
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/settings", className: "flex justify-between text-white text-base hover:text-slate-300", target: "_self" },
                            React.createElement("span", { className: "mt-1 mr-2" },
                                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-gear", viewBox: "0 0 16 16" },
                                    React.createElement("path", { d: "M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" }),
                                    React.createElement("path", { d: "M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" }))),
                            React.createElement("span", null, chrome.i18n.getMessage("settings"))))))),
        React.createElement("main", { className: "flex justify-between" },
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(History, { classes: "m-auto md:w-[600px] justify-between rounded bg-white/10 backdrop backdrop-blur p-2" }) }),
                React.createElement(Route, { path: "/downloads", element: React.createElement(Downloads, null) }),
                React.createElement(Route, { path: "/about", element: React.createElement(About, null) }),
                React.createElement(Route, { path: "/about", element: React.createElement(About, null) }),
                React.createElement(Route, { path: "/settings", element: React.createElement(Settings, null) }))),
        React.createElement("footer", { className: "flex justify-center" },
            React.createElement("p", { className: "text-slate-400 text-medium" }, "Footer Stuff")),
        React.createElement(SettingsButton, null)));
}
export default NewTab;
