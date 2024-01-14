/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************************!*\
  !*** ./src/content-script/content-script.ts ***!
  \**********************************************/
class WebDevHQButton {
	constructor() {
		this.createStyleTagWithStyles();
		this.createElements();
	}
	createStyleTagWithStyles() {
		const css = `
			.webdev-hq__button {
				position: fixed;
				right: 0px;
				bottom: 0px;
				border-top-left-radius: 4px;
				background-color: #ccc;
				color: white;
				padding: 1rem;
			}
		`;
		const style = document.createElement("style");
		style.setAttribute("type", "text/css");
		style.setAttribute("id", "webdev-hq-btn-css");
		style.innerHTML = css;
		document.head.appendChild(style);
	}
	createElements() {
		const button = document.createElement("button");
		button.innerText = "Save";
		button.classList.add("webdev-hq__button");
		// button.addEventListener("click", () => {
		// TODO: Button Action
		// });
		document.body.appendChild(button);
	}
}

window.onload = () => {
	const webdevhqbtn = new WebDevHQButton();
};

/******/ })()
;
//# sourceMappingURL=contentScript.js.map