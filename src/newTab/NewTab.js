import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
function NewTab() {
    return (React.createElement("div", null,
        React.createElement("ul", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#/" }, "Home")),
            React.createElement("li", null,
                React.createElement("a", { href: "#/about" }, "About"))),
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
            React.createElement(Route, { index: true, element: React.createElement(About, null) }))));
}
export default NewTab;
