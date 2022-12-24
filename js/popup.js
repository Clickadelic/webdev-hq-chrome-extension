


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
var tabList = [].slice.call(document.querySelectorAll("#extension-nav li a"));
tabList.forEach(function (triggerEl) {
	prepareTabs(triggerEl);
});


(function(){let script=document.createElement('script');script.src='js/bookmarklet.js';document.body.appendChild(script);})()