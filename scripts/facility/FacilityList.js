
import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js";
import { Facility } from "./Facility.js";
import { getCriminalFacilities, useCriminalFacilities } from "./CriminalFacilityProvider.js"
import { getFacilities, useFacilities } from "./FacilityProvider.js"

const eventHub = document.querySelector(".container")
const facilitiesContainer = document.querySelector(".facilityContainer")

let facilities = []
let crimFac = []
let criminals = []

eventHub.addEventListener("facilityButtonClicked", () => {
    console.log("BUTTON WAS CLICKED")
    FacilityList()
})


export const FacilityList = () => {

  getFacilities()
      .then(getCriminalFacilities)
      .then(getCriminals)
      .then(() => {
        facilities = useFacilities()
        crimFac = useCriminalFacilities()
        criminals = useCriminals()
  
        render()
      })
      }

      const render = () => {
        facilitiesContainer.innerHTML = `
                <h3>Glassdale Facilities</h3>
                <section class="facilitiesList">
                  ${facilities.map(facility => {
          const criminalRelationshipsForThisFacility = crimFac.filter(cf => cf.facilityId === facility.id)
          const criminalsAtThisFacility = criminalRelationshipsForThisFacility.map(cf => {
            const matchingCriminalObj = criminals.find(criminal => criminal.id === cf.criminalId)
            return matchingCriminalObj
          })
          return Facility(facility, criminalsAtThisFacility)
        }).join("")
          }
                </section>
              `
      }






// OLD BROKE CODE
// export const FacilityList = () => {

//     getCriminals()
//         .then(() => {
//             const criminalArray = useCriminals()
//             console.log(criminalArray)
//             render(criminalArray)
//         })
// }


// const render = (facilityArray) => {
//     let facilityHTMLRepresentations = ""
//     for (const facility of facilityArray) {

//         facilityHTMLRepresentations += Facility(facility)

//         facilityContainer.innerHTML = `
//         <h3>Facility</h3>
//         <section class="facilityList">
//             ${facilityHTMLRepresentations}
//         </section>

//         `
//     }
// }