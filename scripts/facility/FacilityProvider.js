let facilities = []

export const useFacilities = () => {
    // taking the data from Facilities and slicing it one by one in the array
    return facilities.slice()
}

export const getFacilities = () => {
    return fetch("https://criminals.glassdale.us/facilities")
        .then(response => response.json())
        .then(apiData => {
            facilities = apiData
        })
    // make a fetch call to the Facilites API to get data
    // then make it readable for json
    // then put the data in an empty array called Facilities
}