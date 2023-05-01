class ActionButton {

	constructor(){
		this.createStyleTag()
	}
	createStyleTag(){
		const style = document.createElement('style')
		style.setAttribute('type', 'text/css')
		style.setAttribute('id', 'webdev-hq-btn-css')
		document.head.appendChild(style)
	}
	createElements(){
		const button = document.createElement("button")
		button.innerText = "Save"
		document.body.appendChild(button)
	}
}

window.onload = () => {
	const webdevhqbtn = new ActionButton()
}