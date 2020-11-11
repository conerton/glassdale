//import { useConvictions } from "../convictions/ConvictionProvider"

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")
    eventHub.dispatchEvent(noteStateChangedEvent)
}

let notes = []

export const getNotes = () => {
    return fetch('http://localhost:8088/notes', {
        method: "GET"
    })
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
            console.log("notes", notes)
        })
}
console.log("GETNOTES", getNotes())

export const useNotes = () => {
    return notes.slice()
}

console.log("usenotes", useNotes)

export const saveNote = (note) => {
    // POST note object to API
    // then get all notes from API
    // then dispatch state change event to event hub that notes have been updated

    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}
// console.log("SAVED NOTES", saveNote())