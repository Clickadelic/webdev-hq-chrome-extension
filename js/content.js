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
			:root {
				--wdhq-white: #ffffff;
				--wdhq-dashboard-bg: #f5f5f5;
				--wdhq-primary: #1890ff;
				--wdhq-box-shadow: rgb(0 0 0 / 8%) 0px 1px 4px;
				--wdhq-box-border: 1px solid rgb(230, 235, 241);
			}
			#webdev-hq-actionpanel {
				position: fixed;
				left: 50%;
    			transform: translateX(-50%);
				width: 1320px;
				height: 300px;
				margin: 0 auto;
				background: #f5f5f5;
				border-top-left-radius: 4px;
				border-top-right-radius: 4px;
				border: var(--wdhq-box-border);
				z-index: 1100;
			}
			.wdhq-panel-closed {
				bottom: -300px;
			}
			.wdhq-panel-open {
				bottom: 0;
			}
			#btn-panel-toggle {
				position: fixed;
				right: 2rem;
				bottom: 2rem;
				color: var(--wdhq-white);
				background-color:var(--wdhq-primary);
				padding: 1rem;
				border: 0;
				border-radius: 50%;
				box-shadow: var(--wdhq-box-shadow);
			}
			#btn-panel-toggle svg {
				position: relative;
				top: 3px;
			}
		`;
		head.appendChild(style)
	}

	addHtml(){

		const body = document.querySelector('body')
		const panel = document.createElement('div')
		const contentBox = document.createElement('div')
		const toggleBtn = document.createElement('button')
		const btnIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/></svg>`
		toggleBtn.innerHTML = btnIcon

		// The Panel
		toggleBtn.setAttribute('id', 'btn-panel-toggle')
		toggleBtn.addEventListener('click', () => {
			if(panel.classList.contains('wdhq-panel-closed')){
				panel.classList.remove('wdhq-panel-closed')
				panel.classList.add('wdhq-panel-open')
			} else {
				panel.classList.remove('wdhq-panel-open')
				panel.classList.add('wdhq-panel-closed')
			}
		})

		panel.setAttribute('id', 'webdev-hq-actionpanel')
		panel.classList.add('wdhq-content-box', 'wdhq-panel-closed')
		body.appendChild(panel)
		body.appendChild(toggleBtn)
	}

}

const myBox = new Actionpanel()