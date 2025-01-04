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
import BackgroundSelector from "../BackgroundSelector";
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
    chrome.system.cpu.getInfo(info => {
        provideCpuInfo(info);
    });
    chrome.system.display.getInfo(info => {
        provideDisplayInfo(info);
    });
    chrome.system.memory.getInfo(info => {
        provideMemoryInfo(info);
    });
    chrome.system.storage.getInfo(info => {
        provideStorageInfo(info);
    });
    function provideCpuInfo(info) {
        console.log(info.modelName);
    }
    function provideDisplayInfo(info) {
        console.log(info);
    }
    function provideMemoryInfo(info) {
        console.log(info);
    }
    function provideStorageInfo(info) {
        console.log(info);
    }
    return (React.createElement("nav", { className: "w-full bg-black/10 backdrop backdrop-blur" },
        React.createElement("ul", { className: "navbar-grid" },
            React.createElement("li", null,
                React.createElement(BackgroundSelector, null)),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 block text-2xl" })),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 block text-2xl" })),
            React.createElement("li", null,
                React.createElement(DigitalClock, { label: "Uhr", classes: "text-white text-2xl p-3", currentTimeStyle: "short" })),
            React.createElement("li", null,
                React.createElement(StopWatch, null)),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 block text-2xl" })),
            React.createElement("li", null,
                React.createElement("a", { href: "/", className: "p-2 block text-2xl text-white" },
                    React.createElement("span", null, "Tobias Hopp"))))));
};
export default NavBar;
