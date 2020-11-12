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


const FacilityList = () => {
    //get the info from criminals
    //get the info from facilities
    //get the info from criminalFacilities
    //once you have the info put it in the empty arrays.
};

const render = () => {
    // we need to render HTML of the criminals with their matching with facilies
    //we need to take the crimFac info and find the matching facility Ids
    //then we need to take that info and match it with the criminal Ids.
    //render to the DOM the Facility and the criminals who are inside it. 
};


