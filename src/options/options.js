import React from 'react';
import { createRoot } from "react-dom/client";
import "../assets/css/tailwind.css";
import Checkbox from './Checkbox';
import Logo from '../Logo';
const Options = (React.createElement("div", { className: "min-h-screen bg-slate-200 " },
    React.createElement("div", { className: "md:w-[800px] m-auto bg-white p-4" },
        React.createElement(Logo, null),
        React.createElement("div", { className: "tobysrow" },
            React.createElement(Checkbox, null)))));
const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(Options);
