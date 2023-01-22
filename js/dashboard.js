function dashboardSetup(){
	const toggleBtn = document.getElementById("btn-sidebar-toggle")
	toggleBtn.addEventListener("click", toggleSidebar)
}
dashboardSetup()

function toggleSidebar(){
	
	const sidebar = document.getElementById("App-sidebar")
	if(sidebar.style.backgroundColor == "green"){
		sidebar.style.backgroundColor = "red"
	} else {
		sidebar.style.backgroundColor = "green"
	}
}