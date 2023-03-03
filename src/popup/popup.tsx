import React from 'react';
import { createRoot } from "react-dom/client";
import "../assets/css/tailwind.css";

const Layout = (
	<div className="bg-sky-500 w-[760px]">
		<img src="./static/backgrounds/Awesome-Orange.jpg" />
	</div>
)

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(Layout)