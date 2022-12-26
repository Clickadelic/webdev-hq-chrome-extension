class ActionBox {

    constructor(){
        this.renderActionBox()
    }

    renderActionBox(){
        // create
        const body = document.body
        const actionBox = document.createElement('div')
		actionBox.style.position = "fixed"
		actionBox.style.right = "2rem"
		actionBox.style.bottom = "2rem"
		actionBox.style.background = "aqua"
		actionBox.style.width = "60px"
		actionBox.style.height = "60px"
		actionBox.style = {background: "red"}
        body.appendChild(actionBox)
        console.log('Rendering Layout finished')
    }

}
const actionbox = new ActionBox()
