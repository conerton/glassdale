import { saveNote } from "./NotesDataProvider.js"
import { useCriminals, getCriminals} from "../criminals/CriminalProvider.js"


const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


// export const NoteForm = () => {
//     const arrayOfCriminals = useCriminals()
//     render(arrayOfCriminals)
// }

const render = (arrayOfCriminals) => {

    const dropdown = arrayOfCriminals.map(criminalObj => {
        return `
        <option value="${criminalObj.id}"> ${criminalObj.name} </option>
        `
    }).join("")

    contentTarget.innerHTML = `
        <input id="note--dateOfInterview" type="date"/>
        <input id="note--author" type="text" placeholder="Your Name Here"/>
        <select id="note--criminal" class="criminalSelect">
        ` + `${dropdown}` + `
        <textarea id="note--note" placeholder="Your Note Here"></textarea>
        <button id="saveNote">Save Note</button>
    ` 
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveNote") {
        // grab input values
        const dateOfInterview = document.querySelector("#note--dateOfInterview").value
        const author = document.querySelector("#note--author").value
        const criminalId = document.querySelector("#note--criminal").value
        const note = document.querySelector("#note--note").value
        const timestamp = Date.now()

        // make a note object

        const newNote = {
            dateOfInterview,
            timestamp,
            author,
            criminalId,
            note
        }

        // POST object to database / API / json file
        saveNote(newNote)
    }
})


export const NoteForm = () => {
    getCriminals()
    .then(() => {
        const listOfCriminals = useCriminals()
        render(listOfCriminals)
    })
}