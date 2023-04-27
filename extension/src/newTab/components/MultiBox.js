import React from 'react';
import FormSearchBar from './FormSearchBar';
import GoogleApps from './GoogleApps';
import Logo from '../../Logo';
function MultiBox() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex justify-center mb-12" },
            React.createElement(Logo, null)),
        React.createElement("div", { className: "w-96 md:w-[600px] m-auto rounded-md bg-white/10 backdrop backdrop-blur p-2" },
            React.createElement("div", { className: "bg-white p-2 rounded-md" },
                React.createElement(FormSearchBar, null),
                React.createElement(GoogleApps, null)))));
}
export default MultiBox;
