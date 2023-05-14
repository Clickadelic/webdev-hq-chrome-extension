import React from 'react'

function Bookmarks() {

	function makeIndent(indentLength) {
		return ".".repeat(indentLength);
	}
	
	function logItems(bookmarkItem, indent) {
		if (bookmarkItem.url) {
			console.log(makeIndent(indent) + bookmarkItem.url);
		} else {
			console.log(`${makeIndent(indent)}Folder`);
			indent++;
		}
		if (bookmarkItem.children) {
			for (child of bookmarkItem.children) {
			logItems(child, indent);
			}
		}
		indent--;
	}
	
	function logTree(bookmarkItems) {
		logItems(bookmarkItems[0], 0);
	}
	
	function onRejected(error) {
		console.log(`An error: ${error}`);
	}
	
	let gettingTree = chrome.bookmarks.getTree();
	gettingTree.then(logTree, onRejected);
	  
	return (
		<div>Bookmarks</div>
	)
}

export default Bookmarks

