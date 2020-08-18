import { useJournalEntries, getJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryHTML } from "./JournalEntry.js"
import { useMoods } from "./MoodDataProvider.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".content__right")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("journalStateChanged", customEvent =>{
    EntryListComponent()
})


export const EntryListComponent = () => {
    getJournalEntries()
    .then(()=>{
        render()
    })
}

const render = () => {
    const allMoods = useMoods()
    // Use the journal entry data from the data provider component
const entries = useJournalEntries()
    //


entries.map((entry) =>{
    const mood = allMoods.find((moodObj)=>{
        return moodObj.id === entry.moodId
    })
entryLog.innerHTML += JournalEntryHTML(entry,mood)
}).join("")
}

