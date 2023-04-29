import React from 'react';
import '../assets/css/tailwind.css';
import NavBar from './components/NavBar';
import Logo from '../Logo';
import FormSearchBar from './components/FormSearchBar';
function NewTab() {
    return (React.createElement("div", { className: "App h-screen bg-slate-900 bg-mountain-beach" },
        React.createElement(NavBar, null),
        React.createElement("div", { className: "flex m-auto md:w-[600px] justify-center mb-12" },
            React.createElement(Logo, null)),
        React.createElement("div", { className: "flex m-auto md:w-[600px] justify-center mb-12 bg-white/10 backdrop backdrop-blur p-2" },
            React.createElement("div", { className: "bg-white p-3 w-full rounded" },
                React.createElement(FormSearchBar, null)))));
}
export default NewTab;
