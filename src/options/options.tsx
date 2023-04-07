import React from 'react';
import { createRoot } from "react-dom/client";
import "../assets/css/tailwind.css";
import Checkbox from './Checkbox';
import Logo from '../Logo';

const Options = (
	<div className="min-h-screen bg-slate-200 ">
		<div className="md:w-[800px] m-auto bg-white p-4">
			<Logo />
			<div className="tobysrow">
				<Checkbox />
			</div>
		</div>
	</div>
)

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(Options)