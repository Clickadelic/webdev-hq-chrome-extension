import React from 'react';
import { createRoot } from "react-dom/client";
import "../assets/css/tailwind.css";
const Options = (React.createElement("div", { className: "bg-slate-200" },
    React.createElement("h1", null, "Options")));
const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(Options);
