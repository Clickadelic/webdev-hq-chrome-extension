export const dailySalutation = () => {
	const date = new Date()
	const hours = date.getHours()
	if (hours < 12) {
		return "Good Morning"
	} else if (hours < 18) {
		return "Good Afternoon"
	} else {
		return "Good Evening"
	}
}

export const userName = () => {
	chrome.identity.getProfileUserInfo(userInfo => {
		console.log(userInfo.email); // z.B. "max.mustermann@gmail.com"
		console.log(userInfo.id); 
		return userInfo   // z.B. "123456789012345678901"
	});
}
