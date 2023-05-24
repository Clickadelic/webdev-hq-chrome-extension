import React from 'react';
import { createRoot } from "react-dom/client";
import "../assets/css/tailwind.css";
import Checkbox from './Checkbox';
import Logo from '../components/Logo';

const Options = (
	<div className="bg-slate-200 ">
		<div className="md:w-[800px] min-h-screen m-auto bg-white p-4">
			<Logo classes="text-2xl text-slate-900 hover:text-slate-300 block my-12" />
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