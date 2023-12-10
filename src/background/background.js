chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "webdev-hq",
        title: "save @ WebDev HQ",
        type: "normal",
        contexts: ["all"]
    });
});
chrome.contextMenus.onClicked.addListener((info) => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url = tabs[0].url;
        // use `url` here inside the callback because it's asynchronous!
        console.log(url);
    });
});
// chrome.sidePanel.setPanelBehavior({openPanelOnActionClick: true});
