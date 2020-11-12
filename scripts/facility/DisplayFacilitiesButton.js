const contentTarget = document.querySelector(".facility__button")
const eventHub = document.querySelector(".container")

export const renderFacilityButton = () => {
    //need to make HTML on a button to be clicked
    contentTarget.innerHTML =
    `<button type="button" id="facility-button">Facility List</button>`
        
}

    eventHub.addEventListener("click", (clickEvent) => {
        if (clickEvent.target.id === "facility-button") {
            const facilityButtonClicked = new CustomEvent("facilityButtonClicked")
            eventHub.dispatchEvent(facilityButtonClicked)
            console.log("BUTTON CLICKED")
            
        }
    })
//need to add a eventHub listener to so the button knows what to look for when it is clicked.
