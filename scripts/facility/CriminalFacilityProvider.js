let criminalFacilities = []

export const useCriminalFacilities = () => {
   // taking the data from criminalFacilities and slicing it one by one in the array
  return criminalFacilities.slice()
}

export const getCriminalFacilities = () => {
    // make a fetch call to the criminalFacility API to get data
    return fetch("https://criminals.glassdale.us/criminalFacilities")
        .then(response => response.json())
        .then(apiData => {
            criminalFacilities = apiData
        })
    // then make it readable for json
    // then put the data in an empty array called criminalFacilities
    
}