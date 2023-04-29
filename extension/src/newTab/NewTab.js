import React from 'react';
import '../assets/css/tailwind.css';
import MultiBox from './components/MultiBox';
import NavBar from './components/NavBar';
function NewTab() {
    return (React.createElement("div", { className: "App h-screen bg-slate-900 bg-color-stripes" },
        React.createElement(NavBar, null),
        React.createElement(MultiBox, null)));
}
export default NewTab;
