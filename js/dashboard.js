function dashboardSetup(){
	const toggleBtn = document.getElementById("btn-sidebar-toggle")
	toggleBtn.addEventListener("click", toggleSidebar)
}
dashboardSetup()

function toggleSidebar(){

	const sidebarText = document.getElementsByClassName("sidebar-text")
	const navbarLogo = document.getElementById("App-logo")
	const sidebar = document.getElementById("App-sidebar")
	const navbar = document.getElementById("App-navbar")

	if(sidebar.style.backgroundColor == "green"){
		sidebar.style.backgroundColor = "red"
	} else {
		sidebar.style.backgroundColor = "green"
	}

}