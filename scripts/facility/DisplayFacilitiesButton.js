
// The criminal list should listen for that event and toggle its visibility.
// Create a Facility component and a FacilityList component.
// Create /styles/facilities.css file and copy/pasta the code from statements.css and change the colors




const contentTarget = document.querySelector(".facility__button")
const eventHub = document.querySelector(".container")

export const renderFacilityButton = () => {

    contentTarget.innerHTML = `
    
        <button id="display-facility-button"">Facility Button</button>`
        
}

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "display-facility-button") {
        console.log("BUTTON CLICKED")
        const facilityButtonClicked = new CustomEvent("facilitiesClicked")

        eventHub.dispatchEvent(facilityButtonClicked)
        
    }


})