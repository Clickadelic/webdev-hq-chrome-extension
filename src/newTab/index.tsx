import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import NewTab from "./_components/NewTab";

function init() {
	const appContainer = document.createElement("div");
	document.body.appendChild(appContainer);
	if (!appContainer) {
		throw new Error("Can not find App container");
	}

	const root = createRoot(appContainer);
	root.render(
		<Router>
			<NewTab />
		</Router>
	);
}
init();
