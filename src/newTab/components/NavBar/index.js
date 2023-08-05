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
    function getTheFile() {
        return __awaiter(this, void 0, void 0, function* () {
            const pickerOpts = {
                types: [
                    {
                        description: "Images",
                        accept: {
                            "image/*": [".png", ".gif", ".jpeg", ".jpg"],
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
            return fileData;
        });
    }
    return (React.createElement("nav", { className: "w-full" },
        React.createElement("ul", { className: "navbar-grid" },
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 block text-2xl" })),
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
                React.createElement("a", { href: "auth/google/", className: "text-white" }, name ? name : '')))));
}
export default NavBar;
