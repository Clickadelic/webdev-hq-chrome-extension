/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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

const Logo = ({ headingClasses, classes }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: headingClasses },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "https://webdev-hq.com/", className: classes },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: "../static/icons/extension/icon-32.png", className: "logo inline mr-2 -mt-1", alt: "WebDev HQ Logo" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "font-light" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "web" }, "Web"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "dev-hq font-medium" }, "Dev HQ")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);


/***/ }),

/***/ "./src/dashboard/_components/Dashboard.tsx":
/*!*************************************************!*\
  !*** ./src/dashboard/_components/Dashboard.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_css_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/css/tailwind.css */ "./src/assets/css/tailwind.css");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Logo */ "./src/components/Logo/index.tsx");



function Dashboard() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white/10 backdrop backdrop-blur" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "App min-h-screen" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("aside", { className: "App-sidebar hidden fixed md:block top-0 left-0 w-64 min-h-screen bg-white border-r" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "App-sidebar-logo hidden md:flex justify-center px-2 py-3" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], { classes: "text-slate-700" })),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", { className: "sidebar-section mt-10 mb-6" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "text-slate-500 text-sm inline-block ml-4 mb-2" }, "Dashboard"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "sidebar-nav mb-2" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "/", className: "flex justify-between px-4 py-2 bg-sky-100 border-r-2 border-r-sky-500" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "flex" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-speedometer2 mt-1 mr-2", viewBox: "0 0 16 16" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4M3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fillRule: "evenodd", d: "M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10m8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3" })),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "text-base font-medium" }, "Dashboard")),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-chevron-up mt-1", viewBox: "0 0 16 16" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fillRule: "evenodd", d: "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" })))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "mb-0 ml-0" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "block text-slate-600 hover:bg-slate-50 hover:border-r-2 py-1.5 pl-10", href: "/" }, "Default")),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "block text-slate-600 hover:bg-slate-50 hover:border-r-2 py-1.5 pl-10", href: "/" }, "Analytics"))))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "text-slate-500 text-sm inline-block ml-4 mb-2" }, "Projects"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "sidebar-nav mb-2" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "/", className: "flex justify-between px-4 py-2 bg-sky-100 border-r-2 border-r-sky-500" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "flex" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-buildings mt-1 mr-2", viewBox: "0 0 16 16" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z" }),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z" })),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "text-base font-medium" }, "Projects")),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-chevron-up mt-1", viewBox: "0 0 16 16" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fillRule: "evenodd", d: "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" })))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "mb-0 ml-0" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "block text-slate-600 hover:bg-slate-50 hover:border-r-2 py-1.5 pl-10", href: "/" }, "Project Data")),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "block text-slate-600 hover:bg-slate-50 hover:border-r-2 py-1.5 pl-10", href: "/" }, "Business Intelligence"))))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "text-slate-500 text-sm inline-block ml-4 mb-2" }, "Environments"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "sidebar-nav mb-2" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "/", className: "flex justify-between px-4 py-2 bg-sky-100 border-r-2 border-r-sky-500" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "flex" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-signpost-split mt-1 mr-2", viewBox: "0 0 16 16" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M7 7V1.414a1 1 0 0 1 2 0V2h5a1 1 0 0 1 .8.4l.975 1.3a.5.5 0 0 1 0 .6L14.8 5.6a1 1 0 0 1-.8.4H9v10H7v-5H2a1 1 0 0 1-.8-.4L.225 9.3a.5.5 0 0 1 0-.6L1.2 7.4A1 1 0 0 1 2 7zm1 3V8H2l-.75 1L2 10zm0-5h6l.75-1L14 3H8z" })),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "text-base font-medium" }, "Environments")),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-chevron-up mt-1", viewBox: "0 0 16 16" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fillRule: "evenodd", d: "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" })))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "mb-0 ml-0" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "block text-slate-600 hover:bg-slate-50 hover:border-r-2 py-1.5 pl-10", href: "/" }, "Development")),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "block text-slate-600 hover:bg-slate-50 hover:border-r-2 py-1.5 pl-10", href: "/" }, "Production")))))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "absolute block left-0 bottom-0 w-100 p-1 bg-slate-200" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: "/public/Avatar-1.png", className: "w-12 h-12 m-2 ml-4 rounded-full border border-gray-200", alt: "User Avatar" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "flex flex-col mt-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "font-medium text-sm" }, "JWT User"),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "text-sm text-neutral-500" }, "Administrator")))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", { className: "App-header flex fixed top-0 md:ml-64 w-screen p-2 border-b bg-white" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", { className: "flex justify-between w-max" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "p-0" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "/", className: "border rounded w-8 h-8 p-2 md:hidden" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: "../public/Dashboard.svg", className: "logo w-6 h-6 inline -mt-1", alt: "Tailwind Dashboard" }),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "text-base hidden" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "font-medium" }, "Tailwind"),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Dashboard"))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "hidden md:inline hover:bg-slate-100 ml-3 mr-1 rounded p-2 pt-1", id: "btn-sidebar-toggle" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-text-indent-right", viewBox: "0 0 16 16" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" }))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "search", name: "search", className: "search-input-mobile md:hidden p-2 border rounded-md ml-3 mt-1", placeholder: "Search" }),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "search", name: "search", className: "search-input-desktop hidden md:inline p-2 border rounded-md ml-3 mt-1", placeholder: "Search / CTRL + K" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "fixed right-5 md:hidden bg-slate-100 rounded p-2 mt-1" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-text-indent-right", viewBox: "0 0 16 16" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" }))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "hidden fixed right-5 md:inline-flex md:mt-1 px-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "hover:bg-slate-100 mt-1 mx-1 inline-flex p-2 rounded mega-menu-trigger" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-windows", viewBox: "0 0 16 16" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M6.555 1.375 0 2.237v5.45h6.555zM0 13.795l6.555.933V8.313H0v5.482zm7.278-5.4.026 6.378L16 16V8.395H7.278zM16 0 7.33 1.244v6.414H16z" }))),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grid grid-cols-3 hidden w-860 h-72 rounded-md overflow-hidden top-12 right-12 bg-white shadow-md border" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "gradient bg-waves p-8 flex flex-col" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "text-white text-2xl font-medium mb-6" }, "Explore your Data"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-white mb-4" }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quod."),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "text-slate-600 bg-slate-50 p-2 mt-5 rounded-md" }, "View")),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "p-8" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "block font-medium mb-4" }, "Authentication"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "list-disc ml-5" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "mb-2 block hover:text-slate-500", href: "/" }, "Login")),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "mb-2 block hover:text-slate-500", href: "/" }, "Register")),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "mb-2 block hover:text-slate-500", href: "/" }, "Forgot Password")),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "mb-2 block hover:text-slate-500", href: "/" }, "Delete Account")))),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "p-8" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "block font-medium mb-4" }, "Dashboard"),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "list-disc ml-5" },
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "mb-2 block hover:text-slate-500", href: "/" }, "Overview")),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "mb-2 block hover:text-slate-500", href: "/" }, "Data Sets")),
                                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { className: "mb-2 block hover:text-slate-500", href: "/" }, "Administration")))))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "hover:bg-slate-100 mt-1 mx-1 inline-flex p-2 rounded" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-translate", viewBox: "0 0 16 16" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" })))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "hover:bg-slate-100 mt-1 mx-1 inline-flex p-2 rounded" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-bell", viewBox: "0 0 16 16" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6" })))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "hover:bg-slate-100 mt-1 mx-1 inline-flex p-2 rounded" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-envelope", viewBox: "0 0 16 16" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" })))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "hover:bg-slate-100 mt-1 mx-1 inline-flex p-2 rounded" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-arrows-fullscreen", viewBox: "0 0 16 16" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fillRule: "evenodd", d: "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707" })))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "hover:bg-slate-100 mt-1 mx-1 inline-flex p-2 rounded" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-gear", viewBox: "0 0 16 16" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" })))),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "hover:bg-slate-100 mx-2 inline-flex p-2 rounded" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-person-circle mt-1 mr-2", viewBox: "0 0 16 16" },
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" }),
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { fillRule: "evenodd", d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" })),
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Username")))))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "pt-16 pl-4 pr-4 md:pl-72 md:pt-24 md:w-full min-h-screen" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "breadcrumb-navigation mb-6" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "flex" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "/", className: "text-slate-400" }, "Home")))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", { className: "md:w-full" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white rounded-lg pb-2 mb-3 border border-slate-200 overflow-hidden" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "font-medium w-100 p-3 mb-2 bg-sky-200" }, "Box"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "mx-3" }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, tempore!")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white rounded-lg pb-2 mb-3 border border-slate-200 overflow-hidden" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "font-medium w-100 p-3 mb-2 bg-amber-200" }, "Box"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "mx-3" }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, tempore!")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white rounded-lg pb-2 mb-3 border border-slate-200 overflow-hidden" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "font-medium w-100 p-3 mb-2 bg-fuchsia-200" }, "Box"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "mx-3" }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, tempore!")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white rounded-lg pb-2 mb-3 border border-slate-200 overflow-hidden" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "font-medium w-100 p-3 mb-2 bg-rose-200" }, "Box"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "mx-3" }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, tempore!"))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "grid grid-rows-3 grid-flow-col gap-3" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "row-span-3 bg-white rounded-lg p-2 px-3" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "font-medium" }, "Box"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "mx-3" }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quaerat.")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "col-span-2 bg-white rounded-lg p-2 px-3" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "font-medium" }, "Box"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quaerat.")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "row-span-2 col-span-2 bg-white rounded-lg p-2 px-3" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "font-medium" }, "Box"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quaerat.")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white rounded-lg p-2 px-3" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "font-medium" }, "Box"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quaerat.")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bg-white rounded-lg p-2 px-3" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "font-medium" }, "Box"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quaerat."))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);


/***/ }),

/***/ "./src/dashboard/index.tsx":
/*!*********************************!*\
  !*** ./src/dashboard/index.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _components_Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components/Dashboard */ "./src/dashboard/_components/Dashboard.tsx");




function init() {
    const appContainer = document.createElement("div");
    document.body.appendChild(appContainer);
    if (!appContainer) {
        throw new Error("Can not find App container");
    }
    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(appContainer);
    console.log(appContainer);
    root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.HashRouter, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Dashboard__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}
init();


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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"dashboard": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-dom_client_js","vendors-node_modules_react-router-dom_dist_index_js","src_assets_css_tailwind_css"], () => (__webpack_require__("./src/dashboard/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=dashboard.js.map