let tabsContainer = document.querySelector("#tabs-nav");
let tabTogglers = tabsContainer.querySelectorAll("#tabs-nav a");
tabTogglers.forEach(function(toggler) {
  toggler.addEventListener("click", function(e) {
    e.preventDefault();
    let tabName = this.getAttribute("href");
    let tabContents = document.querySelector("#tab-contents");
    for (let i = 0; i < tabContents.children.length; i++) {
      tabTogglers[i].classList.remove("text-blue-500"); 
	  tabContents.children[i].classList.remove("hidden");
      if ("#" + tabContents.children[i].id === tabName) {
        continue;
      }
      tabContents.children[i].classList.add("hidden");
    }
    e.target.classList.add("text-blue-500");
  });
});