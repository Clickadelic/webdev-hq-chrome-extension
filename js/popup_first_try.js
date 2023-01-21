window.addEventListener('DOMContentLoaded', function() {
	chrome.identity.getProfileUserInfo({'accountStatus': 'ANY'}, (info) => {
		
		const extensionBaseUrl = "chrome-extension://"
		const runtimeId =  chrome.runtime.id
		const loginTemplate = document.getElementById("login-template")
		const navbarTemplate = document.getElementById("navbar-template")
		
		const loginView = loginTemplate.content.firstElementChild.cloneNode(true)
		document.body.appendChild(loginView)

	})
})