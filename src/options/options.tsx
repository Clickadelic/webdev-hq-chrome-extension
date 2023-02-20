import React from 'react';
import { createRoot } from "react-dom/client";
import "../assets/css/tailwind.css";

const Options = (
	<div className="bg-sky-500">
		<h1>Options</h1>
	</div>
)

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(Options)