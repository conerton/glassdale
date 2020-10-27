const contentTarget = document.querySelector(".buttons__witnesses")
const eventHub = document.querySelector(".container")

export const renderWitnessButton = () => {

    contentTarget.innerHTML = `
    
        <button id="display-witness-button"">Witness Statements</button>`
        
}

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "display-witness-button") {
        console.log("BUTTON CLICKED")
        const witnessButtonClicked = new CustomEvent("witnessesClicked")

        eventHub.dispatchEvent(witnessButtonClicked)
        
    }


})