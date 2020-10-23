
import { getOfficers, useOfficers } from "./OfficerProvider.js"

const officersFilterContainer = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")


export const OfficerSelect = () => {
  

  getOfficers()
    .then(() => {
      const officersArray = useOfficers()
      //console.log("officersArrays", officersArray)

      render(officersArray)
    })
}

const render = (officers) => {
  officersFilterContainer.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${officers.map(
    officerObj => {
      return `<option value="${officerObj.name}">${officerObj.name}</option>`
    }
  ).join("")
    }
        </select>
    `
}
eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const officerSelectedEvent = new CustomEvent("officerSelected", {
            detail: {
                officerName: changeEvent.target.value
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(officerSelectedEvent)
    }
})