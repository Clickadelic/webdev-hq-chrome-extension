export default defineContentScript({
	main(ctx) {
		const addRulers = () => {
			const topRuler = document.createElement("div")
			topRuler.id = "webdev-hq-top-ruler"
			topRuler.classList.add("webdev-hq-rulers", "webdev-hq-rulers-horizontal")
			topRuler.style.position = "fixed"
			topRuler.style.top = "0"
			topRuler.style.left = "0"
			topRuler.style.width = "100%"
			topRuler.style.height = "1rem"
			topRuler.style.padding = "0"
			topRuler.style.margin = "0"
			topRuler.style.backgroundColor = "red"
			topRuler.style.opacity = ".25"
			topRuler.style.borderBottom = "1px solid black"
			topRuler.style.borderRadius = "0"
			document.body.appendChild(topRuler)

			const leftRuler = document.createElement("div")
			leftRuler.id = "webdev-hq-left-ruler"
			leftRuler.classList.add("webdev-hq-rulers", "webdev-hq-rulers-vertical")
			leftRuler.style.position = "fixed"
			leftRuler.style.top = "0"
			leftRuler.style.left = "0"
			leftRuler.style.width = "1rem"
			leftRuler.style.height = "100%"
			leftRuler.style.padding = "0"
			leftRuler.style.margin = "0"
			leftRuler.style.backgroundColor = "red"
			leftRuler.style.opacity = ".25"
			leftRuler.style.borderRight = "1px solid black"
			leftRuler.style.borderRadius = "0"
			document.body.appendChild(leftRuler)
		}
		addRulers()
	}
})
