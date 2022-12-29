class Actionbox {
	constructor(){
		this.addElement()
		this.addInlineStyle()
	}
	addElement(){
		const box = document.createElement('div')
		box.setAttribute('id', 'action-box')
		const body = document.querySelector('body')
		body.appendChild(box)
	}

	addInlineStyle(){
		const style = document.createElement('style')
		const head = document.querySelector('head')
		head.appendChild(style)
	}

}

const myBox = new Actionbox()