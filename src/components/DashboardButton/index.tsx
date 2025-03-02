import React from "react";

function DashboardButton() {
  return (
    <button
      className="absolute left-0 right-0 bottom-0 bg-white/10 backdrop backdrop-blur hover:bg-slate-200 w-96 p-2 rounded-t-md"
      role="button"
      onClick={() => {
        chrome.tabs.create({ url: "dashboard.html" });
      }}
    >
      <span className="text-base font-medium text-white">Dashboard</span>
    </button>
  );
}

export default DashboardButton;
