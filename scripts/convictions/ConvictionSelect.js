/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions, getConvictions } from "./ConvictionProvider.js"


// Get a reference to the DOM element where the <select> will be rendered

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

eventHub.addEventListener("change", (changeEvent) => {

    // Only do this if the `crimeSelect` element was changed
    if (changeEvent.target.id === "crimeSelect") {
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeSelected", {
            detail: {
                crimeThatWasChosen: parseInt(changeEvent.target.value)
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})



const render = convictionsCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${convictionsCollection.map(convictionObj => {
                    return `
                    <option value ="${convictionObj.id}">${convictionObj.name}</option>
                    `
                }).join("")
            }
        </select>
    `
}

export const ConvictionSelect = () => {
    // Get all convictions from application state
    getConvictions()
        .then( () => {
    
            const convictions = useConvictions()    
            render(convictions)
            //console.log(convictions)
    })
    //console.log(ConvictionSelect)
}










