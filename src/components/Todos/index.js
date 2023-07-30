import React from 'react';
import { useState, useEffect } from 'react';
function Todos({ classes }) {
    const [todos, setTodos] = useState([]);
    function renderList() {
    }
    function addTodo() {
        console.log("adding todo");
    }
    function deleteTodo() {
        console.log("deleting todo");
    }
    function handleTodoChange() {
    }
    useEffect(() => {
    });
    return (React.createElement("div", { className: "todo-app " + `${classes}` },
        React.createElement("ul", { className: "todo-list" },
            React.createElement("li", { className: "bg-white-10 rounded flex justify-between" },
                React.createElement("div", { className: "p-1" },
                    React.createElement("div", { className: "flex items-center" },
                        React.createElement("input", { type: "checkbox", id: "A3-yes", name: "A3-confirmation", value: "yes", className: "opacity-0 absolute h-8 w-8" }),
                        React.createElement("div", { className: "bg-white border-2 rounded-md border-blue-400 w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500" },
                            React.createElement("svg", { className: "fill-current hidden w-3 h-3 text-blue-600 pointer-events-none", version: "1.1", viewBox: "0 0 17 12", xmlns: "http://www.w3.org/2000/svg" },
                                React.createElement("g", { fill: "none", fillRule: "evenodd" },
                                    React.createElement("g", { transform: "translate(-9 -11)", fill: "#1F73F1", fillRule: "nonzero" },
                                        React.createElement("path", { d: "m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" }))))),
                        React.createElement("label", { htmlFor: "A3-yes", className: "select-none hidden" }, "Yes"))),
                React.createElement("input", { type: "text", name: "new-todo", id: "new-todo", className: "p-2 text-base rounded w-full mr-4", onChange: handleTodoChange, placeholder: chrome.i18n.getMessage('newTodo') }),
                React.createElement("span", { className: "inline-flex justify-between" },
                    React.createElement("button", { onClick: () => {
                            deleteTodo();
                        }, className: "text-slate-400 hover:text-rose-600 mx-2" },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-trash", viewBox: "0 0 16 16" },
                            React.createElement("path", { d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" }),
                            React.createElement("path", { d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" }))),
                    React.createElement("button", { onClick: () => {
                            addTodo();
                        }, className: "text-slate-400 hover:text-blue-600 mx-2" },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-plus-lg", viewBox: "0 0 16 16" },
                            React.createElement("path", { fillRule: "evenodd", d: "M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" }))))))));
}
export default Todos;
