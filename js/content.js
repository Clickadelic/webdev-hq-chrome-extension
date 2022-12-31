class Actionpanel {

	constructor(){
		this.addInlineStyle()
		this.addHtml()
	}

	addInlineStyle(){
		
		const style = document.createElement('style')
		const head = document.querySelector('head')
		style.setAttribute('id', 'webdev-hq-actionpanel-css')
		// CSS
		style.textContent = `
			#webdev-hq-actionpanel {
				position: absolute;
				left: 50%;
    			transform: translateX(-50%);
				bottom: 0;
				width: 800px;
				height: 300px;
				margin: 0 auto;
				background: #f5f5f5;
				border-top-left-radius: 4px;
				border-top-right-radius: 4px;
				z-index: 1100;
			}

			#btn-panel-toggle {
				position: absolute;
				top: -20px;
				left: 50%;
				transform: translateX(-50%);
			}
		`;
		head.appendChild(style)
	}

	addHtml(){
		const panel = document.createElement('div')
		const toggleBtn = document.createElement('button')

		const toggleBtnText = document.createTextNode('WebDev HQ')

		toggleBtn.innerText = toggleBtnText.textContent

		// The Panel
		toggleBtn.setAttribute('id', 'btn-panel-toggle')

		panel.setAttribute('id', 'webdev-hq-actionpanel')
		panel.appendChild(toggleBtn)

		const body = document.querySelector('body')
		body.appendChild(panel)
	}

}

const myBox = new Actionpanel()