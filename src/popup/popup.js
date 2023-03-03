import React from 'react';
import { createRoot } from "react-dom/client";
import "../assets/css/tailwind.css";
const Layout = (React.createElement("div", { className: "bg-sky-500 w-[760px]" },
    React.createElement("img", { src: "./static/backgrounds/Awesome-Orange.jpg" })));
const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(Layout);
