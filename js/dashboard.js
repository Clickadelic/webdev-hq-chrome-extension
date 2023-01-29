function dashboardSetup(){
	const toggleBtn = document.getElementById("btn-sidebar-toggle")
	toggleBtn.addEventListener("click", toggleSidebar)
	const megaMenuBtn = document.getElementById("toggle-mega-menu")
	megaMenuBtn.addEventListener("click", toggleMegaMenu)
}
dashboardSetup()

function toggleSidebar(){
	const sidebar = document.getElementById("App-sidebar")
	const navbar = document.getElementById("App-navbar")
	const sidebarTexts = document.getElementsByClassName("sidebar-text")
	if((sidebar.classList.contains("w-64")) && (navbar.classList.contains("md:ml-64"))){
		sidebar.classList.remove("w-64")
		navbar.classList.remove("md:ml-64")
		navbar.classList.add("md:ml-16")
		for (let item of sidebarTexts) {
			item.classList.add("hidden")
		}
	} else {
		sidebar.classList.add("w-64")
		navbar.classList.remove("md:ml-16")
		navbar.classList.add("md:ml-64")
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