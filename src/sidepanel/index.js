import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/css/tailwind.css";
import { Sidepanel } from "./_components/Sidepanel";
function init() {
    const appContainer = document.createElement("div");
    document.body.appendChild(appContainer);
    if (!appContainer) {
        throw new Error("Can not find AppContainer");
    }
    const root = createRoot(appContainer);
    root.render(React.createElement(Sidepanel, null));
}
init();
