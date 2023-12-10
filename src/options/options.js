import React from 'react';
import { createRoot } from "react-dom/client";
import "../assets/css/tailwind.css";
import Checkbox from './Checkbox';
import Logo from '../components/Logo';
const Options = (React.createElement("div", { className: "bg-slate-200 " },
    React.createElement("div", { className: "md:w-[800px] min-h-screen m-auto bg-white p-4" },
        React.createElement(Logo, { classes: "text-2xl text-slate-900 hover:text-slate-300 block my-12" }),
        React.createElement("div", { className: "tobysrow" },
            React.createElement(Checkbox, null)))));
const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(Options);
