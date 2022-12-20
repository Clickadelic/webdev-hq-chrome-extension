const btn = document.getElementById("collect-href");

btn.addEventListener("click", () => {
	const linkurl = window.location.href;
	console.log("Content Script", linkurl);
});