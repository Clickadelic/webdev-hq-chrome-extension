import React from 'react';
function Checkbox() {
    return (React.createElement("div", { className: "grid grid-cols-7 justify-between p-4" },
        React.createElement("div", { className: "col-span-6" },
            React.createElement("p", { className: "text-base" }, "Do you want do save the settings?")),
        React.createElement("div", { className: "col-span-1 flex items-center mr-4 mb-2" },
            React.createElement("input", { type: "checkbox", id: "yes", name: "confirmation", value: "yes", className: "opacity-0 absolute h-6 w-6" }),
            React.createElement("div", { className: "bg-white border-2 rounded-md border-blue-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500" },
                React.createElement("svg", { className: "fill-current hidden w-2 h-2 text-blue-600 pointer-events-none", version: "1.1", viewBox: "0 0 17 12", xmlns: "http://www.w3.org/2000/svg" },
                    React.createElement("g", { fill: "none", fillRule: "evenodd" },
                        React.createElement("g", { transform: "translate(-9 -11)", fill: "#1F73F1", fillRule: "nonzero" },
                            React.createElement("path", { d: "m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" }))))),
            React.createElement("label", { htmlFor: "yes", className: "select-none text-base" }, "Yes"))));
}
export default Checkbox;
