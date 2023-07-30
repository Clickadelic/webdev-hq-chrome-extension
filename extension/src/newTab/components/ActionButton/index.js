import React from 'react';
function ActionButton() {
    function pushOut() {
    }
    return (React.createElement("div", { className: "absolute right-12 bottom-12" },
        React.createElement("button", { className: "text-white text-3xl" },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-plus", viewBox: "0 0 16 16" },
                React.createElement("path", { d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" }))),
        React.createElement("div", { className: "w-10 h-10" }, "asd")));
}
export default ActionButton;
