import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { Criminal } from "./Criminal.js";
import { useConvictions } from "../convictions/ConvictionProvider.js";
import { getCriminalFacilities, useCriminalFacilities } from "../facility/CriminalFacilityProvider.js";
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js";
const eventHub = document.querySelector(".container");
const criminalsContainer = document.querySelector(".criminalsContainer");

//OLD CODE BEFORE FALILITIES
// export const CriminalList = () => {

//     getCriminals()
//         .then(() => {
//             const criminalArray = useCriminals()
//             render(criminalArray)
//         })
// }

export const CriminalList = () => {
    // get the criminals 
    // get the criminalFac
    // get the facilities 
    // out that data into empty arrays to be used outside of this function.
};

eventHub.addEventListener("officerSelected", (officerSelectedEventObj) => {
  const selectedOfficerName = officerSelectedEventObj.detail.officerName;
  console.log(
    "CriminalList: officerSelected custom event has been heard on the event hub, selected officer name: ",
    selectedOfficerName
  );

  const criminalsArray = useCriminals();
  console.log("criminalsArray", criminalsArray);

  const filteredArrayCriminals = criminalsArray.filter((criminalObj) => {
    return criminalObj.arrestingOfficer === selectedOfficerName;
  });
  const facilities = useFacilities();
  const crimFac = useCriminalFacilities();

  console.log(
    "CriminalList: Array of criminals filtered for only the criminals that were arrested by selected officer",
    filteredArrayCriminals
  );

  render(filteredArrayCriminals, facilities, crimFac);
  console.log("CriminalList: Filtered list of criminals rendered to DOM");
});

// console.log(CriminalList("This is this the criminal list", ))

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeSelected", (event) => {
  // Use the property you added to the event detail.
  if (event.detail.crimeThatWasChosen !== 0) {
    const criminalsArray = useCriminals();

    const convictionsArray = useConvictions();

    const convictionThatWasChosen = convictionsArray.find((convictionObj) => {
      return convictionObj.id === event.detail.crimeThatWasChosen;
    });
    const filteredCriminalsArray = criminalsArray.filter((criminalObj) => {
      return criminalObj.conviction === convictionThatWasChosen.name;
    });
    const facilities = useFacilities();
    const crimFac = useCriminalFacilities();

    render(filteredCriminalsArray, facilities, crimFac);
    /*
            Filter the criminals application state down to the people that committed the crime
        */
    // const matchingCriminals = appStateCriminals.filter()

    /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
  }
});

const render = () => {
  //here we will render the criminals on the DOM
  //We are going to loop through the crimFac and find the criminals with the matching Id's
  //Then take that found data and find the facilities of the criminals found in CrimFac
  //then render all of that information to the DOM
};

//THIS IS OLD CODE BEFORE FACILITIES
// const render = (criminalsArray) => {
//     let criminalsHTMLRepresentations = ""
//     for (const criminal of criminalsArray) {

//       criminalsHTMLRepresentations += Criminal(criminal)

//       criminalsContainer.innerHTML = `
//             <h3>Glassdale Criminals</h3>
//             <section class="criminalsList">
//               ${criminalsHTMLRepresentations}
//             </section>
//           `
//     }
//   }
// const render = criminalCollection => {
//     contentTarget.innerHTML = you_fill_this_in
// }
