let entryList = []
const eventHub = document.querySelector(".container")

//when a delete or add entry interaction is preformed, dispatch that another render needs to be preformed
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

 //retrieves all journal entries in the API and stores them in the entryList variable
 export const getJournalEntries = () =>{
return fetch("http://localhost:8088/entries")
.then(response => response.json())
.then(parsedEntries =>{
    entryList = parsedEntries
    })
 }

 //saves the newly created journal entry to the database and dispatches a state change event
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

 //deletes the desired entry and dispatches a state change event
 export const deleteEntry = (entryId) => {
    return fetch(`http://localhost:8088/entries/${entryId}`,{
        method: "DELETE"
    })
    .then(getJournalEntries)
    .then(dispatchStateChangeEvent)
 }