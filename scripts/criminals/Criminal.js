const eventHub = document.querySelector(".container")


export const Criminal = (criminalObj) => {
    return `
    <div id= "criminal-${criminalObj.id}" class="criminal">
    <h3>${criminalObj.name}</h3>
    <p>Age: ${criminalObj.age}</p>
    <p>Crime: ${criminalObj.conviction}</p>
    <p>Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
    <p>Term End: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
    <button id="associates--${criminalObj.id}">Associate Alibis</button>
    </div>
    `
}


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