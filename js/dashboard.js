function dashboardSetup(){
	const toggleBtn = document.getElementById("btn-sidebar-toggle")
	toggleBtn.addEventListener("click", toggleSidebar)
}

dashboardSetup()

function toggleSidebar(){
	const sidebar = document.getElementById("App-sidebar")
	sidebar.classList.toggle("md:block")
}