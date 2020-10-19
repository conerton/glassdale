import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'

const contentElement = document.querySelector(".criminalsContainer")
    

export const CriminalList = () => {
    getCriminals().then( () => {
        const criminals = useCriminals()
        let criminalsHTMLRepresentations = ""
        for (const criminal of criminals) {
            criminalsHTMLRepresentations += Criminal(criminal)

            contentElement.innerHTML = `
            <h3>Glassdale Criminals</h3>
            <section class="criminalsList">
                ${criminalsHTMLRepresentations}
            </section>
            `
            }
         }
        )
    }

    
        /*
            Now that you have the data, what
            component should be rendered?
        */
    
