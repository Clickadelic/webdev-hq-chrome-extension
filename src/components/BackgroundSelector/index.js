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
const BackgroundSelector = () => {
    const pickerOpts = {
        types: [
            {
                description: "Images",
                accept: {
                    "image/*": [".png", ".gif", ".jpeg", ".jpg"]
                }
            }
        ],
        excludeAcceptAllOption: true,
        multiple: false
    };
    function returnPathDirectories(directoryHandle) {
        return __awaiter(this, void 0, void 0, function* () {
            // Get a file handle by showing a file picker:
            const [handle] = yield self.showOpenFilePicker();
            if (!handle) {
                // User cancelled, or otherwise failed to open a file.
                return;
            }
            // Check if handle exists inside our directory handle
            const relativePaths = yield directoryHandle.resolve(handle);
            if (relativePaths === null) {
                // Not inside directory handle
            }
            else {
                // relativePaths is an array of names, giving the relative path
                for (const name of relativePaths) {
                    // log each entry
                    console.log(name);
                }
            }
        });
    }
    function getTheFile() {
        return __awaiter(this, void 0, void 0, function* () {
            // Open file picker and destructure the result the first handle
            const [fileHandle] = yield window.showOpenFilePicker(pickerOpts);
            // get file contents
            const fileData = yield fileHandle.getFile();
        });
    }
    return (React.createElement("div", null,
        React.createElement("button", { className: "text-white flex h-8 w-8 p-1 text-base", onClick: getTheFile },
            React.createElement("span", { className: "inline-block mr-3" },
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", fill: "currentColor", className: "bi bi-card-image", viewBox: "0 0 16 16" },
                    React.createElement("path", { d: "M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" }),
                    React.createElement("path", { d: "M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z" }))),
            React.createElement("span", { className: "mt-1" }, chrome.i18n.getMessage("BackgroundImage")))));
};
export default BackgroundSelector;
