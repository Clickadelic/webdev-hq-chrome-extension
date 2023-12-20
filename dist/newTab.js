/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/ActionButton/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/ActionButton/index.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function ActionButton() {
    // chrome.readingList.addEntry({
    // 	title: "New to the web platform in September | web.dev",
    // 	url: "https://developer.chrome.com/",
    // 	hasBeenRead: false
    // })
    // const items = await chrome.readingList.query({})
    // for (const item of items) {
    // 	// Do something do display the item
    // 	console.log(item)
    // }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { role: "button", className: "absolute right-12 bottom-12 text-white" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", className: "h-4 w-4 bi bi-plus-circle", viewBox: "0 0 16 16" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-10 h-10 text-white text-base" }, "add")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActionButton);


/***/ }),

/***/ "./src/components/DigitalClock/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/DigitalClock/index.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function DigitalClock({ label, classes }) {
    // options timeStyle:
    // {hour: '2-digit', minute:'2-digit', hour12: false}
    let time = new Date().toLocaleTimeString([], { timeStyle: 'short' });
    const [currentTime, setCurrentTime] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(time);
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString([], { timeStyle: 'short' });
        setCurrentTime(time);
    };
    setInterval(UpdateTime);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `${classes}` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "current-time inline-block mr-2" }, currentTime),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "clock-label text-small" }, label)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DigitalClock);


/***/ }),

/***/ "./src/components/Downloads/index.tsx":
/*!********************************************!*\
  !*** ./src/components/Downloads/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function Downloads() {
    const [userDownloads, setUserDownloads] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    function getDownloads() {
        chrome.downloads.search({ limit: 10 }, downloads => {
            const downloadList = downloads.map(item => {
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { key: item.id, className: "text-white text-base hover:text-slate-400" }, item.filename));
            });
            setUserDownloads(downloadList);
        });
    }
    function deleteDownloads() {
        alert("Deleting downloads");
    }
    function openDownloadFolder() {
        chrome.downloads.showDefaultFolder();
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        getDownloads();
    }, [userDownloads]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col m-auto md:w-[760px] rounded bg-white/10 backdrop backdrop-blur p-2" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-base text-white m-auto p-2" }, chrome.i18n.getMessage("downloads")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: "mx-2" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "list-downloads p-2" }, userDownloads),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: openDownloadFolder, className: "flex text-white m-auto p-3 text-base hover:text-slate-400" }, chrome.i18n.getMessage("openDownloadsFolder"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Downloads);


/***/ }),

/***/ "./src/components/FormSearchBar/index.tsx":
/*!************************************************!*\
  !*** ./src/components/FormSearchBar/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function FormSearchBar() {
    const [engine, setEngine] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("https://www.google.com/search");
    function handleChange(e) {
        setEngine(e.target.value);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { method: "GET", className: "flex justify-between", action: engine, id: "multi-search" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", className: "w-full text-2xl pl-3 focus-visible:outline-0", name: "q", id: "q", placeholder: chrome.i18n.getMessage("search") }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", { onChange: (e) => { handleChange(e); }, value: engine, name: "search-engine", id: "search-engine", className: "p-3 text-2xl text-slate-400" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "https://search.brave.com/search", className: "brave" }, "Brave"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "https://www.google.com/search", className: "google" }, "Google"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "https://www.bing.com/search", className: "bing" }, "Bing"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", { value: "https://duckduckgo.com/search", className: "duck" }, "Duck")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "px-5 ml-3 rounded-md bg-blue-500 hover:bg-blue-600 text-white", type: "submit" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-search", viewBox: "0 0 16 16" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormSearchBar);


/***/ }),

/***/ "./src/components/GoogleApps/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/GoogleApps/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.ts");


function GoogleApps() {
    const currentApps = _constants__WEBPACK_IMPORTED_MODULE_1__.apps.map(app => {
        return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { key: app.id },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: app.href, title: app.title, target: app.target, className: "w-16 h-16 flex flex-col justify-center items-center backdrop-blur-sm bg-white/30 hover:bg-white hover:glow rounded-lg" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: app.icon, className: "w-8 h-8", alt: app.title }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "text-sm mt-1 text-white hover:text-slate-600" }, app.title))));
    });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "m-auto md:w-[760px] justify-between" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "grid grid-cols-10 gap-4 content-center items-center rounded-b" }, currentApps)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoogleApps);


