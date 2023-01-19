class WebDevBox {

	constructor(){
		this.addInlineStyle()
		this.addHtml()
		this.addActions()
	}

	addInlineStyle(){
		const style = document.createElement('style')
		const head = document.querySelector('head')
		style.setAttribute('id', 'webdev-hq-inline-style')
		// CSS
		style.textContent = `
			:root {
				--wdhq-white: #ffffff;
				--wdhq-dashboard-bg: #f5f5f5;
				--wdhq-primary: #3b82f6;
				--wdhq-accent: #f63b4e;
				--wdhq-box-shadow: rgb(0 0 0 / 8%) 0px 1px 4px;
				--wdhq-box-border: 1px solid rgb(230, 235, 241);
			}
			#webdev-hq-box {
				position: fixed;
				top: 50%;
				right: 0;
				background: transparent;
				transform: translatey(-50%);
				border-top-left-radius: 4px;
				border-bottom-left-radius: 4px;
				padding: 0;
				margin: 0;
			}
			#collect-btn {
				background: var(--wdhq-primary);
				border: none;
				color: var(--wdhq-white);
				padding: .5rem;
				border-top-left-radius: 4px;
				border-bottom-left-radius: 4px;
			}
			#collect-btn svg {
				position: relative;
				top: 4px;
				margin: .5rem;
			}
			#collect-btn:hover {
				background: red;
				cursor: pointer;
			}

		`;
		head.appendChild(style)
	}

	addHtml(){
		// Setup
		const body = document.querySelector('body')
		const devbox = document.createElement('div')
		const collectBtn = document.createElement('button')

		collectBtn.setAttribute('id', 'collect-btn')
		const saveIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bookmark-plus" viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/><path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z"/></svg>`
		collectBtn.innerHTML = saveIcon
		devbox.setAttribute('id', 'webdev-hq-box')



		// Add to divbox
		devbox.appendChild(collectBtn)
		
		// add everything
		body.appendChild(devbox)
	}

	addActions(){
		const collectBtn = document.getElementById('collect-btn')
		collectBtn.addEventListener('click', () => {
			alert("ConJulio")
		})
	}

}

const myBox = new WebDevBox()

// alert('Hello, world!');