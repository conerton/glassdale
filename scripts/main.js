import { CriminalList } from "./criminals/CriminalList.js"
import { getCriminals } from "./criminals/CriminalProvider.js";
import "./criminals/AlibiList.js"

import { renderWitnessButton } from "./witnesses/WitnessButton.js";
import "./witnesses/WitnessList.js"

import { ConvictionSelect } from "./convictions/ConvictionSelect.js"

import { OfficerList } from "./officers/OfficerList.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";


import { NoteForm } from "./notes/NoteForm.js"
import { NoteList } from "./notes/NoteList.js"

import { renderFacilityButton } from "./facility/DisplayFacilitiesButton.js"
import { FacilityList } from "./facility/FacilityList.js"
//import { Facility } from "./facility/Facility.js";

CriminalList()
ConvictionSelect()
OfficerList()
OfficerSelect()
NoteForm()
NoteList()

//createAlibiListener()
renderWitnessButton()
renderFacilityButton()

FacilityList()

// getCriminals()
//     .then(() => NoteForm())
