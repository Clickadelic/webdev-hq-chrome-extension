class WebDevHQButton {
  constructor() {
    this.createStyleTagWithStyles();
    this.createElements();
  }
  createStyleTagWithStyles() {
    const css = `
			.webdev-hq__button {
				position: fixed;
				right: 10px;
				bottom: 10px;
				border-radius: 4px;
				background-color: blue;
				color: white;
				padding: .5rem;
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
    button.addEventListener("click", () => {
      // const url = fetch('https://api.tobias-hopp.de/common/v1/links/')
      alert("Button clicked");
    });
    document.body.appendChild(button);
  }
}

window.onload = () => {
  const webdevhqbtn = new WebDevHQButton();
};
