import { useJournalEntries, getJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryHTML } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".content__right")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("journalStateChanged", customEvent =>{
    render()
})


export const EntryListComponent = () => {
    getJournalEntries()
    .then(()=>{
        render()
    })
}

const render = () => {
    // Use the journal entry data from the data provider component
const entries = useJournalEntries()
    //
entryLog.innerHTML += `${entries.map(entry => JournalEntryHTML(entry)).join("")}`

    }
