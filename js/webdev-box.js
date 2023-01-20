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
				--wdhq-decent: #f5f5f5;
				--wdhq-box-shadow: rgb(0 0 0 / 8%) 0px 1px 4px;
				--wdhq-box-border: 1px solid rgb(230, 235, 241);
			}
			#webdev-hq-box {
				position: fixed;
				top: 50%;
				right: 0;
				// background: var(--wdhq-white);
				background: transparent;
				transform: translatey(-50%);
				border-top-left-radius: 4px;
				border-bottom-left-radius: 4px;
				padding: 1px;
				margin: 0;
			}
			#webdev-hq-box nav {
				margin: 0;
				padding: 0;
			}
			#webdev-hq-box nav ul {
				display: block;
				width: 100%;
				margin: 0;
				padding: 0;
			}
			#webdev-hq-box nav ul li {
				list-style: none;
			}
			#webdev-hq-box nav ul li:first-child button {
				border-top-left-radius: 4px;
			}
			#webdev-hq-box nav ul li:last-child button {
				border-bottom-left-radius: 4px;
			}
			.wdhq-btn {
				background: var(--wdhq-decent);
				border: none;
				color: var(--wdhq-white);
				padding: .5rem;
			}
			.wdhq-btn svg {
				position: relative;
				top: 4px;
				margin: .25rem;
				color: var(--wdhq-primary);
			}
			.wdhq-btn:hover {
				background: var(--wdhq-primary);
				color: var(--wdhq-white);
				cursor: pointer;
			}
			.wdhq-btn:hover svg {
				color: var(--wdhq-white);
			}
		`;
		head.appendChild(style)
	}

	addHtml(){
		// Setup
		const body = document.querySelector('body')
		const devbox = document.createElement('div')
		
		const nav = document.createElement('nav')
		const ul = document.createElement('ul')
		const list_item_1 = document.createElement('li')
		const list_item_2 = document.createElement('li')
		const list_item_3 = document.createElement('li')
		
		devbox.setAttribute('id', 'webdev-hq-box')
		devbox.appendChild(nav)
		nav.appendChild(ul)
		
		const bookmarkBtn = document.createElement('button')
		bookmarkBtn.setAttribute('id', 'bookmark-btn')
		bookmarkBtn.setAttribute('class', 'wdhq-btn')
		const bookmarkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bookmark-plus" viewBox="0 0 16 16"><path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/><path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z"/></svg>`
		bookmarkBtn.innerHTML = bookmarkIcon
		list_item_1.appendChild(bookmarkBtn)

		const dashboardBtn = document.createElement('button')
		dashboardBtn.setAttribute('id', 'dashboard-btn')
		dashboardBtn.setAttribute('class', 'wdhq-btn')
		const dashboardIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-speedometer2" viewBox="0 0 16 16">
		<path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
		<path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
	  </svg>`
		dashboardBtn.innerHTML = dashboardIcon
		list_item_2.appendChild(dashboardBtn)

		const optionsBtn = document.createElement('button')
		optionsBtn.setAttribute('id', 'options-btn')
		optionsBtn.setAttribute('class', 'wdhq-btn')
		const gearIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/></svg>`
		optionsBtn.innerHTML = gearIcon
		list_item_3.appendChild(optionsBtn)

		// Add to divbox
		ul.appendChild(list_item_1)
		ul.appendChild(list_item_2)
		ul.appendChild(list_item_3)
		
		// add everything
		body.appendChild(devbox)
	}

	addActions(){
		const bookmarkBtn = document.getElementById('bookmark-btn')
		bookmarkBtn.addEventListener('click', () => {
			alert("Bookmark me")
		})

		const dashboardBtn = document.getElementById('dashboard-btn')
		dashboardBtn.addEventListener('click', () => {
			let newURL = "chrome-extension://" + chrome.runtime.id + "/views/dashboard.html"
        	chrome.tabs.create({ url: newURL });
		})

		// const optionsBtn = document.getElementById('options-btn')
		// optionsBtn.addEventListener('click', () => {
		// 	let newURL = "chrome-extension://" + chrome.runtime.id + "/views/options.html";
        // 	chrome.tabs.create({ url: newURL });
		// })
	}

}

const myBox = new WebDevBox()