const runtimeId = chrome.runtime.id

const tabs = await chrome.tabs.query({
	url: [
	  "https://*/*"
	],
});

const collator = new Intl.Collator();
tabs.sort((a, b) => collator.compare(a.title, b.title));

const template = document.getElementById("li_template");
const elements = new Set();

for (const tab of tabs) {
  const element = template.content.firstElementChild.cloneNode(true);

	const title = tab.title.split("-")[0].trim();
	const pathname = new URL(tab.url).pathname.slice("/docs".length);

	element.querySelector(".title").textContent = title;
	element.querySelector(".pathname").textContent = pathname;
	element.querySelector("a").addEventListener("click", async () => {
		// need to focus window as well as the active tab
		await chrome.tabs.update(tab.id, { active: true });
		await chrome.windows.update(tab.windowId, { focused: true });
	});

  elements.add(element);
}
document.querySelector("#tabList").append(...elements);

const tabsBtn = document.querySelector("#tabsBtn");
tabsBtn.addEventListener("click", async () => {
  const tabIds = tabs.map(({ id }) => id);
  const group = await chrome.tabs.group({ tabIds });
  await chrome.tabGroups.update(group, { title: "DOCS" });
});

const dashboardBtn = document.querySelector("#dashboardBtn");
dashboardBtn.addEventListener("click", async () => {
	const dashboardUrl = "chrome-extension://"+ runtimeId + "/views/dashboard.html"
	chrome.tabs.create({url: dashboardUrl, active: true})
});