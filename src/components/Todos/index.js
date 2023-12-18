import React from "react";
import { useState } from "react";
function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleDelete = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
    function handleChange(e) {
        setInputValue(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (inputValue == "" || inputValue == undefined || inputValue.length <= 2) {
            return;
        }
        setIsLoading(true);
        setTodos([...todos, inputValue]);
        setInputValue("");
        setIsLoading(false);
    }
    function toggleDone(e) {
        e.preventDefault();
        console.log(inputValue);
    }
    return (React.createElement("div", { className: "todo-app m-auto md:w-[760px] justify-between rounded bg-white/10 backdrop backdrop-blur p-2" },
        React.createElement("form", { className: "bg-white-10 rounded flex justify-between" },
            React.createElement("input", { type: "text", value: inputValue, onChange: handleChange, className: "p-2 pl-3 text-base rounded w-full mr-2", placeholder: chrome.i18n.getMessage("newTodo") }),
            React.createElement("span", { className: "inline-flex justify-between" },
                React.createElement("button", { onClick: handleSubmit, className: "bg-blue-600 text-white rounded p-3 hover:bg-blue-500" },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-plus-lg", viewBox: "0 0 16 16" },
                        React.createElement("path", { fillRule: "evenodd", d: "M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" }))))),
        React.createElement("ul", { className: "todo-list" },
            isLoading && React.createElement("span", null, "Loading..."),
            todos.map((todo, index) => (React.createElement("li", { key: index, className: "flex justify-between mt-2" },
                React.createElement("div", { className: "flex w-full text-base text-slate-800 bg-white rounded p-2 mr-2" },
                    React.createElement("input", { type: "checkbox", className: "m-1 ml-2", onChange: () => setIsChecked(prev => !prev), checked: isChecked }),
                    React.createElement("p", { className: isChecked ? "line-through" : null }, todo)),
                React.createElement("button", { className: "bg-red-500 text-white rounded p-3 max-h-[45px] hover:bg-red-600", onClick: () => handleDelete(index) },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-trash3", viewBox: "0 0 16 16" },
                        React.createElement("path", { d: "M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" })))))))));
}
export default TodoList;
