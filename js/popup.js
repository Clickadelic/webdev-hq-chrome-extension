window.addEventListener('DOMContentLoaded', function() {

    const dashboardLink = document.getElementById('dashboard-link');
	const optionsLink = document.getElementById('options-link');

    // onClick's logic below:
    dashboardLink.addEventListener('click', function() {
        const newURL = "chrome-extension://" + chrome.runtime.id + "/views/dashboard.html";
        chrome.tabs.create({ url: newURL });
    });
	optionsLink.addEventListener('click', function() {
        const newURL = "chrome-extension://" + chrome.runtime.id + "/views/options.html";
        chrome.tabs.create({ url: newURL });
    });
});