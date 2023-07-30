import React from 'react';
function FormRegister() {
    function handleRegister() {
    }
    return (React.createElement("div", { className: "w-56 h-[300px] p-2 mt-8 mx-auto" },
        React.createElement("h2", { className: "text-2xl text-slate-900 mb-4" }, chrome.i18n.getMessage("Register")),
        React.createElement("form", null,
            React.createElement("div", { className: "mb-4 text-base" },
                React.createElement("label", { htmlFor: "username" }, chrome.i18n.getMessage("Username")),
                React.createElement("input", { type: "text", name: "username", id: "username", placeholder: chrome.i18n.getMessage("Username"), className: "bg-slate-100 rounded-md p-3 mt-2" })),
            React.createElement("div", { className: "mb-4 text-base" },
                React.createElement("label", { htmlFor: "passwort" }, chrome.i18n.getMessage("Password")),
                React.createElement("input", { type: "text", name: "password", id: "password", placeholder: chrome.i18n.getMessage("Password"), className: "bg-slate-100 rounded-md p-3 mt-2" })),
            React.createElement("button", { type: "submit", className: "bg-blue-500 text-white w-full p-3 rounded", onClick: handleRegister }, chrome.i18n.getMessage("Login")))));
}
export default FormRegister;
