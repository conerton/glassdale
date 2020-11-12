import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js";
import { Facility } from "./Facility.js";
import {
  getCriminalFacilities,
  useCriminalFacilities,
} from "./CriminalFacilityProvider.js";
import { getFacilities, useFacilities } from "./FacilityProvider.js";

const eventHub = document.querySelector(".container");
const facilitiesContainer = document.querySelector(".facilityContainer");

let facilities = [];
let crimFac = [];
let criminals = [];

//add eventHub listener so the Facility button know to look for FacilityList data when it is clicked 
eventHub.addEventListener("facilityButtonClicked", () => {
    console.log("hello")
    FacilityList()
    })

const FacilityList = () => {
    //get the info from criminals
    getCriminals()
        .then(getCriminalFacilities)
        .then(getFacilities)
        .then(() => {
            facilities = useFacilities()
            crimFac = useCriminalFacilities()
            criminals = useCriminals()

            render()
        })

    //get the info from facilities
    //get the info from criminalFacilities
    //once you have the info put it in the empty arrays.
};


const render = () => {
    facilitiesContainer.innerHTML = `
        <h3>Glassdale Facilities</h3>
        <section class="facilitiesList">
            ${facilities.map(facility => {
                const criminalsIdsInThisFacility = crimFac.filter(cf => cf.facilityId === facility.id)
                const criminalsAtThisFacility = criminalsIdsInThisFacility.map(cf => {
                    const matchingCriminals = criminals.find(criminal => criminal.id === cf.criminalId)
                    return matchingCriminals
                })
                return Facility(facility, criminalsAtThisFacility)
            }).join("")
        }
        
        </section>

    `
    // we need to render HTML of the criminals with their matching with facilies
    //we need to take the crimFac info and find the matching facility Ids
    //then we need to take that info and match it with the criminal Ids.
    //render to the DOM the Facility and the criminals who are inside it. 
};


