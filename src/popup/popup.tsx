import React from 'react';
import { createRoot } from "react-dom/client";
import "../assets/css/tailwind.css";

const Layout = (
	<div className="bg-sky-500">
		<h1>Hello World</h1>
		<h2>Whats Up</h2>
	</div>
)

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(Layout)