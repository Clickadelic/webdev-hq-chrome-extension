chrome.runtime.onInstalled.addListener(() => {
    console.log("huhu");
});
chrome.bookmarks.onCreated.addListener(() => {
    console.log("Bookmark created");
});
// function getClickHandler() {
// 	return function(info, tab) {
// 		// The srcUrl property is only available for image elements.
// 		var url = "http://regex.info/exif.cgi?imgurl=" + info.srcUrl;
// 		// Create a new tabto the info page
//   		chrome.tabs.create({ url: url, });
// 	};
// };
/**
 * Create a context menu which will only show up for images.
 */
// chrome.contextMenus.create({
// 	"title" : "Get image info via Jeffrey's Exif Viewer",
// 	"type" : "normal",
// 	"contexts" : ["image"],
// 	"onclick" : getClickHandler()
// });
