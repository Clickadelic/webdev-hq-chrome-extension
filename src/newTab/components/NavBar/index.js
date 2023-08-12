var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from 'react';
import DigitalClock from '../../../components/DigitalClock';
function NavBar({ name }) {
    // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle
    function getTheFile() {
        return __awaiter(this, void 0, void 0, function* () {
            const pickerOpts = {
                types: [
                    {
                        description: "Images",
                        accept: {
                            "image/*": [".png", ".jpeg", ".jpg", ".webp"],
                        },
                    },
                ],
                excludeAcceptAllOption: true,
                multiple: false,
            };
            // open file picker
            const [fileHandle] = yield window.showOpenFilePicker(pickerOpts);
            // get file contents
            const fileData = yield fileHandle.getFile();
            console.log(fileData.name);
            return fileData;
        });
    }
    return (React.createElement("nav", { className: "w-full" },
        React.createElement("ul", { className: "navbar-grid" },
            React.createElement("li", null,
                React.createElement("button", { onClick: getTheFile, className: "p-2 flex text-base text-white hover:text-slate-800" },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "text-white", className: "bi bi-image mt-2 mr-2", viewBox: "0 0 16 16" },
                        React.createElement("path", { d: "M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" }),
                        React.createElement("path", { d: "M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" })),
                    React.createElement("span", { className: "mt-1" }, chrome.i18n.getMessage("BackgroundImage")))),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 block text-2xl" })),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 block text-2xl" })),
            React.createElement("li", null,
                React.createElement(DigitalClock, { label: "Uhr", classes: "text-white text-2xl p-3" })),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 block text-2xl" })),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 block text-2xl" })),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 block text-2xl" })))));
}
export default NavBar;
