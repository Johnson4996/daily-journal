let entryList = []

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}

 export const useJournalEntries = () => {
    const sortedByDate = entryList.sort(
        (currentEntry, nextEntry) =>
        Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
 }

 export const getJournalEntries = () =>{
return fetch("http://localhost:8088/entries")
.then(response => response.json())
.then(parsedEntries =>{
    entryList = parsedEntries
    })
 }

 export const saveJournalEntry = (newEntry) =>{
    fetch("http://localhost:8088/entries",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEntry)
    })
    .then(getJournalEntries)
    .then(dispatchStateChangeEvent)
 }