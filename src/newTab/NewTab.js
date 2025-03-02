import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "../assets/css/tailwind.css";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import FormSearchBar from "../components/FormSearchBar";
import GoogleApps from "../components/GoogleApps";
import Tabs from "../components/Tabs";
import History from "../components/History";
import Todos from "../components/Todos";
import Downloads from "../components/Downloads";
import ActionButton from "../components/ActionButton";
import MiniDashboard from "../components/MiniDashboard";
function NewTab() {
    const file = chrome.storage.sync.get(["fileData"], res => {
        console.log(res);
    });
    console.log(file);
    return (React.createElement("div", { className: "App bg-eye-rainbow h-screen bg-slate-900" },
        React.createElement("div", { className: "flex m-auto mb-24" },
            React.createElement(NavBar, { name: name })),
        React.createElement("div", { className: "flex m-auto md:w-[760px] justify-center mb-12" },
            React.createElement(Logo, { classes: "text-2xl text-white hover:text-slate-300" })),
        React.createElement("div", { className: "flex m-auto md:w-[760px] justify-center mb-4 rounded bg-white/10 backdrop backdrop-blur p-2" },
            React.createElement("div", { className: "bg-white p-3 w-full rounded" },
                React.createElement(FormSearchBar, null))),
        React.createElement("div", { className: "flex m-auto mb-4 md:w-[760px] justify-center rounded bg-white/10 backdrop backdrop-blur p-2" },
            React.createElement("nav", { className: "w-full p-3" },
                React.createElement("ul", { className: "flex justify-between" },
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/", className: "flex justify-between text-white text-base hover:text-slate-300", target: "_self" },
                            React.createElement("span", { className: "mt-1 mr-2" },
                                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-app", viewBox: "0 0 16 16" },
                                    React.createElement("path", { d: "M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" }))),
                            React.createElement("span", null, chrome.i18n.getMessage("Apps")))),
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/todos", className: "flex justify-between text-white text-base hover:text-slate-300", target: "_self" },
                            React.createElement("span", { className: "mt-1 mr-2" },
                                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-list-check", viewBox: "0 0 16 16" },
                                    React.createElement("path", { fillRule: "evenodd", d: "M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" }))),
                            React.createElement("span", null, chrome.i18n.getMessage("Todos")))),
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/tabs", className: "flex justify-between text-white text-base hover:text-slate-300", target: "_self" },
                            React.createElement("span", { className: "mt-1 mr-2" },
                                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-segmented-nav", viewBox: "0 0 16 16" },
                                    React.createElement("path", { d: "M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm6 3h4V5H6v4zm9-1V6a1 1 0 0 0-1-1h-3v4h3a1 1 0 0 0 1-1z" }))),
                            React.createElement("span", null, chrome.i18n.getMessage("Tabs")))),
                    React.createElement("li", null,
                        React.createElement(Link, { to: "/history", className: "flex justify-between text-white text-base hover:text-slate-300", target: "_self" },
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
                            React.createElement("span", null, chrome.i18n.getMessage("Downloads"))))))),
        React.createElement("main", { className: "flex justify-between" },
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(GoogleApps, null) }),
                React.createElement(Route, { path: "/todos", element: React.createElement(Todos, null) }),
                React.createElement(Route, { path: "/tabs", element: React.createElement(Tabs, null) }),
                React.createElement(Route, { path: "/history", element: React.createElement(History, null) }),
                React.createElement(Route, { path: "/downloads", element: React.createElement(Downloads, null) }))),
        React.createElement(MiniDashboard, null),
        React.createElement(ActionButton, null)));
}
export default NewTab;
