import React, { useEffect } from "react";
const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    chrome.storage.sync.set({ name }, () => {
        console.log(`Name is set to ${name}`);
    });
};
const Popup = () => {
    useEffect(() => {
        chrome.storage.sync.get(["name"], (res) => {
            console.log(res.name);
        });
    }, []);
    return (React.createElement("div", null,
        React.createElement("form", { onSubmit: handleSubmit, className: "flex justify-center items-center py-44" },
            React.createElement("input", { type: "text", name: "name", className: "bg-gray ring-black p-4", placeholder: "Enter a word" }),
            React.createElement("button", { className: "p-3 m-2 bg-green-200" }, "Submit"))));
};
export default Popup;
