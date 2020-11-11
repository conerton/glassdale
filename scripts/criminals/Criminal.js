const eventHub = document.querySelector(".container")



export const Criminal = (criminalObject, facilities) => {
    return `
    <div id= "criminal-${criminalObject.id}" class="criminal">
        <h4>${criminalObject.name}</h4>
        <div class="criminal__details">
            <p>Convicted for ${criminalObject.conviction}</p>
            <p>Arrested by ${criminalObject.arrestingOfficer}</p>
            <p>Incarcerated between:
                ${new Date(criminalObject.incarceration.start).toLocaleDateString()} and
                ${new Date(criminalObject.incarceration.end).toLocaleDateString()}
            </p>
            <p>Age: ${criminalObject.age}</p>
            <div>
                <h2>Facilities</h2>
                <ul>
                    ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                </ul>
            </div>
            <button id="associates--${criminalObject.id}">Show Associates</button>
        </div>
    </div>
    `
}

// OLD CODE
// export const Criminal = (criminalObj) => {
//     return `
//     <div id= "criminal-${criminalObj.id}" class="criminal">
//     <h3>${criminalObj.name}</h3>
//     <p>Age: ${criminalObj.age}</p>
//     <p>Crime: ${criminalObj.conviction}</p>
//     <p>Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
//     <p>Term End: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
//     <button id="associates--${criminalObj.id}">Associate Alibis</button>
//     </div>
//     `
// }


eventHub.addEventListener("click", (eventObj) => {

    const [ nameOfId, criminalId ] = eventObj.target.id.split("--")
    //console.log("Button was clicked", nameOfId, criminalId) 

    if(eventObj.target.id.startsWith("associates--")){
        console.log("Button was clicked", nameOfId, criminalId)

        const myCustomEvent = new CustomEvent("alibiButtonClicked", {
            detail: {
                criminalId: criminalId
            }
        })

        eventHub.dispatchEvent(myCustomEvent)
    }
})