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

CriminalList()
ConvictionSelect()
OfficerList()
OfficerSelect()
NoteForm()
NoteList()

//createAlibiListener()
renderWitnessButton()

// getCriminals()
//     .then(() => NoteForm())
