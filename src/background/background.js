chrome.runtime.onInstalled.addListener(rea => {
    if (rea.reason == "install") {
        chrome.tabs.create({
            url: "onboarding.html"
        });
    }
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (changeInfo.url) {
            // chrome.tabs.executeScript({
            // 	file: "content-script.js"
            // });
            alert("Changed some info" + changeInfo);
        }
    });
    chrome.contextMenus.create({
        id: "webdev-hq",
        title: "Save this page",
        type: "normal",
        contexts: ["all"]
    });
});
chrome.contextMenus.onClicked.addListener(info => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url = tabs[0].url;
        // use `url` here inside the callback because it's asynchronous!
        const tabList = tabs;
        console.log(tabs);
    });
});
// chrome.sidePanel.setPanelBehavior({openPanelOnActionClick: true});
