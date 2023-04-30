import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../assets/css/tailwind.css';
import NavBar from './components/NavBar';
import Logo from '../Logo';
import FormSearchBar from './components/FormSearchBar';
import History from './components/History';
import About from './components/About';
import SettingsButton from './components/SettingsButton';
function NewTab() {
    return (React.createElement("div", { className: "App h-screen bg-slate-900 bg-mountain-beach" },
        React.createElement("div", { className: "flex m-auto mb-24" },
            React.createElement(NavBar, null)),
        React.createElement("div", { className: "flex m-auto md:w-[600px] justify-center mb-12" },
            React.createElement(Logo, null)),
        React.createElement("div", { className: "flex m-auto md:w-[600px] justify-center mb-12 rounded bg-white/10 backdrop backdrop-blur p-2" },
            React.createElement("div", { className: "bg-white p-3 w-full rounded" },
                React.createElement(FormSearchBar, null))),
        React.createElement("main", { className: "md:w-full p-4 mb-4" },
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(History, null) }),
                React.createElement(Route, { path: "/about", element: React.createElement(About, null) }))),
        React.createElement("footer", null,
            React.createElement("p", null, "Footer Stuff")),
        React.createElement(SettingsButton, null)));
}
export default NewTab;
