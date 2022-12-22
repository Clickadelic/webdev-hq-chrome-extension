
function devSysLogs(){
	var extensionId = chrome.i18n.getMessage("@@extension_id");
	var runtimeId = chrome.rundtime.id;
	console.log(`WebDev HQ Chrome Extension ID (by i18n message): ${extensionId}`);
	console.log(`WebDev HQ Chrome Extension ID (by runtime id): ${runtimeId}`);
}

devSysLogs()