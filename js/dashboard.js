
function devSysLogs(){
	const extensionId = chrome.i18n.getMessage("@@extension_id");
	console.log(`WebDev HQ Chrome Extension ID (by i18n message): ${extensionId}`);
}
devSysLogs()