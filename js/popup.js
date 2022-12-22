
function devSysLogs(){
	var extensionId = chrome.i18n.getMessage("@@extension_id");
	var runtimeId = chrome.runtime.id;
	console.log(`WebDev HQ Chrome Extension ID (by i18n message): ${extensionId}`);
	console.log(`WebDev HQ Chrome Extension ID (by runtime id): ${runtimeId}`);
}

devSysLogs()

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('open-dashboard').addEventListener('click', function() {
		chrome.tabs.create({url: "./views/dashboard.html"});
	});
});


/**
 * Simulate a click event.
 * @public
 * @param {Element} elem  the element to simulate a click on
 */
function simulateClick(elem) {
	// Create our event (with options)
	var evt = new MouseEvent('click', {
		bubbles: true,
		cancelable: true,
		view: window
	});
	// If cancelled, don't dispatch our event
	var canceled = !elem.dispatchEvent(evt);
};

function prepareTabs(triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl)
    triggerEl.addEventListener('click', function (event) {
        event.preventDefault()
        //alert('test-'+this.parentNode.tagName);
        tabTrigger.show()

        //console.log('>>>' + this.parentNode.tagName);
        //console.log('>>>>' + this.parentNode.parentNode.tagName);
        var sibling = this.parentNode.parentNode.firstChild;
        // Loop through each sibling and push to the array
        while (sibling) {
            if (sibling.tagName !== undefined) 
            {
                //console.log('>>>' + sibling.tagName);
                //console.log('--->' + sibling.classList);
                //console.log('>>' + sibling.firstChild.href);
                sibling.classList.remove('active');
            }
            sibling = sibling.nextSibling;
        }
        this.parentNode.classList.add('active');
        console.log('href = ' + this.href);
        simulateClick(document.querySelector(this.href));
    })
}

// Tabs
var triggerTabListTest = [].slice.call(document.querySelectorAll("#authTabs a"));
triggerTabListTest.forEach(function (triggerEl) {
  prepareTabs(triggerEl);
});