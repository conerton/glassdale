export const Criminal = (criminalObj) => {
    return `
    <div class="criminal">
    <h3>${criminalObj.name}</h3>
    <p>Age: ${criminalObj.age}</p>
    <p>Crime: ${criminalObj.crime}</p>
    <p>Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
    <p>Term End: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
    </div>
    `
}