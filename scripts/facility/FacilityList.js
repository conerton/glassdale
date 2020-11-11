
import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js";
import { Facility } from "./Facility.js";

const eventHub = document.querySelector(".container")
const facilityHTMLRepresentations = document.querySelector(".criminalsContainer")



eventHub.addEventListener("facilityButtonClicked", () => {
    console.log("BUTTON WAS CLICKED")
    FacilityList()
})

const FacilityList = () => {

    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()
            console.log(criminalArray)
            render(criminalArray)
        })
}

const render = (facilityArray) => {
    let facilityHTMLRepresentations = ""
    for (const facility of facilityArray) {

        facilityHTMLRepresentations += Facility(facility)

        facilityContainer.innerHTML = `
        <h3>Facility</h3>
        <section class="facilityList">
            ${facilityHTMLRepresentations}
        </section>

        `
    }
}