/***/ }),

/***/ "./src/components/History/index.tsx":
/*!******************************************!*\
  !*** ./src/components/History/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function History() {
    const [userHistory, setUserHistory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    function deleteItem(url) {
        chrome.history.deleteUrl({ url });
        getHistory();
    }
    function deleteHistory() {
        chrome.history.deleteAll();
        getHistory();
    }
    function saveItem(url) {
        alert(url);
    }
    function getHistory() {
        chrome.history.search({ text: "", maxResults: 10 }, data => {
            const history = data.map(page => {
                let faviconUrl = "https://s2.googleusercontent.com/s2/favicons?domain=" + page.url;
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { key: page.id, className: "flex justify-between overflow-ellipsis" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: page.url, className: "text-base text-white hover:text-slate-400 mb-1 truncate", target: "_self", title: page.title },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: faviconUrl, className: "favicon inline-block mr-2", alt: page.title }),
                        page.title),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "flex justify-between ml-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: () => {
                                deleteItem(page.url);
                            }, className: "text-slate-400 hover:text-rose-600 mr-4" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-x", viewBox: "0 0 16 16" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" }))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: () => {
                                saveItem(page.url);
                            }, className: "text-blue-600" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-bookmark", viewBox: "0 0 16 16" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" }))))));
            });
            setUserHistory(history);
        });
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        getHistory();
    }, [userHistory]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "m-auto md:w-[760px] justify-between rounded bg-white/10 backdrop backdrop-blur p-2" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-base text-white m-auto p-2" }, chrome.i18n.getMessage("history")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: "mx-2" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "list-history p-2 mb-2" }, userHistory),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: deleteHistory, className: "flex text-white m-auto p-3 text-base hover:text-slate-400" }, chrome.i18n.getMessage("deleteHistory"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (History);


/***/ }),

/***/ "./src/components/Logo/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Logo/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Logo({ classes }) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: "md:block w-56 m-auto" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "https://webdev-hq.com/", className: classes },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: "../static/icons/extension/icon-32.png", className: "logo inline mr-2 -mt-1", alt: "WebDev HQ Logo" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "font-light" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "web" }, "Web"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "dev-hq font-medium" }, "Dev HQ")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);


/***/ }),

/***/ "./src/components/MiniDashboard/index.tsx":
/*!************************************************!*\
  !*** ./src/components/MiniDashboard/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function MiniDashboard() {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const toggle = () => {
        setOpen(!open);
        console.log("MiniDB is:", toggle);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "absolute bottom-0 left-96 right-96 mx-auto bg-white/10 backdrop backdrop-blur flex justify-center hover:bg-slate-200 w-96 p-2 rounded-t-md", role: "button", onClick: () => {
            chrome.tabs.create({ url: "dashboard.html" });
        } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "text-base font-medium text-white" }, "Mini-Dashboard")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiniDashboard);


/***/ }),

/***/ "./src/components/NavBar/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/NavBar/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DigitalClock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DigitalClock */ "./src/components/DigitalClock/index.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function NavBar({ name }) {
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
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", { className: "w-full" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "navbar-grid" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: getTheFile, className: "p-2 flex text-base text-white hover:text-slate-800" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "text-white", className: "bi bi-image mt-2 mr-2", viewBox: "0 0 16 16" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "mt-1" }, chrome.i18n.getMessage("BackgroundImage")))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "/", className: "p-2 block text-2xl" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "/", className: "p-2 block text-2xl" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DigitalClock__WEBPACK_IMPORTED_MODULE_1__["default"], { label: "Uhr", classes: "text-white text-2xl p-3" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "/", className: "p-2 block text-2xl" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "/", className: "p-2 block text-2xl" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "/", className: "p-2 block text-2xl" })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);


/***/ }),

/***/ "./src/components/Tabs/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Tabs/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Tabs() {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url = tabs[0].url;
        // use `url` here inside the callback because it's asynchronous!
        console.log(url);
    });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "m-auto md:w-[760px] justify-between rounded bg-white/10 backdrop backdrop-blur p-2" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-base text-white m-auto p-2" }, chrome.i18n.getMessage("tabs")),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", { className: "mx-2" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "list-tabs p-4" }, "asd")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);


/***/ }),

