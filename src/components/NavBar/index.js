var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from "react";
import DigitalClock from "../DigitalClock";
import StopWatch from "../StopWatch";
const NavBar = () => {
    // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle
    function getTheFile() {
        return __awaiter(this, void 0, void 0, function* () {
            const pickerOpts = {
                types: [
                    {
                        description: "Images",
                        accept: {
                            "image/*": [".png", ".jpeg", ".jpg", ".webp"]
                        }
                    }
                ],
                excludeAcceptAllOption: true,
                multiple: false
            };
            // open file picker
            const [fileHandle] = yield window.showOpenFilePicker(pickerOpts);
            // get file contents
            const fileData = yield fileHandle.getFile();
            chrome.storage.sync.set({ fileData: fileData });
        });
    }
    return (React.createElement("nav", { className: "w-full bg-black/10 backdrop backdrop-blur" },
        React.createElement("ul", { className: "navbar-grid" },
            React.createElement("li", null,
                React.createElement("button", { onClick: getTheFile, className: "p-2 flex text-base text-white hover:text-slate-300" },
                    React.createElement("span", { className: "mt-1" }, chrome.i18n.getMessage("BackgroundImage")))),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 block text-2xl" })),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 block text-2xl" })),
            React.createElement("li", null,
                React.createElement(DigitalClock, { label: "Uhr", classes: "text-white text-2xl p-3" })),
            React.createElement("li", null,
                React.createElement(StopWatch, null)),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 block text-2xl" })),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 block text-2xl text-white" },
                    React.createElement("span", null, "Tobias Hopp"))))));
};
export default NavBar;
