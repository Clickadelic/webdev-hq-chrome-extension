import React from 'react';
import { useState, useEffect } from 'react';
function Downloads() {
    const [userDownloads, setUserDownloads] = useState([]);
    function getDownloads() {
        chrome.downloads.search({ limit: 10 }, (downloads) => {
            const downloadList = downloads.map((item) => {
                return React.createElement("li", { key: item.id, className: "text-white text-base hover:text-slate-400" }, item.filename);
            });
            setUserDownloads(downloadList);
        });
    }
    function deleteDownloads() {
        alert("Deleting downloads");
    }
    function openDownloadFolder() {
        chrome.downloads.showDefaultFolder();
    }
    useEffect(() => {
        getDownloads();
    }, [userDownloads]);
    return (React.createElement("div", { className: "flex" },
        React.createElement("ul", { className: "list-downloads p-2" }, userDownloads),
        React.createElement("button", { onClick: openDownloadFolder, className: "flex text-white m-auto p-3 text-base hover:text-slate-400" }, chrome.i18n.getMessage("openDownloadsFolder"))));
}
export default Downloads;