/***/ "./src/components/Todos/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Todos/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function TodoList() {
    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [isChecked, setIsChecked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handleDelete = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
    function handleChange(e) {
        setInputValue(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (inputValue == "" || inputValue == undefined || inputValue.length <= 2) {
            return;
        }
        setIsLoading(true);
        setTodos([...todos, inputValue]);
        setInputValue("");
        setIsLoading(false);
    }
    function toggleDone(e) {
        e.preventDefault();
        console.log(inputValue);
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "todo-app m-auto md:w-[760px] justify-between rounded bg-white/10 backdrop backdrop-blur p-2" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { className: "bg-white-10 rounded flex justify-between" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", value: inputValue, onChange: handleChange, className: "p-2 pl-3 text-base rounded w-full mr-2", placeholder: chrome.i18n.getMessage("newTodo") }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "inline-flex justify-between" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: handleSubmit, className: "bg-blue-600 text-white rounded p-3 hover:bg-blue-500" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-plus-lg", viewBox: "0 0 16 16" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fillRule: "evenodd", d: "M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" }))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "todo-list" },
            isLoading && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Loading..."),
            todos.map((todo, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { key: index, className: "flex justify-between mt-2" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex w-full text-base text-slate-800 bg-white rounded p-2 mr-2" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "checkbox", id: "done", name: "done", className: "m-1 ml-2", onChange: () => setIsChecked(prev => !prev), checked: isChecked }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: isChecked ? "line-through" : null }, todo)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "bg-red-500 text-white rounded p-3 max-h-[45px] hover:bg-red-600", onClick: () => handleDelete(index) },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-trash3", viewBox: "0 0 16 16" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" })))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);


/***/ }),

/***/ "./src/newTab/NewTab.tsx":
/*!*******************************!*\
  !*** ./src/newTab/NewTab.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _assets_css_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/css/tailwind.css */ "./src/assets/css/tailwind.css");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Logo */ "./src/components/Logo/index.tsx");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NavBar */ "./src/components/NavBar/index.tsx");
/* harmony import */ var _components_FormSearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FormSearchBar */ "./src/components/FormSearchBar/index.tsx");
/* harmony import */ var _components_GoogleApps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GoogleApps */ "./src/components/GoogleApps/index.tsx");
/* harmony import */ var _components_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Tabs */ "./src/components/Tabs/index.tsx");
/* harmony import */ var _components_History__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/History */ "./src/components/History/index.tsx");
/* harmony import */ var _components_Todos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Todos */ "./src/components/Todos/index.tsx");
/* harmony import */ var _components_Downloads__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Downloads */ "./src/components/Downloads/index.tsx");
/* harmony import */ var _components_ActionButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ActionButton */ "./src/components/ActionButton/index.tsx");
/* harmony import */ var _components_MiniDashboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/MiniDashboard */ "./src/components/MiniDashboard/index.tsx");














function NewTab() {
    const file = chrome.storage.sync.get(["fileData"], res => {
        console.log(res);
    });
    console.log(file);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "App bg-eye-rainbow h-screen bg-slate-900" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex m-auto mb-24" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__["default"], { name: name })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex m-auto md:w-[760px] justify-center mb-12" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], { classes: "text-2xl text-white hover:text-slate-300" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex m-auto md:w-[760px] justify-center mb-4 rounded bg-white/10 backdrop backdrop-blur p-2" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white p-3 w-full rounded" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FormSearchBar__WEBPACK_IMPORTED_MODULE_4__["default"], null))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex m-auto mb-4 md:w-[760px] justify-center rounded bg-white/10 backdrop backdrop-blur p-2" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", { className: "w-full p-3" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "flex justify-between" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Link, { to: "/", className: "flex justify-between text-white text-base hover:text-slate-300", target: "_self" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "mt-1 mr-2" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-app", viewBox: "0 0 16 16" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" }))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, chrome.i18n.getMessage("Apps")))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Link, { to: "/todos", className: "flex justify-between text-white text-base hover:text-slate-300", target: "_self" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "mt-1 mr-2" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-list-check", viewBox: "0 0 16 16" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fillRule: "evenodd", d: "M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" }))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, chrome.i18n.getMessage("Todos")))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Link, { to: "/tabs", className: "flex justify-between text-white text-base hover:text-slate-300", target: "_self" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "mt-1 mr-2" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-segmented-nav", viewBox: "0 0 16 16" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm6 3h4V5H6v4zm9-1V6a1 1 0 0 0-1-1h-3v4h3a1 1 0 0 0 1-1z" }))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, chrome.i18n.getMessage("Tabs")))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Link, { to: "/history", className: "flex justify-between text-white text-base hover:text-slate-300", target: "_self" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "mt-1 mr-2" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-clock-history", viewBox: "0 0 16 16" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" }))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, chrome.i18n.getMessage("history")))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Link, { to: "/downloads", className: "flex justify-between text-white text-base hover:text-slate-300", target: "_self" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "mt-1 mr-2" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-download", viewBox: "0 0 16 16" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" }))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, chrome.i18n.getMessage("Downloads"))))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", { className: "flex justify-between" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Routes, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, { path: "/", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_GoogleApps__WEBPACK_IMPORTED_MODULE_5__["default"], null) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, { path: "/todos", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Todos__WEBPACK_IMPORTED_MODULE_8__["default"], null) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, { path: "/tabs", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Tabs__WEBPACK_IMPORTED_MODULE_6__["default"], null) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, { path: "/history", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_History__WEBPACK_IMPORTED_MODULE_7__["default"], null) }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Route, { path: "/downloads", element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Downloads__WEBPACK_IMPORTED_MODULE_9__["default"], null) }))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_MiniDashboard__WEBPACK_IMPORTED_MODULE_11__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ActionButton__WEBPACK_IMPORTED_MODULE_10__["default"], null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTab);


