import {
    useJournalEntries,
    getJournalEntries
} from "./JournalDataProvider.js"
import {
    JournalEntryHTML
} from "./JournalEntry.js"
import {
    useMoods,
    getMoods
} from "./MoodDataProvider.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".content__right")
const eventHub = document.querySelector(".container")

//listens for a state change (add or delete an entry) and renders the entry list again
eventHub.addEventListener("journalStateChanged", customEvent => {
    render()
})

//Initial rendering of journal entries on page load
export const EntryListComponent = () => {
    getJournalEntries()
        .then(getMoods)
        .then(render)
}

const render = () => {
    const allMoods = useMoods()
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()
    
    let htmlRep = ""
    entries.map((entry) => {
        // maps through the journal entries and gets the moodId for each
        const mood = allMoods.find((moodObj) => {
            //takes that moodId from the journal obj and matches it with the corresponding mood obj based on id
            return moodObj.id === entry.moodId
        })
        //sends the journal obj and corresponding mood obj to HTML converter
        htmlRep += JournalEntryHTML(entry, mood)
    }).join("")
    //adds the HTML rep to the DOM
    entryLog.innerHTML = htmlRep
}