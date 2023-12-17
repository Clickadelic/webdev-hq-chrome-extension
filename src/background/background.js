chrome.runtime.onInstalled.addListener(() => {
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
