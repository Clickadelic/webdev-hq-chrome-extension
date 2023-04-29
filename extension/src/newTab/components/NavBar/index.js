import React from 'react';
import Clock from 'react-digital-clock';
function NavBar() {
    return (React.createElement("nav", { className: "w-full mb-16 bg-white" },
        React.createElement("ul", { className: "grid grid-cols-7 gap-[1px] content-center items-center" },
            React.createElement("li", null, "Stuff"),
            React.createElement("li", null, "Stuff"),
            React.createElement("li", null, "Stuff"),
            React.createElement("li", null,
                React.createElement("span", { className: "" },
                    React.createElement(Clock, null))),
            React.createElement("li", null, "Stuff"),
            React.createElement("li", null, "Stuff"),
            React.createElement("li", null, "Stuff"))));
}
export default NavBar;
