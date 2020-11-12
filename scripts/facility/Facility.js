export const Facility = (facility) => {
    //this will pass a facility parameter to interperlate in the html
    return `
    <h3>${facility.facilityName}</h3>
    <p>${facility.securityLevel}</p>
    <p>${facility.capacity}</p>
    `    

    //this where the specific data of each facility will be put into HTML.
  }
