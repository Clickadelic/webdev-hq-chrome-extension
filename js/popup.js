const runtimeId = chrome.runtime.id

const tabs = await chrome.tabs.query({
	url: [
	  "https://*/*",
	  "http://*/*"
	]
});

const collator = new Intl.Collator();
tabs.sort((a, b) => collator.compare(a.title, b.title));

const li_template = document.getElementById("li_template");
const elements = new Set();

const history_template = document.getElementById("history_template");
const userHistory = new Set();

for (const tab of tabs) {
	// Scoop up elements
	const element = li_template.content.firstElementChild.cloneNode(true);
	const title = tab.title.split("-")[0].trim();
	const pathname = new URL(tab.url).pathname.slice("/docs".length);
	const length = 80;
	const trimmedTitle = title.substring(0, length);

	element.querySelector("img.favicon").src = tab.favIconUrl;
	element.querySelector(".title").textContent = trimmedTitle;
	element.querySelector(".pathname").textContent = pathname;
	element.querySelector("a.linktext").addEventListener("click", async () => {
		// need to focus window as well as the active tab
		await chrome.tabs.update(tab.id, { active: true });
		await chrome.windows.update(tab.windowId, { focused: true });
	});

	element.querySelector("button.btn-collect-link").addEventListener("click", async () => {
		alert(tab.url)
	});

	elements.add(element);
}
document.querySelector("#tabList").append(...elements);

chrome.history.search({text: '', maxResults: 10}, function(page){
	page.forEach(function(page) {
		console.log(page)
		const element = history_template.content.firstElementChild.cloneNode(true);
		const link = element.firstElementChild
		link.setAttribute("href", page.url)
		link.innerText = page.title
		userHistory.add(element)
    })
	document.querySelector("#history-tabs").append(...userHistory);
})
