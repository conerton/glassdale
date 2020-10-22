import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'
import { useConvictions } from "../convictions/ConvictionProvider.js"

const eventHub = document.querySelector(".container")
const criminalsContainer = document.querySelector(".criminalsContainer")



export const CriminalList = () => {

    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()
            render(criminalArray)
        })
} 

// console.log(CriminalList("This is this the criminal list", ))

// this was my previous code. It is doo doo.
// export const CriminalList = () => {
//     getCriminals()
//     .then( () => {
//         const criminals = useCriminals()
//         let criminalsHTMLRepresentations = ""
//         for (const criminal of criminals) {
//             criminalsHTMLRepresentations += Criminal(criminal)

//             contentElement.innerHTML = `
//             <h3>Glassdale Criminals</h3>
//             <section class="criminalsList">
//                 ${criminalsHTMLRepresentations}
//             </section>
//             `
//             }
//          }
//         )
//     }

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

const render = (criminalsArray) => {
    let criminalsHTMLRepresentations = ""
    for (const criminal of criminalsArray) {
  
      criminalsHTMLRepresentations += Criminal(criminal)
  
      criminalsContainer.innerHTML = `
            <h3>Glassdale Criminals</h3>
            <section class="criminalsList">
              ${criminalsHTMLRepresentations}
            </section>
          `
    }
  }
// const render = criminalCollection => {
//     contentTarget.innerHTML = you_fill_this_in
// }



    
