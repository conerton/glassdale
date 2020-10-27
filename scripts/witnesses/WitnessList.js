//import { renderWitnessButton } from "./WitnessButton.js";
import { useWitnesses, getWitnesses } from "./WitnessDataProvider.js";
import { Witness } from "./WitnessStatement.js";

const eventHub = document.querySelector(".container")
const witnessesContainer = document.querySelector(".criminalsContainer")



eventHub.addEventListener("witnessesClicked", () => {
    console.log("BUTTON WAS CLICKED")
    WitnessesList()
})

const WitnessesList = () => {

    getWitnesses()
        .then(() => {
            const witnessesArray = useWitnesses()
            console.log(witnessesArray)
            render(witnessesArray)
        })
}

const render = (witnessStatementsArray) => {
    let witnessHTMLRepresentations = ""
    for (const witness of witnessStatementsArray) {

        witnessHTMLRepresentations += Witness(witness)

        witnessesContainer.innerHTML = `
        <h3>Witnesses</h3>
        <section class="witnessesList">
            ${witnessHTMLRepresentations}
        </section>

        `
    }
}