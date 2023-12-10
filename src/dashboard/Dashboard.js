import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../assets/css/tailwind.css';
import HeaderSidebar from './components/HeaderSidebar';
import Home from './components/Home';
import About from './components/About';
import Breadcrumbs from './components/Breadcrumbs';
function Dashboard() {
    return (React.createElement("div", { className: "App bg-slate-100 bg-window-wall min-h-screen" },
        React.createElement(HeaderSidebar, null),
        React.createElement("div", { className: "pt-16 pl-4 pr-4 md:pl-72 md:pt-24 md:w-full min-h-screen" },
            React.createElement(Breadcrumbs, null),
            React.createElement("main", { className: "md:w-full" },
                React.createElement(Routes, null,
                    React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
                    React.createElement(Route, { path: "/about", element: React.createElement(About, null) }))))));
}
export default Dashboard;
