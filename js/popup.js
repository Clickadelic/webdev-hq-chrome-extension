const runtimeId = chrome.runtime.id

const tabs = await chrome.tabs.query({
	url: [
	  "https://*/*",
	  "http://*/*"
	],
});

const collator = new Intl.Collator();
tabs.sort((a, b) => collator.compare(a.title, b.title));

const template = document.getElementById("li_template");
const elements = new Set();

for (const tab of tabs) {
	const element = template.content.firstElementChild.cloneNode(true);

	// const endpoint = "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://`${domain}`&size=64"

	const title = tab.title.split("-")[0].trim();
	const pathname = new URL(tab.url).pathname.slice("/docs".length);
	const length = 80;
	const trimmedTitle = title.substring(0, length);
	element.querySelector(".title").textContent = trimmedTitle;
	element.querySelector(".pathname").textContent = pathname;
	element.querySelector("a.linktext").addEventListener("click", async () => {
		// need to focus window as well as the active tab
		await chrome.tabs.update(tab.id, { active: true });
		await chrome.windows.update(tab.windowId, { focused: true });
	});
	element.querySelector("button.btn-collect-link").addEventListener("click", async () => {
		alert(tab.id)
	});

	elements.add(element);
}
document.querySelector("#tabList").append(...elements);

const dashboardBtn = document.querySelector("#btn-open-dashboard");
dashboardBtn.addEventListener("click", async () => {
	const dashboardUrl = "chrome-extension://"+ runtimeId + "/views/dashboard.html"
	chrome.tabs.create({url: dashboardUrl, active: true})
});

const optionsBtn = document.querySelector("#btn-open-options");
optionsBtn.addEventListener("click", async () => {
	const optionsUrl = "chrome-extension://"+ runtimeId + "/views/options.html"
	chrome.tabs.create({url: optionsUrl, active: true})
});

const tabsBtn = document.querySelector("#btn-group-tabs");
tabsBtn.addEventListener("click", async () => {
  const tabIds = tabs.map(({ id }) => id);
  const group = await chrome.tabs.group({ tabIds });
  await chrome.tabGroups.update(group, { title: "DOCS" });
});

const accountBtn = document.querySelector("#btn-open-accountpage");
accountBtn.addEventListener("click", async () => {
	const optionsUrl = "chrome-extension://"+ runtimeId + "/views/account.html"
	chrome.tabs.create({url: optionsUrl, active: true})
});