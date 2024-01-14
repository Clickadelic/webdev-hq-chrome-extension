import React from "react";

const Identity = () => {
	let email: string = "";

	// sync on only users
	chrome.identity.getProfileUserInfo(info => {
		email = info.email;
		console.log(JSON.stringify(info));
	});
};

export default Identity;
