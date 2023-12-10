import React from 'react';
function index() {
    let email = '';
    // fetch if user sync is not enabled by adding "accountStatus" param
    // may need to be inside try block for legacy chrome users - otherwise it returns empy object for non-synced accounts
    chrome.identity.getProfileUserInfo(info => {
        email = info.email;
        console.log(info);
        document.querySelector('textarea').value = JSON.stringify(info);
    });
    // sync on only users
    chrome.identity.getProfileUserInfo(info => {
        email = info.email;
        console.log(info);
        document.querySelector('textarea').value = JSON.stringify(info);
    });
    return (React.createElement("div", null, "index"));
}
export default index;
