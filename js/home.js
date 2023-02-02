function homescreenSetup(){
	const toggleBtn = document.getElementById("btn-sidebar-toggle")
	toggleBtn.addEventListener("click", toggleSidebar)
	const megaMenuBtn = document.getElementById("toggle-mega-menu")
	megaMenuBtn.addEventListener("click", toggleMegaMenu)
}
homescreenSetup()

function toggleSidebar(){
	const sidebar = document.getElementById("App-sidebar")
	const header = document.getElementById("App-header")
	const sidebarTexts = document.getElementsByClassName("sidebar-text")

	if((sidebar.classList.contains("w-64")) && (header.classList.contains("ml-64"))){
		sidebar.classList.remove("w-64")
		header.classList.remove("ml-64")

		sidebar.classList.add("w-16")
		header.classList.add("ml-16")
		for (let item of sidebarTexts) {
			item.classList.add("hidden")
		}
	} else {
		sidebar.classList.remove("w-16")
		header.classList.remove("ml-16")

		sidebar.classList.add("w-64")
		header.classList.add("ml-64")
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