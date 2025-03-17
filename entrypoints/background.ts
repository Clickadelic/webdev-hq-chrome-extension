export default defineBackground(() => {
  console.log("Hello background!", { id: browser.runtime.id });
});

const tldLocales = {
  "com.de": "Germany",
};

chrome.runtime.onInstalled.addListener(async () => {
  for (let [tld, locale] of Object.entries(tldLocales)) {
    chrome.contextMenus.create({
      id: tld,
      title: locale,
      type: "normal",
      contexts: ["selection"],
    });
  }
});
