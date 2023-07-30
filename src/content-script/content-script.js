class WebDevHQButton {
    constructor() {
        this.createStyleTag();
        this.createElements();
    }
    createStyleTag() {
        const css = `
			.webdev-hq__button {
				position: fixed;
				right: 30px;
				bottom: 30px;
				border-radius: 4px;
				background-color: blue;
				color: white;
				padding: 1rem;
			}
		`;
        const style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        style.setAttribute('id', 'webdev-hq-btn-css');
        style.innerHTML = css;
        document.head.appendChild(style);
    }
    createElements() {
        const button = document.createElement("button");
        button.innerText = "Save";
        button.classList.add("webdev-hq__button");
        document.body.appendChild(button);
    }
}
window.onload = () => {
    const webdevhqbtn = new WebDevHQButton();
};
