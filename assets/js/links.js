function logTabs(tabs) {
	// tabs[0].url requires the `tabs` permission or a matching host permission.
	console.log(tabs[0].url);
}
  
function onError(error) {
	console.error(`Error: ${error}`);
}
  
browser.tabs
	.query({ currentWindow: true, active: true })
	.then(logTabs, onError);
  