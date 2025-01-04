import React from "react";
import { videoplatforms } from "../../constants";
function VideoPlatforms() {
    const currentVideoPlatforms = videoplatforms.map(platform => {
        return (React.createElement("li", { key: platform.id, className: "flex flex-col group items-center justify-center" },
            React.createElement("a", { href: platform.href, title: platform.title, target: platform.target, className: "w-20 h-20 flex flex-col justify-center items-center text-center backdrop-blur-sm bg-white/10 group-hover:bg-white rounded-lg" },
                React.createElement("img", { src: platform.icon, className: "w-10 h-10 p-1", alt: platform.title }),
                React.createElement("span", { className: "text-sm mt-1 text-white group-hover:text-slate-800 break-normal" }, platform.title))));
    });
    return (React.createElement("div", { className: "m-auto md:w-[760px] justify-between" },
        React.createElement("ul", { className: "grid grid-cols-8 gap-3 content-center items-center rounded-b" }, currentVideoPlatforms)));
}
export default VideoPlatforms;
