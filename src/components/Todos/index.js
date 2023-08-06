import React from 'react';
import { useState, useEffect } from 'react';
function Todos() {
    const [inputs, setInputs] = useState({});
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setInputs((prevState) => (Object.assign(Object.assign({}, prevState), { [name]: value })));
    }
    ;
    function addTodo(e) {
        console.log(e);
    }
    useEffect(() => {
    }, []);
    return (React.createElement("div", { className: "todo-app m-auto md:w-[760px] justify-between rounded bg-white/10 backdrop backdrop-blur p-2" },
        React.createElement("form", { className: "bg-white-10 rounded flex justify-between mb-2", onSubmit: addTodo },
            React.createElement("input", { type: "text", name: "new-todo", id: "new-todo", className: "p-2 pl-4 text-base rounded w-full mr-2", onChange: handleChange, placeholder: chrome.i18n.getMessage("newTodo") }),
            React.createElement("span", { className: "inline-flex justify-between" },
                React.createElement("button", { onClick: addTodo, className: "bg-blue-600 text-white rounded p-3 hover:bg-blue-500" },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-plus-lg", viewBox: "0 0 16 16" },
                        React.createElement("path", { fillRule: "evenodd", d: "M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" }))))),
        React.createElement("ul", { className: "todo-list" },
            React.createElement("li", null, "Todo Item"))));
}
export default Todos;
