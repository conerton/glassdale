import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "../facility/CriminalFacilityProvider.js"
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js"
const eventHub = document.querySelector(".container")
const criminalsContainer = document.querySelector(".criminalsContainer")


//OLD CODE BEFORE FALILITIES
// export const CriminalList = () => {

//     getCriminals()
//         .then(() => {
//             const criminalArray = useCriminals()
//             render(criminalArray)
//         })
// } 

export const CriminalList = () => {
  // Kick off the fetching of both collections of data
  getFacilities()
      .then(getCriminalFacilities)
      .then(
          () => {
              // Pull in the data now that it has been fetched
              const facilities = useFacilities()
              const crimFac = useCriminalFacilities()
              const criminals = useCriminals()

              // Pass all three collections of data to render()
              render(criminals, facilities, crimFac)
          }
      )
}



eventHub.addEventListener("officerSelected", officerSelectedEventObj => {
    const selectedOfficerName = officerSelectedEventObj.detail.officerName
    console.log("CriminalList: officerSelected custom event has been heard on the event hub, selected officer name: ", selectedOfficerName)
  
    const criminalsArray = useCriminals()
    console.log("criminalsArray", criminalsArray)
  
    const filteredArrayCriminals = criminalsArray.filter(
      (criminalObj) => {
       
  
        if (criminalObj.arrestingOfficer === selectedOfficerName) {
          return true
        }
        return false
      }
    )
    console.log("CriminalList: Array of criminals filtered for only the criminals that were arrested by selected officer", filteredArrayCriminals)
  
    render(filteredArrayCriminals)
    console.log("CriminalList: Filtered list of criminals rendered to DOM")
  })

// console.log(CriminalList("This is this the criminal list", ))


// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeSelected", event => {
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== 0){

        const criminalsArray = useCriminals()

        const convictionsArray = useConvictions()

        const convictionThatWasChosen = convictionsArray.find(convictionObj => {

            return convictionObj.id === event.detail.crimeThatWasChosen
        })
        const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
            return criminalObj.conviction === convictionThatWasChosen.name
        })

        render(filteredCriminalsArray)
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        // const matchingCriminals = appStateCriminals.filter()

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
    }
})

const render = (criminalsToRender, allFacilities, allRelationships) => {
  // Step 1 - Iterate all criminals
  criminalsContainer.innerHTML = criminalsToRender.map(
      (criminalObject) => {
          // Step 2 - Filter all relationships to get only ones for this criminal
          const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

          // Step 3 - Convert the relationships to facilities with map()
          const facilities = facilityRelationshipsForThisCriminal.map(cf => {
              const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
              return matchingFacilityObject
          })

          // Must pass the matching facilities to the Criminal component
          return Criminal(criminalObject, facilities)
      }
  ).join("")
}





//THIS IS OLD CODE BEFORE FACILITIES 
// const render = (criminalsArray) => {
//     let criminalsHTMLRepresentations = ""
//     for (const criminal of criminalsArray) {
  
//       criminalsHTMLRepresentations += Criminal(criminal)
  
//       criminalsContainer.innerHTML = `
//             <h3>Glassdale Criminals</h3>
//             <section class="criminalsList">
//               ${criminalsHTMLRepresentations}
//             </section>
//           `
//     }
//   }
// const render = criminalCollection => {
//     contentTarget.innerHTML = you_fill_this_in
// }



    
