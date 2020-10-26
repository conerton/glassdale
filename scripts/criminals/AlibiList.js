import { useCriminals } from "./CriminalProvider.js"

const eventHub = document.querySelector(".container")

export const createAlibiListener = () => {
    eventHub.addEventListener("alibiButtonClicked", (eventObj) => {
        console.log("hey!", eventObj)

        const arrayOfCriminals = useCriminals()

        const foundCriminal = arrayOfCriminals.find((criminalObj) => {
            return criminalObj.id === parseInt(eventObj.detail.criminalId)

        })


        render(foundCriminal)
    })
}


const render = (criminalObj) => {
    const conterntTarget = document.querySelector(`#criminal-${criminalObj.id}`)
    conterntTarget.innerHTML += `
    <div class="alibi__List">
        ${criminalObj.known_associates.map(alibiObj => {
        return `
                <p>${alibiObj.name}</p>
                <p>${alibiObj.alibi}</p>
                `
    }).join("")}
    </div>`
}