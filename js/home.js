function homescreenSetup(){
	const toggleBtn = document.getElementById("btn-sidebar-toggle")
	toggleBtn.addEventListener("click", toggleSidebar)
	const megaMenuBtn = document.getElementById("toggle-mega-menu")
	megaMenuBtn.addEventListener("click", toggleMegaMenu)
	const langBtn = document.getElementById("language-menu")
	langBtn.addEventListener("click", togglelanguageMenu)
}
homescreenSetup()

function toggleSidebar(){
	const sidebar = document.getElementById("App-sidebar")
	const header = document.getElementById("App-header")
	const sidebarTexts = document.getElementsByClassName("sidebar-text")
	const main = document.getElementById("main-content")
	if((sidebar.classList.contains("w-64")) && (header.classList.contains("ml-64"))){
		sidebar.classList.remove("w-64")
		header.classList.remove("ml-64")

		sidebar.classList.add("w-16")
		header.classList.add("ml-16")

		main.classList.remove("ml-48")
		main.classList.add("ml-24")
		for (let item of sidebarTexts) {
			item.classList.add("hidden")
		}
	} else {
		sidebar.classList.remove("w-16")
		header.classList.remove("ml-16")

		sidebar.classList.add("w-64")
		header.classList.add("ml-64")

		main.classList.add("ml-48")
		main.classList.remove("ml-24")
		for (let item of sidebarTexts) {
			item.classList.remove("hidden")
		}
	}
}

function toggleMegaMenu(){
	const megaMenu = document.getElementById("mega-menu")
	if(megaMenu.classList.contains("hidden")){
		megaMenu.classList.remove("hidden")
		megaMenu.classList.add("grid")
	} else {
		megaMenu.classList.add("hidden")
		megaMenu.classList.remove("grid")
	}
}

function togglelanguageMenu() {
	const languageMenu = document.getElementById("language-dropdown")
	if(languageMenu.classList.contains("hidden")){
		languageMenu.classList.remove("hidden")
	} else {
		languageMenu.classList.add("hidden")
	}
}

function toggleaccountMenu() {
	const accountMenu = document.getElementById("account-dropdown")
	if(accountMenu.classList.contains("hidden")){
		accountMenu.classList.remove("hidden")
	} else {
		accountMenu.classList.add("hidden")
	}
}

function actionSearchbla(){
	let term = '';
	alert(`https://www.google.com/search?q=${term}`)
}

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59

    var session = "AM";
    
    
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

    
    var time = h + ":" + m;
    document.getElementById("digital-clock").innerText = time;
    document.getElementById("digital-clock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();