/***/ }),

/***/ "./src/newTab/index.tsx":
/*!******************************!*\
  !*** ./src/newTab/index.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _NewTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewTab */ "./src/newTab/NewTab.tsx");




function init() {
    const appContainer = document.createElement('div');
    document.body.appendChild(appContainer);
    if (!appContainer) {
        throw new Error("Can not find App container");
    }
    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(appContainer);
    root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.HashRouter, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NewTab__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}
init();


/***/ }),

/***/ "./src/constants/index.ts":
/*!********************************!*\
  !*** ./src/constants/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apps": () => (/* binding */ apps)
/* harmony export */ });
const apps = [
	{
		id: "youtube",
		title: "YouTube",
		icon: "../static/icons/google-apps/youtube-color-icon.svg",
		href: "https://youtube.com",
		target: "_self"
	},
	{
		id: "drive",
		title: "Drive",
		icon: "../static/icons/google-apps/google-drive.svg",
		href: "https://www.google.com/drive/",
		target: "_self"
	},
	{
		id: "gmail",
		title: "G-Mail",
		icon: "../static/icons/google-apps/google-gmail.svg",
		href: "https://mail.google.com/",
		target: "_self"
	},
	{
		id: "docs",
		title: "Docs",
		icon: "../static/icons/google-apps/google-docs.svg",
		href: "https://docs.google.com/document/u/0/",
		target: "_self"
	},
	{
		id: "sheets",
		title: "Sheets",
		icon: "../static/icons/google-apps/google-sheets.svg",
		href: "https://docs.google.com/spreadsheets/u/0/",
		target: "_self"
	},
	{
		id: "slides",
		title: "Slides",
		icon: "../static/icons/google-apps/google-slides.svg",
		href: "https://docs.google.com/presentation/u/0/",
		target: "_self"
	},
	{
		id: "forms",
		title: "Forms",
		icon: "../static/icons/google-apps/google-forms.svg",
		href: "https://docs.google.com/forms/u/0/",
		target: "_self"
	},
	{
		id: "calendar",
		title: "Calendar",
		icon: "../static/icons/google-apps/google-calendar.svg",
		href: "https://calendar.google.com/calendar/u/0/r",
		target: "_self"
	},
	{
		id: "contacts",
		title: "Contacts",
		icon: "../static/icons/google-apps/google-contacts.svg",
		href: "https://contacts.google.com",
		target: "_self"
	},
	{
		id: "password",
		title: "Password",
		icon: "../static/icons/google-apps/google-password.svg",
		href: "https://password.google.com",
		target: "_self"
	}
];


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"newTab": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebdev_hq_chrome_extension"] = self["webpackChunkwebdev_hq_chrome_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getU-88f9d9","vendors-node_modules_react-router-dom_dist_index_js","src_assets_css_tailwind_css"], () => (__webpack_require__("./src/newTab/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=newTab.js.map